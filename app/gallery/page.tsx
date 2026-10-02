"use client";
import Image from "next/image";
import { Instagram } from "lucide-react";

import { useLanguage } from "../../components/language-provider";
import { PageHero } from "../../components/page-hero";
import { SectionCTA } from "../../components/section-cta";

const images = [
  {
    src: "/media/wedding-dancefloor.webp",
    en: "Wedding dance floor",
    es: "Pista de baile en una boda",
    altEn: "Wedding dance floor at a DJF Entertainment event",
    altEs: "Pista de baile en una boda con DJF Entertainment",
  },
  {
    src: "/media/wedding-dj-smile.webp",
    en: "Wedding DJ",
    es: "DJ en una boda",
    altEn: "DJ Foca performing at a wedding",
    altEs: "DJ Foca durante una boda",
  },
  {
    src: "/media/bar-action.webp",
    en: "Bar event",
    es: "Evento en bar",
    altEn: "DJ Foca performing at a bar event",
    altEs: "DJ Foca durante un evento en un bar",
  },
  {
    src: "/media/corporate-dj-portrait.webp",
    en: "DJ Foca",
    es: "DJ Foca",
    altEn: "DJ Foca, bilingual DJ and MC in Sioux Falls",
    altEs: "DJ Foca, DJ y MC bilingüe en Sioux Falls",
  },
  {
    src: "/media/dj-controller-detail.webp",
    en: "Behind the decks",
    es: "Detrás de la cabina",
    altEn: "Close-up of DJ Foca performing with professional DJ equipment",
    altEs: "Primer plano de DJ Foca utilizando equipo profesional de DJ",
  },
  {
    src: "/media/dj-formal-wide.webp",
    en: "Professional DJ setup",
    es: "Setup profesional de DJ",
    altEn: "DJF Entertainment professional DJ and lighting setup",
    altEs: "Setup profesional de DJ e iluminación de DJF Entertainment",
  },
  {
    src: "/media/wedding-couple-dj-foca.webp",
    en: "Wedding celebration",
    es: "Celebración de boda",
    altEn: "Wedding couple celebrating while DJ Foca performs",
    altEs: "Pareja celebrando su boda mientras DJ Foca toca música",
  },
  {
    src: "/media/wedding-party.webp",
    en: "Party energy",
    es: "Energía en la pista",
    altEn: "Guests dancing at a DJF Entertainment event",
    altEs: "Invitados bailando en un evento de DJF Entertainment",
  },
  {
    src: "/media/outdoor-crowd.webp",
    en: "Outdoor event",
    es: "Evento al aire libre",
    altEn: "Crowd at an outdoor DJ event",
    altEs: "Público en un evento de DJ al aire libre",
  },
  {
    src: "/media/dj-formal-front.webp",
    en: "DJ Foca",
    es: "DJ Foca",
    altEn: "DJ Foca with professional DJ equipment",
    altEs: "DJ Foca con equipo profesional de DJ",
  },
  {
    src: "/media/wedding-dance-dj-foca.webp",
    en: "Wedding dance",
    es: "Baile de boda",
    altEn: "Wedding couple dancing with DJ Foca performing in the background",
    altEs: "Pareja bailando en su boda con DJ Foca actuando al fondo",
  },
  {
    src: "/media/bar-closeup.webp",
    en: "Behind the decks",
    es: "Detrás de la cabina",
    altEn: "DJ Foca performing behind the DJ booth",
    altEs: "DJ Foca actuando detrás de la cabina de DJ",
  },
  {
    src: "/media/wedding-celebration.webp",
    en: "Wedding moment",
    es: "Momento de boda",
    altEn: "Wedding guests celebrating with DJF Entertainment",
    altEs: "Invitados celebrando una boda con DJF Entertainment",
  },
  {
    src: "/media/dj-foca-bilingual-mc.webp",
    en: "DJ & MC",
    es: "DJ y MC",
    altEn: "DJ Foca using a microphone while performing as a DJ and MC",
    altEs: "DJ Foca utilizando un micrófono durante su trabajo como DJ y MC",
  },
  {
    src: "/media/wedding-bride-dance.webp",
    en: "Wedding celebration",
    es: "Celebración de boda",
    altEn: "Wedding celebration with DJF Entertainment",
    altEs: "Celebración de boda con DJF Entertainment",
  },
  {
    src: "/media/outdoor-setup.webp",
    en: "Outdoor setup",
    es: "Setup al aire libre",
    altEn: "DJ setup for an outdoor event",
    altEs: "Setup de DJ para un evento al aire libre",
  },
];

export default function GalleryPage() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      <PageHero
        kicker={{
          en: "REAL EVENTS · REAL ENERGY",
          es: "EVENTOS REALES · ENERGÍA REAL",
        }}
        title={{
          en: "DJ Foca Event Gallery",
          es: "Galería de Eventos de DJ Foca",
        }}
        text={{
          en: "See moments from DJF Entertainment weddings, private events, corporate events and bar performances in and around Sioux Falls, South Dakota.",
          es: "Descubre momentos de bodas, eventos privados, eventos corporativos y presentaciones en bares de DJF Entertainment en Sioux Falls, South Dakota y sus alrededores.",
        }}
        image="/media/wedding-party.webp"
        imagePosition="center 52%"
      />

      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
                {es ? "MOMENTOS DJF" : "DJF MOMENTS"}
              </div>

              <h2 className="mt-2 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
                {es
                  ? "La energía se ve antes de escucharla."
                  : "You can see the energy before you hear it."}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
                {es
                  ? "Cada evento tiene un ambiente diferente. Esta galería reúne algunos momentos, setups y celebraciones de DJ Foca y DJF Entertainment."
                  : "Every event has a different atmosphere. This gallery brings together moments, setups and celebrations from DJ Foca and DJF Entertainment."}
              </p>
            </div>

            <a
              href="https://www.instagram.com/djf.music/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-black tracking-[0.12em] transition hover:border-[#0529ED]"
            >
              <Instagram size={16} />
              @djf.music
            </a>
          </div>

          <div className="grid auto-rows-[240px] gap-4 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-[1.7rem] border border-white/10 ${
                  index === 0 || index === 6 ? "md:row-span-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={es ? image.altEs : image.altEn}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition group-hover:opacity-90" />

                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0529ED]">
                    DJ FOCA
                  </div>

                  <div className="mt-1 text-sm font-bold uppercase tracking-[0.08em]">
                    {es ? image.es : image.en}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}