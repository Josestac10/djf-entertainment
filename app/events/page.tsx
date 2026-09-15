"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../components/language-provider";
import { PageHero } from "../../components/page-hero";
import { SectionCTA } from "../../components/section-cta";

const cards = [
  {
    href: "/events/weddings",
    en: "Weddings",
    es: "Bodas",
    textEn: "DJ service for weddings, shaped around the people, music and flow of the event.",
    textEs: "Servicio de DJ para bodas, adaptado a las personas, la música y el desarrollo del evento.",
    image: "/media/wedding-dj-smile.webp",
  },
  {
    href: "/events/corporate",
    en: "Corporate Events",
    es: "Eventos corporativos",
    textEn: "DJ service for corporate events with music matched to the format and atmosphere of the event.",
    textEs: "Servicio de DJ para eventos corporativos con música adaptada al formato y ambiente del evento.",
    image: "/media/corporate-dj-setup.webp",
  },
  {
    href: "/events/private-parties",
    en: "Private Events",
    es: "Eventos privados",
    textEn: "DJ service for private events and celebrations, built around the crowd and the occasion.",
    textEs: "Servicio de DJ para eventos privados y celebraciones, adaptado al público y a la ocasión.",
    image: "/media/private-social.webp",
  },
  {
    href: "/events/bars",
    en: "Bars",
    es: "Bares",
    textEn: "DJ service for bars, with the quote adapted to the event details and what the venue needs.",
    textEs: "Servicio de DJ para bares, con una cotización adaptada a los detalles del evento y a lo que necesite el local.",
    image: "/media/bar-action.webp",
  },
];

export default function EventsPage() {
  const { lang } = useLanguage();
  const es = lang === "es";
  return (
    <>
      <PageHero
        kicker={{ en: "EVENTS", es: "EVENTOS" }}
        title={{ en: "What We Do", es: "Lo que hacemos" }}
        text={{ en: "Weddings, corporate events, private events and bars.", es: "Bodas, eventos corporativos, eventos privados y bares." }}
        image="/media/wedding-party.webp"
        imagePosition="center 52%"
      />
      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={card.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              </div>
              <div className="p-7 md:p-9">
                <h2 className="text-3xl font-black uppercase tracking-[-0.04em] md:text-4xl">{es ? card.es : card.en}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 md:text-base">{es ? card.textEs : card.textEn}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.15em] text-[#0529ED]">{es ? "VER DETALLES" : "VIEW DETAILS"} <ArrowRight size={14} /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SectionCTA />
    </>
  );
}
