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
  return String(value ?? "")
    .trim()
    .slice(0, max);
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
    await command(
      Buffer.from(appPassword.replace(/\s+/g, "")).toString("base64"),
      [235],
    );
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

    if (
      !inquiry.name ||
      !inquiry.phone ||
      !inquiry.email ||
      !inquiry.eventDate ||
      !inquiry.eventType ||
      !inquiry.location ||
      !inquiry.message
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(inquiry.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.trim();
    const recipient = process.env.CONTACT_TO_EMAIL?.trim() || gmailUser;

    if (!gmailUser || !gmailAppPassword || !recipient) {
      console.error(
        "Contact form email environment variables are not configured.",
      );
      return NextResponse.json(
        { error: "Email delivery is not configured yet." },
        { status: 503 },
      );
    }

    const extrasHtml = escapeHtml(
      inquiry.extras || "No extras specified"
    ).replace(/\r?\n/g, "<br />");

    const messageHtml = escapeHtml(
      inquiry.message
    ).replace(/\r?\n/g, "<br />");

    const phoneHref = inquiry.phone.replace(/[^+\d]/g, "");
    const eventDateLabel = /^\d{4}-\d{2}-\d{2}$/.test(inquiry.eventDate)
      ? new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(`${inquiry.eventDate}T00:00:00Z`))
      : inquiry.eventDate;

      const html = `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
          <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="width:100%;background:#ffffff;margin:0;padding:0;"
          >
            <tr>
              <td align="center" style="padding:36px 16px;">

                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="
                    width:100%;
                    max-width:680px;
                    background:#0d0d12;
                    border:1px solid #24242c;
                    border-radius:20px;
                    overflow:hidden;
                  "
                >

                  <!-- BLUE ACCENT -->
                  <tr>
                    <td
                      style="
                        height:5px;
                        background:#0529ED;
                        font-size:0;
                        line-height:0;
                      "
                    >
                      &nbsp;
                    </td>
                  </tr>

                  <!-- HEADER -->
                  <tr>
                    <td style="padding:32px 32px 26px 32px;">

                      <div
                        style="
                          color:#5270ff;
                          font-size:11px;
                          font-weight:700;
                          letter-spacing:2.4px;
                          text-transform:uppercase;
                        "
                      >
                        DJF ENTERTAINMENT
                      </div>

                      <h1
                        style="
                          margin:10px 0 0 0;
                          color:#ffffff;
                          font-size:30px;
                          line-height:1.15;
                          font-weight:800;
                        "
                      >
                        New Event Inquiry
                      </h1>

                      <p
                        style="
                          margin:10px 0 0 0;
                          color:#a1a1aa;
                          font-size:14px;
                          line-height:1.6;
                        "
                      >
                        A new customer submitted an inquiry through the DJF Entertainment website.
                      </p>
                    </td>
                  </tr>

                  <!-- DIVIDER -->
                  <tr>
                    <td style="padding:0 32px;">
                      <div
                        style="
                          height:1px;
                          background:#24242c;
                          font-size:0;
                          line-height:0;
                        "
                      >
                        &nbsp;
                      </div>
                    </td>
                  </tr>

                  <!-- CLIENT INFORMATION -->
                  <tr>
                    <td style="padding:28px 32px 10px 32px;">

                      <div
                        style="
                          color:#5270ff;
                          font-size:10px;
                          font-weight:700;
                          letter-spacing:2px;
                          text-transform:uppercase;
                          margin-bottom:18px;
                        "
                      >
                        Client Information
                      </div>

                      <div
                        style="
                          color:#ffffff;
                          font-size:22px;
                          font-weight:700;
                          margin-bottom:8px;
                        "
                      >
                        ${escapeHtml(inquiry.name)}
                      </div>

                      <div
                        style="
                          color:#a1a1aa;
                          font-size:14px;
                          line-height:1.8;
                        "
                      >
                        ${escapeHtml(inquiry.email)}
                        <br />
                        ${escapeHtml(inquiry.phone)}
                      </div>

                    </td>
                  </tr>

                  <!-- EVENT DETAILS -->
                  <tr>
                    <td style="padding:24px 32px;">

                      <div
  style="
    background:#15151b;
    border:1px solid #24242c;
    border-radius:14px;
    padding:18px;
    margin-bottom:12px;
  "
>
  <div
    style="
      color:#71717a;
      font-size:9px;
      font-weight:700;
      letter-spacing:1.6px;
      text-transform:uppercase;
      margin-bottom:7px;
    "
  >
    Event Type
  </div>

  <div
    style="
      color:#ffffff;
      font-size:15px;
      font-weight:700;
      line-height:1.5;
    "
  >
    ${escapeHtml(inquiry.eventType)}
  </div>
</div>

                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="width:100%;"
                      >

                        <tr>

                          <td
                            width="50%"
                            valign="top"
                            style="padding:0 6px 12px 0;"
                          >
                            <div
                              style="
                                background:#15151b;
                                border:1px solid #24242c;
                                border-radius:14px;
                                padding:18px;
                              "
                            >
                              <div
                                style="
                                  color:#71717a;
                                  font-size:9px;
                                  font-weight:700;
                                  letter-spacing:1.6px;
                                  text-transform:uppercase;
                                  margin-bottom:7px;
                                "
                              >
                                Event Date
                              </div>

                              <div
                                style="
                                  color:#ffffff;
                                  font-size:15px;
                                  font-weight:700;
                                  line-height:1.5;
                                "
                              >
                                ${escapeHtml(eventDateLabel)}
                              </div>
                            </div>
                          </td>

                          <td
                            width="50%"
                            valign="top"
                            style="padding:0 0 12px 6px;"
                          >
                            <div
                              style="
                                background:#15151b;
                                border:1px solid #24242c;
                                border-radius:14px;
                                padding:18px;
                              "
                            >
                              <div
                                style="
                                  color:#71717a;
                                  font-size:9px;
                                  font-weight:700;
                                  letter-spacing:1.6px;
                                  text-transform:uppercase;
                                  margin-bottom:7px;
                                "
                              >
                                Service Hours
                              </div>

                              <div
                                style="
                                  color:#ffffff;
                                  font-size:15px;
                                  font-weight:700;
                                  line-height:1.5;
                                "
                              >
                                ${escapeHtml(inquiry.hours || "Not specified")}
                              </div>
                            </div>
                          </td>

                        </tr>

                      </table>

                      <!-- LOCATION -->
                      <div
                        style="
                          background:#15151b;
                          border:1px solid #24242c;
                          border-radius:14px;
                          padding:18px;
                          margin-top:2px;
                        "
                      >
                        <div
                          style="
                            color:#71717a;
                            font-size:9px;
                            font-weight:700;
                            letter-spacing:1.6px;
                            text-transform:uppercase;
                            margin-bottom:7px;
                          "
                        >
                          Location / Venue
                        </div>

                        <div
                          style="
                            color:#ffffff;
                            font-size:15px;
                            line-height:1.6;
                          "
                        >
                          ${escapeHtml(inquiry.location)}
                        </div>
                      </div>

                    </td>
                  </tr>

                  <!-- EXTRAS -->
                  <tr>
                    <td style="padding:0 32px 26px 32px;">

                      <div
                        style="
                          color:#5270ff;
                          font-size:10px;
                          font-weight:700;
                          letter-spacing:2px;
                          text-transform:uppercase;
                          margin-bottom:12px;
                        "
                      >
                        Lighting / Extras
                      </div>

                      <div
                        style="
                          background:#15151b;
                          border:1px solid #24242c;
                          border-radius:14px;
                          padding:18px;
                          color:#d4d4d8;
                          font-size:14px;
                          line-height:1.7;
                        "
                      >${extrasHtml}</div>
                    </td>
                  </tr>

                  <!-- MESSAGE -->
                  <tr>
                    <td style="padding:0 32px 32px 32px;">

                      <div
                        style="
                          color:#5270ff;
                          font-size:10px;
                          font-weight:700;
                          letter-spacing:2px;
                          text-transform:uppercase;
                          margin-bottom:12px;
                        "
                      >
                        Event Description
                      </div>

                      <div
                        style="
                          background:#15151b;
                          border:1px solid #24242c;
                          border-radius:14px;
                          padding:20px;
                          color:#d4d4d8;
                          font-size:14px;
                          line-height:1.8;
                        "
                      >${messageHtml}</div>
                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td
                      style="
                        background:#09090d;
                        border-top:1px solid #24242c;
                        padding:22px 32px;
                        text-align:center;
                      "
                    >
                      <div
                        style="
                          color:#ffffff;
                          font-size:12px;
                          font-weight:700;
                          letter-spacing:1.5px;
                        "
                      >
                        DJF ENTERTAINMENT
                      </div>

                      <div
                        style="
                          color:#71717a;
                          font-size:11px;
                          margin-top:6px;
                          line-height:1.5;
                        "
                      >
                        Sioux Falls, South Dakota
                        <br />
                        Inquiry submitted through the DJF Entertainment website
                      </div>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
      </html>
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
    return NextResponse.json(
      { error: "Unable to send inquiry right now." },
      { status: 500 },
    );
  }
}
