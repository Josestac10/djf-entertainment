import { NextRequest, NextResponse } from "next/server";
import { once } from "node:events";
import tls from "node:tls";

export const runtime = "nodejs";

type Inquiry = {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  eventType: string;
  location: string;
  hours: string;
  extras: string;
  message: string;
  website?: string;
};

function clean(value: unknown, max = 1000) {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendGmailMessage({
  user,
  appPassword,
  to,
  replyTo,
  subject,
  html,
}: {
  user: string;
  appPassword: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
}) {
  const socket = tls.connect({
    host: "smtp.gmail.com",
    port: 465,
    servername: "smtp.gmail.com",
    rejectUnauthorized: true,
  });

  socket.setTimeout(15000, () => socket.destroy(new Error("SMTP timeout")));
  await once(socket, "secureConnect");

  const iterator = socket[Symbol.asyncIterator]();
  let buffer = "";

  async function readLine(): Promise<string> {
    while (!buffer.includes("\r\n")) {
      const next = await iterator.next();
      if (next.done) throw new Error("SMTP connection closed unexpectedly");
      buffer += Buffer.from(next.value).toString("utf8");
    }
    const index = buffer.indexOf("\r\n");
    const line = buffer.slice(0, index);
    buffer = buffer.slice(index + 2);
    return line;
  }

  async function readResponse(expected: number[]) {
    const lines: string[] = [];
    while (true) {
      const line = await readLine();
      lines.push(line);
      const final = line.match(/^(\d{3})\s/);
      if (final) {
        const code = Number(final[1]);
        if (!expected.includes(code)) {
          throw new Error(`SMTP error ${code}: ${lines.join(" | ")}`);
        }
        return lines.join("\n");
      }
    }
  }

  async function command(value: string, expected: number[]) {
    socket.write(`${value}\r\n`);
    return readResponse(expected);
  }

  try {
    await readResponse([220]);
    await command("EHLO djfentertainment.com", [250]);
    await command("AUTH LOGIN", [334]);
    await command(Buffer.from(user).toString("base64"), [334]);
    await command(Buffer.from(appPassword.replace(/\s+/g, "")).toString("base64"), [235]);
    await command(`MAIL FROM:<${user}>`, [250]);
    await command(`RCPT TO:<${to}>`, [250, 251]);
    await command("DATA", [354]);

    const encodedSubject = `=?UTF-8?B?${Buffer.from(subject, "utf8").toString("base64")}?=`;
    const message = [
      `From: DJF Entertainment Website <${user}>`,
      `To: ${to}`,
      `Reply-To: ${replyTo}`,
      `Subject: ${encodedSubject}`,
      "MIME-Version: 1.0",
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      html,
    ]
      .join("\r\n")
      .split("\r\n")
      .map((line) => (line.startsWith(".") ? `.${line}` : line))
      .join("\r\n");

    socket.write(`${message}\r\n.\r\n`);
    await readResponse([250]);
    await command("QUIT", [221]);
  } finally {
    socket.end();
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<Inquiry>;
    const inquiry: Inquiry = {
      name: clean(body.name, 120),
      phone: clean(body.phone, 60),
      email: clean(body.email, 180),
      eventDate: clean(body.eventDate, 40),
      eventType: clean(body.eventType, 80),
      location: clean(body.location, 180),
      hours: clean(body.hours, 60),
      extras: clean(body.extras, 500),
      message: clean(body.message, 2000),
      website: clean(body.website, 200),
    };

    if (inquiry.website) {
      return NextResponse.json({ ok: true });
    }

    if (!inquiry.name || !inquiry.phone || !inquiry.email || !inquiry.eventDate || !inquiry.eventType || !inquiry.location || !inquiry.message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(inquiry.email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.trim();
    const recipient = process.env.CONTACT_TO_EMAIL?.trim() || gmailUser;

    if (!gmailUser || !gmailAppPassword || !recipient) {
      console.error("Contact form email environment variables are not configured.");
      return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 503 });
    }

    const phoneHref = inquiry.phone.replace(/[^+\d]/g, "");
    const rows = [
      ["Name", inquiry.name],
      ["Phone", inquiry.phone],
      ["Email", inquiry.email],
      ["Event type", inquiry.eventType],
      ["Event date", inquiry.eventDate],
      ["Location / venue", inquiry.location],
      ["Estimated service hours", inquiry.hours || "Not specified"],
      ["Lighting / extras", inquiry.extras || "Not specified"],
      ["Message", inquiry.message],
    ];

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f4f4;padding:28px;color:#111">
        <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:18px;overflow:hidden;border:1px solid #e7e7e7">
          <div style="background:#000;padding:24px 28px;color:#fff">
            <div style="font-size:12px;letter-spacing:.16em;color:#7f96ff;font-weight:700">DJF ENTERTAINMENT</div>
            <h1 style="font-size:26px;margin:8px 0 0">New website inquiry</h1>
          </div>
          <div style="padding:28px">
            ${rows.map(([label, value]) => `<div style="padding:12px 0;border-bottom:1px solid #eee"><div style="font-size:11px;letter-spacing:.12em;color:#777;font-weight:700;text-transform:uppercase">${escapeHtml(label)}</div><div style="font-size:16px;margin-top:5px;white-space:pre-wrap">${escapeHtml(value)}</div></div>`).join("")}
            <div style="padding-top:24px;display:flex;gap:10px;flex-wrap:wrap">
              <a href="mailto:${escapeHtml(inquiry.email)}" style="display:inline-block;background:#0529ED;color:#fff;text-decoration:none;padding:12px 18px;border-radius:999px;font-weight:700">Reply by email</a>
              <a href="tel:${escapeHtml(phoneHref)}" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:12px 18px;border-radius:999px;font-weight:700">Call customer</a>
            </div>
          </div>
        </div>
      </div>
    `;

    await sendGmailMessage({
      user: gmailUser,
      appPassword: gmailAppPassword,
      to: recipient,
      replyTo: inquiry.email,
      subject: `New DJF inquiry - ${inquiry.eventType} - ${inquiry.name}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Unable to send inquiry right now." }, { status: 500 });
  }
}
