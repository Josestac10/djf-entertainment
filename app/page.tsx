"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  HeartHandshake,
  MapPin,
  Music2,
} from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "../components/language-provider";
import { SectionCTA } from "../components/section-cta";

const events = [
  {
    href: "/events/weddings",
    en: "Weddings",
    es: "Bodas",
    image: "/media/wedding-dj-smile.webp",
  },
  {
    href: "/events/corporate",
    en: "Corporate Events",
    es: "Eventos corporativos",
    image: "/media/corporate-dj-setup.webp",
  },

  {
    href: "/events/private-events",
    en: "Private Events",
    es: "Eventos privados",
    image: "/media/private-social.webp",
  },
  {
    href: "/events/bars",
    en: "Bars",
    es: "Bares",
    image: "/media/bar-action.webp",
  },
];

const reasons = [
  {
    icon: MapPin,
    en: "Locally Based",
    es: "Base local",
    textEn:
      "DJF Entertainment is locally based in Sioux Falls, South Dakota, serving celebrations with a personal approach.",
    textEs:
      "DJF Entertainment tiene base local en Sioux Falls, South Dakota, ofreciendo un servicio cercano y personalizado.",
  },
  {
    icon: Globe2,
    en: "Bilingual Service",
    es: "Servicio bilingüe",
    textEn:
      "DJ and MC services are available in both English and Spanish, helping every guest feel part of the celebration.",
    textEs:
      "Los servicios de DJ y MC están disponibles en inglés y español para que todos los invitados se sientan parte de la celebración.",
  },
  {
    icon: Music2,
    en: "Music for Every Crowd",
    es: "Música para cada público",
    textEn:
      "From cumbia and reggaeton to hip-hop, country and open-format sets, the music is shaped around your crowd.",
    textEs:
      "Desde cumbia y reggaetón hasta hip-hop, country y sets open-format, la música se adapta a tu público.",
  },
  {
    icon: HeartHandshake,
    en: "Your Event Comes First",
    es: "Tu evento es lo primero",
    textEn:
      "Every event is approached with attention to your vision, your style and the experience you want your guests to remember.",
    textEs:
      "Cada evento se trabaja prestando atención a tu visión, tu estilo y la experiencia que quieres que tus invitados recuerden.",
  },
];

export default function Home() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[82vh] items-end overflow-hidden">
        <Image
          src="/media/wedding-party.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.92)_0%,rgba(0,0,0,.6)_48%,rgba(0,0,0,.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#090909_0%,transparent_42%)]" />
        <div className="hero-grain absolute inset-0 opacity-20" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-16 pt-24 md:px-10 lg:px-14 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0529ED] sm:text-xs">
              <span className="h-px w-9 bg-[#0529ED]" />

              {es
                ? "DJ Y MC BILINGÜE EN SIOUX FALLS, SOUTH DAKOTA"
                : "BILINGUAL DJ & MC IN SIOUX FALLS, SOUTH DAKOTA"}
            </h1>

            <h2 className="text-[clamp(3.7rem,10vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              <span className="block">
                {es ? "TU EVENTO." : "YOUR EVENT."}
              </span>

              <span className="block text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,.72)]">
                {es ? "TU MÚSICA." : "YOUR MUSIC."}
              </span>

              <span className="block">
                {es ? "TU NOCHE." : "YOUR NIGHT."}
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
              {es
                ? "DJF Entertainment ofrece servicios profesionales de DJ, MC, sonido e iluminación para bodas, eventos corporativos, eventos privados y bares en Sioux Falls."
                : "DJF Entertainment provides professional DJ, MC, sound and lighting services for weddings, corporate events, private events and bars in Sioux Falls."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#0529ED] px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white"
              >
                {es ? "CONSULTAR DISPONIBILIDAD" : "CHECK AVAILABILITY"}
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/20 px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white backdrop-blur"
              >
                {es ? "VER EVENTOS" : "EXPLORE EVENTS"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="border-b border-white/10 px-5 py-6 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1500px] gap-5 text-xs font-semibold tracking-[0.08em] text-white/55 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <MapPin size={17} className="text-[#0529ED]" />
            Sioux Falls, South Dakota
          </div>

          <div className="flex items-center gap-3">
            <Music2 size={17} className="text-[#0529ED]" />
            Reggaeton · Hip-Hop · Country · Open Format
          </div>

          <div className="flex items-center gap-3">
            <Globe2 size={17} className="text-[#0529ED]" />
            English / Español
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
                {es ? "SERVICIOS DE DJ" : "DJ SERVICES"}
              </div>

              <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
                {es
                  ? "Una experiencia distinta para cada celebración."
                  : "A different experience for every celebration."}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
                {es
                  ? "Desde bodas y eventos corporativos hasta celebraciones privadas y bares, DJF Entertainment adapta la música, la energía y la producción a cada tipo de evento."
                  : "From weddings and corporate events to private celebrations and bars, DJF Entertainment adapts the music, energy and production to each type of event."}
              </p>
            </div>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] text-white/60 hover:text-white"
            >
              {es ? "VER TODOS" : "VIEW ALL"}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {events.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group relative min-h-[420px] overflow-hidden rounded-[1.7rem] border border-white/10"
              >
                <Image
                  src={event.image}
                  alt={
                    es
                      ? `${event.es} con DJF Entertainment`
                      : `${event.en} with DJF Entertainment`
                  }
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-black uppercase tracking-[-0.035em]">
                    {es ? event.es : event.en}
                  </h3>

                  <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.15em] text-[#0529ED]">
                    {es ? "DESCUBRIR" : "EXPLORE"}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DJF */}
      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
                {es ? "POR QUÉ DJF" : "WHY DJF ENTERTAINMENT"}
              </div>

              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
                {es
                  ? "Más que música. Una experiencia."
                  : "More than music. An experience."}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/60 lg:justify-self-end">
              {es
                ? "DJF Entertainment es una compañía local de Sioux Falls enfocada en crear eventos memorables a través de música, atención al detalle y un servicio adaptado a cada cliente."
                : "DJF Entertainment is a locally based Sioux Falls DJ company focused on creating memorable events through music, attention to detail and service tailored to each client."}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.en}
                  className="rounded-[1.7rem] border border-white/10 bg-black/20 p-6 md:p-7"
                >
                  <Icon size={21} className="text-[#0529ED]" />

                  <h3 className="mt-5 text-xl font-black uppercase tracking-[-0.03em]">
                    {es ? reason.es : reason.en}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {es ? reason.textEs : reason.textEn}
                  </p>
                </article>
              );
            })}
          </div>

          <Link
            href="/why-djf"
            className="mt-8 inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] text-[#0529ED]"
          >
            {es ? "DESCUBRE POR QUÉ DJF" : "DISCOVER WHY DJF"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* BILINGUAL */}
      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
              ENGLISH / ESPAÑOL
            </div>

            <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
              {es
                ? "Un DJ. Dos idiomas. Para todos."
                : "One DJ. Two languages. Every crowd."}
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              {es
                ? "DJ Foca puede actuar como DJ y MC tanto en inglés como en español, ayudando a que la música, los anuncios y el desarrollo del evento conecten naturalmente con todos tus invitados."
                : "DJ Foca can perform as both DJ and MC in English and Spanish, helping the music, announcements and event flow connect naturally with all of your guests."}
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] text-[#0529ED]"
            >
              {es ? "CONOCER A DJ FOCA" : "MEET DJ FOCA"}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/media/corporate-dj-portrait.webp"
              //src="/media/photographsbyanna-118.jpg"
              alt="DJ Foca, bilingual DJ and MC in Sioux Falls, South Dakota"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover object-[center_42%]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}