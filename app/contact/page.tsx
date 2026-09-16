"use client";

import { FormEvent, useState } from "react";
import {
  CalendarDays,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";
import { useLanguage } from "../../components/language-provider";
import { PageHero } from "../../components/page-hero";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const { lang } = useLanguage();
  const es = lang === "es";

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send inquiry."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send inquiry."
      );
    }
  }

  return (
    <>
      <PageHero
        kicker={{
          en: "YOUR DATE COMES FIRST",
          es: "TU FECHA ES LO PRIMERO",
        }}
        title={{
          en: "Check Availability",
          es: "Consultar disponibilidad",
        }}
        text={{
          en: "Share your event details so DJF Entertainment can follow up with availability and a custom quote.",
          es: "Comparte los detalles de tu evento para que DJF Entertainment pueda responder con disponibilidad y una cotización personalizada.",
        }}
        image="/media/wedding-dj-smile.webp"
        imagePosition="center 44%"
      />

      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1250px] gap-8 lg:grid-cols-[1.15fr_.85fr]">

          {/* FORM */}
          <form
            className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 md:p-9"
            onSubmit={handleSubmit}
          >
            {/* Honeypot */}
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-5 md:grid-cols-2">

              {/* NAME */}
              <Field
                name="name"
                label={es ? "Nombre" : "Name"}
                placeholder={es ? "Tu nombre" : "Your name"}
                autoComplete="name"
                required
              />

              {/* PHONE */}
              <Field
                name="phone"
                label={es ? "Teléfono" : "Phone"}
                placeholder="(605) 000-0000"
                type="tel"
                autoComplete="tel"
                required
              />

              {/* CONTACT PREFERENCE */}
              <label className="grid gap-2">
                <span className="text-[10px] font-black tracking-[0.14em] text-white/50">
                  {es
                    ? "¿CÓMO PREFIERES QUE TE CONTACTEMOS?"
                    : "HOW WOULD YOU PREFER TO BE CONTACTED?"}
                </span>

                <select
                  name="contactPreference"
                  required
                  defaultValue=""
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#0529ED]"
                >
                  <option
                    value="Email"
                    className="bg-[#101014] text-white"
                  >
                    Email
                  </option>

                  <option
                    value="Call / SMS"
                    className="bg-[#101014] text-white"
                  >
                    {es ? "Llamada / SMS" : "Call / SMS"}
                  </option>
                </select>
              </label>

              {/* EMAIL */}
              <Field
                name="email"
                label="Email"
                placeholder="you@example.com"
                type="email"
                autoComplete="email"
                required
              />

              {/* EVENT DATE */}
              <Field
                name="eventDate"
                label={es ? "Fecha del evento" : "Event date"}
                type="date"
                required
              />

              {/* EVENT TYPE */}
              <label className="grid gap-2">
                <span className="text-[10px] font-black tracking-[0.14em] text-white/50">
                  {es ? "TIPO DE EVENTO" : "EVENT TYPE"}
                </span>

                <select
                  name="eventType"
                  required
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#0529ED]"
                >
                  <option
                    value="Wedding"
                    className="bg-[#101014] text-white"
                  >
                    {es ? "Boda" : "Wedding"}
                  </option>

                  <option
                    value="Corporate Event"
                    className="bg-[#101014] text-white"
                  >
                    {es
                      ? "Evento corporativo"
                      : "Corporate Event"}
                  </option>

                  <option
                    value="Private Event"
                    className="bg-[#101014] text-white"
                  >
                    {es
                      ? "Evento privado"
                      : "Private Event"}
                  </option>

                  <option
                    value="Bar"
                    className="bg-[#101014] text-white"
                  >
                    Bar
                  </option>
                </select>
              </label>

              {/* LOCATION */}
              <Field
                name="location"
                label={es ? "Ciudad / Lugar" : "City / Venue"}
                placeholder={
                  es ? "Ciudad o venue" : "City or venue"
                }
                required
              />

              {/* HOURS */}
              <Field
                name="hours"
                label={
                  es
                    ? "Horas de servicio estimadas"
                    : "Estimated service hours"
                }
                placeholder={
                  es ? "Ej. 5 horas" : "e.g. 5 hours"
                }
              />

              {/* EXTRAS */}
              <Field
                name="extras"
                label={es ? "Luces / extras" : "Lighting / extras"}
                placeholder={
                  es
                    ? "Cuéntanos qué deseas agregar"
                    : "Tell us what you would like to add"
                }
              />

              {/* EVENT DESCRIPTION */}
              <label className="grid gap-2 md:col-span-2">
                <span className="text-[10px] font-black tracking-[0.14em] text-white/50">
                  {es
                    ? "DESCRIPCIÓN DEL EVENTO"
                    : "EVENT DESCRIPTION"}
                </span>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={
                    es
                      ? "Cuéntanos un poco sobre tu evento..."
                      : "Tell us a little about your event..."
                  }
                  className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-[#0529ED]"
                />
              </label>
            </div>

            {/* SUBMIT */}
            <button
              disabled={status === "sending"}
              type="submit"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#0529ED] px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white transition hover:bg-[#2447ff] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending"
                ? es
                  ? "ENVIANDO..."
                  : "SENDING..."
                : es
                  ? "ENVIAR SOLICITUD"
                  : "SEND INQUIRY"}

              <Send size={15} />
            </button>

            {/* SUCCESS */}
            {status === "success" && (
              <p className="mt-4 text-sm font-semibold text-emerald-400">
                {es
                  ? "Solicitud enviada correctamente."
                  : "Your inquiry was sent successfully."}
              </p>
            )}

            {/* ERROR */}
            {status === "error" && (
              <p className="mt-4 text-sm font-semibold text-red-400">
                {es
                  ? "No se pudo enviar la solicitud. "
                  : "The inquiry could not be sent. "}
                {errorMessage}
              </p>
            )}
          </form>

          {/* CONTACT INFO */}
          <aside className="grid content-start gap-4">

            {/* INSTAGRAM */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7">
              <div className="grid gap-6 sm:grid-cols-[1fr_120px] sm:items-center lg:grid-cols-1 xl:grid-cols-[1fr_120px]">

                <div>
                  <div className="text-[10px] font-black tracking-[0.2em] text-[#0529ED]">
                    {es
                      ? "CONTACTO ACTUAL"
                      : "CURRENT CONTACT"}
                  </div>

                  <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">
                    {es
                      ? "¿Prefieres escribir directamente?"
                      : "Prefer to message directly?"}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {es
                      ? "También puedes contactar a DJF Entertainment por Instagram."
                      : "You can also contact DJF Entertainment through Instagram."}
                  </p>

                  <a
                    href="https://www.instagram.com/djf.music/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-black tracking-[0.12em] transition hover:border-[#0529ED]"
                  >
                    <Instagram size={16} />
                    @djf.music
                  </a>
                </div>

                <div className="rounded-2xl bg-white p-3">
                  <img
                    src="/media/social-qr.webp"
                    alt="DJ Foca social media QR code"
                    className="aspect-square w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* SMS */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7">
              <MessageCircle className="text-[#0529ED]" />

              <h3 className="mt-4 text-xl font-black uppercase">
                SMS / iMessage
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                {es
                  ? "Cuando se agregue el número comercial, este acceso podrá abrir un mensaje directamente desde el móvil."
                  : "Once the business phone number is added, this can open a text message directly from a mobile device."}
              </p>
            </div>

          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  placeholder = "",
  type = "text",
  autoComplete,
  required = false,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const isDate = type === "date";

  return (
    <>
      <label className="grid gap-2">
        <span className="text-[10px] font-black tracking-[0.14em] text-white/50">
          {label.toUpperCase()}
        </span>

        <div className={isDate ? "relative" : ""}>
          <input
            name={name}
            type={type}
            required={required}
            autoComplete={autoComplete}
            placeholder={placeholder}
            style={
              isDate
                ? {
                    colorScheme: "dark",
                  }
                : undefined
            }
            className={`
              w-full
              rounded-xl
              border border-white/10
              bg-white/[0.04]
              px-4 py-3.5
              text-sm text-white
              outline-none
              transition
              placeholder:text-white/25
              focus:border-[#0529ED]

              ${
                isDate
                  ? "djf-date-input pr-12"
                  : ""
              }
            `}
          />

          {isDate && (
            <CalendarDays
              size={18}
              strokeWidth={1.8}
              className="
                pointer-events-none
                absolute
                right-4
                top-1/2
                z-10
                -translate-y-1/2
                text-white/70
              "
            />
          )}
        </div>
      </label>

      {isDate && (
        <style jsx global>{`
          .djf-date-input {
            -webkit-appearance: none;
            appearance: none;
          }

          .djf-date-input::-webkit-calendar-picker-indicator {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            opacity: 0;
            cursor: pointer;
            background: transparent;
            color: transparent;
          }

          .djf-date-input::-webkit-inner-spin-button {
            display: none;
          }

          .djf-date-input::-webkit-clear-button {
            display: none;
          }
        `}</style>
      )}
    </>
  );
}