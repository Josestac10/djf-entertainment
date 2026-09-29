"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  HeartHandshake,
  MapPin,
  Music2,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../components/language-provider";
import { PageHero } from "../../components/page-hero";
import { SectionCTA } from "../../components/section-cta";

const reasons = [
  {
    icon: MapPin,
    titleEn: "Locally Based in Sioux Falls",
    titleEs: "Con base local en Sioux Falls",
    textEn:
      "DJF Entertainment is a locally based DJ company in Sioux Falls, South Dakota, bringing a personal approach to every celebration.",
    textEs:
      "DJF Entertainment es una compañía de DJ con base local en Sioux Falls, South Dakota, que ofrece un trato cercano y personalizado en cada celebración.",
  },
  {
    icon: Globe2,
    titleEn: "English & Spanish",
    titleEs: "Inglés y español",
    textEn:
      "DJ and MC services are available in both English and Spanish, helping multicultural events feel natural and connected.",
    textEs:
      "Los servicios de DJ y MC están disponibles en inglés y español, ayudando a que los eventos multiculturales se sientan naturales y conectados.",
  },
  {
    icon: Music2,
    titleEn: "Open-Format Music",
    titleEs: "Música open-format",
    textEn:
      "From cumbia and reggaeton to hip-hop, country and more, DJ Foca adapts the music to the people in the room.",
    textEs:
      "Desde cumbia y reggaetón hasta hip-hop, country y más, DJ Foca adapta la música a las personas presentes en el evento.",
  },
  {
    icon: HeartHandshake,
    titleEn: "A Personal Approach",
    titleEs: "Un servicio personalizado",
    textEn:
      "Every event is treated with attention to your vision, your style and the experience you want your guests to remember.",
    textEs:
      "Cada evento se trabaja prestando atención a tu visión, tu estilo y la experiencia que quieres que tus invitados recuerden.",
  },
];

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

export default function WhyDJFPage() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      <PageHero
        kicker={{
          en: "WHY DJF ENTERTAINMENT",
          es: "POR QUÉ DJF ENTERTAINMENT",
        }}
        title={{
          en: "More Than Music",
          es: "Más que música",
        }}
        text={{
          en: "A bilingual DJ experience built around your event, your crowd and the moments you want people to remember.",
          es: "Una experiencia de DJ bilingüe creada alrededor de tu evento, tu público y los momentos que quieres que todos recuerden.",
        }}
        image="/media/wedding-party.webp"
        imagePosition="center 48%"
      />

      {/* INTRO */}
      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1350px] gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
              {es ? "NUESTRA FORMA DE TRABAJAR" : "OUR APPROACH"}
            </div>

            <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
              {es
                ? "Tu evento merece más que una playlist."
                : "Your event deserves more than a playlist."}
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/60">
            <p>
              {es
                ? "En DJF Entertainment creemos que cada evento merece más que buena música: merece una experiencia."
                : "At DJF Entertainment, we believe every event deserves more than just great music — it deserves an experience."}
            </p>

            <p>
              {es
                ? "Somos una compañía de DJ con base local en Sioux Falls que ofrece servicios profesionales de DJ e iluminación para bodas, eventos privados, eventos corporativos, bares y otras celebraciones."
                : "We are a locally based DJ company in Sioux Falls providing professional DJ and lighting services for weddings, private events, corporate events, bars and other celebrations."}
            </p>

            <p>
              {es
                ? "Nuestro objetivo no es simplemente llegar y poner música. Nos tomamos el tiempo de entender tu visión, tu estilo y lo que hará especial tu celebración."
                : "Our goal is not simply to show up and play music. We take the time to understand your vision, your style and what will make your celebration feel special."}
            </p>

            <p className="font-black text-white">
              {es
                ? "Tu evento importa. Tu visión importa. Tu experiencia es nuestra prioridad."
                : "Your event matters. Your vision matters. Your experience is our priority."}
            </p>
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-3xl">
            <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
              {es ? "POR QUÉ ELEGIR DJF" : "WHY CHOOSE DJF"}
            </div>

            <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
              {es
                ? "Pensado para tu evento."
                : "Built around your event."}
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.titleEn}
                  className="rounded-[1.8rem] border border-white/10 bg-black/20 p-7 md:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0529ED]/10">
                    <Icon size={20} className="text-[#0529ED]" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black uppercase tracking-[-0.035em]">
                    {es ? reason.titleEs : reason.titleEn}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50 md:text-base">
                    {es ? reason.textEs : reason.textEn}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1350px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
                {es ? "EVENTOS" : "EVENTS"}
              </div>

              <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
                {es
                  ? "Cada evento tiene su propio ritmo."
                  : "Every event has its own rhythm."}
              </h2>
            </div>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] text-white/60 transition hover:text-white"
            >
              {es ? "VER TODOS LOS EVENTOS" : "VIEW ALL EVENTS"}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {events.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group relative min-h-[370px] overflow-hidden rounded-[1.7rem] border border-white/10"
              >
                <Image
                  src={event.image}
                  alt={
                    es
                      ? `${event.es} con DJF Entertainment`
                      : `${event.en} with DJF Entertainment`
                  }
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

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

      {/* FINAL MESSAGE */}
      <section className="border-t border-white/10 px-5 py-20 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <Sparkles size={24} className="mx-auto text-[#0529ED]" />

          <p className="mt-6 text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
            DJF ENTERTAINMENT
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
            {es
              ? "Tu evento. Tu visión. Nuestra pasión."
              : "Your Event. Your Vision. Our Passion."}
          </h2>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}