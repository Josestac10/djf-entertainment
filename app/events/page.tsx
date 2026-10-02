"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Globe2,
  Music2,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../components/language-provider";
import { PageHero } from "../../components/page-hero";
import { SectionCTA } from "../../components/section-cta";

const cards = [
  {
    href: "/events/weddings",
    en: "Weddings",
    es: "Bodas",
    textEn:
      "Wedding DJ and MC services built around the couple, the guests and the flow of the celebration.",
    textEs:
      "Servicios de DJ y MC para bodas adaptados a la pareja, los invitados y el desarrollo de la celebración.",
    image: "/media/wedding-dj-smile.webp",
    altEn: "DJ Foca providing wedding DJ services",
    altEs: "DJ Foca ofreciendo servicios de DJ para bodas",
  },
  {
    href: "/events/corporate",
    en: "Corporate Events",
    es: "Eventos corporativos",
    textEn:
      "Professional DJ services with music adapted to the format, audience and atmosphere of the event.",
    textEs:
      "Servicios profesionales de DJ con música adaptada al formato, público y ambiente del evento.",
    image: "/media/corporate-dj-setup.webp",
    //image: "/media/photographsbyanna-111.jpg",
    altEn: "DJF Entertainment corporate event DJ setup",
    altEs: "Setup de DJF Entertainment para eventos corporativos",
  },
  {
    href: "/events/private-events",
    en: "Private Events",
    es: "Eventos privados",
    textEn:
      "Music and DJ services for birthdays, celebrations and private events shaped around your crowd.",
    textEs:
      "Música y servicios de DJ para cumpleaños, celebraciones y eventos privados adaptados a tu público.",
    image: "/media/private-social.webp",
    altEn: "Private event with DJF Entertainment",
    altEs: "Evento privado con DJF Entertainment",
  },
  {
    href: "/events/bars",
    en: "Bars",
    es: "Bares",
    textEn:
      "DJ services for bars and nightlife events, with music and production adapted to the venue and the night.",
    textEs:
      "Servicios de DJ para bares y eventos nocturnos, con música y producción adaptadas al local y al evento.",
    image: "/media/bar-action.webp",
    altEn: "DJ Foca performing at a bar event",
    altEs: "DJ Foca actuando en un evento de bar",
  },
];

export default function EventsPage() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      <PageHero
        kicker={{
          en: "DJ SERVICES",
          es: "SERVICIOS DE DJ",
        }}
        title={{
          en: "DJ Services in Sioux Falls",
          es: "Servicios de DJ en Sioux Falls",
        }}
        text={{
          en: "Bilingual DJ and MC services for weddings, corporate events, private celebrations and bars in Sioux Falls, South Dakota.",
          es: "Servicios bilingües de DJ y MC para bodas, eventos corporativos, celebraciones privadas y bares en Sioux Falls, South Dakota.",
        }}
        image="/media/wedding-party.webp"
        imagePosition="center 52%"
      />

      {/* INTRO */}
      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1350px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
              {es ? "TU EVENTO, TU AMBIENTE" : "YOUR EVENT, YOUR ATMOSPHERE"}
            </div>

            <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
              {es
                ? "Cada celebración necesita algo diferente."
                : "Every celebration needs something different."}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-white/60">
              {es
                ? "DJF Entertainment adapta la música, el ritmo y la presentación al tipo de evento y a las personas presentes. Desde bodas hasta eventos corporativos y noches en bares, el objetivo es crear una experiencia que se sienta adecuada para cada ocasión."
                : "DJF Entertainment adapts the music, pacing and presentation to the type of event and the people in the room. From weddings to corporate events and bar nights, the goal is to create an experience that fits the occasion."}
            </p>

            <div className="mt-6 flex flex-wrap gap-5 text-xs font-bold text-white/50">
              <div className="flex items-center gap-2">
                <Globe2 size={16} className="text-[#0529ED]" />
                English / Español
              </div>

              <div className="flex items-center gap-2">
                <Music2 size={16} className="text-[#0529ED]" />
                DJ & MC
              </div>

              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#0529ED]" />
                Sioux Falls, South Dakota
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="border-t border-white/10 px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
              {es ? "TIPOS DE EVENTOS" : "EVENT TYPES"}
            </div>

            <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
              {es ? "Encuentra tu evento." : "Find your event."}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={es ? card.altEs : card.altEn}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                </div>

                <div className="p-7 md:p-9">
                  <h3 className="text-3xl font-black uppercase tracking-[-0.04em] md:text-4xl">
                    {es ? card.es : card.en}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 md:text-base">
                    {es ? card.textEs : card.textEn}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.15em] text-[#0529ED]">
                    {es ? "VER SERVICIO" : "VIEW SERVICE"}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}