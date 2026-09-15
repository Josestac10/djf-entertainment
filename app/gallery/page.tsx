"use client";

import { Instagram } from "lucide-react";
import { useLanguage } from "../../components/language-provider";
import { PageHero } from "../../components/page-hero";
import { SectionCTA } from "../../components/section-cta";

const images = [
  { src: "/media/wedding-dancefloor.webp", en: "Wedding dance floor", es: "Pista de boda" },
  { src: "/media/wedding-dj-smile.webp", en: "Wedding set", es: "Set de boda" },
  { src: "/media/bar-action.webp", en: "Bar event", es: "Evento en bar" },
  { src: "/media/corporate-dj-portrait.webp", en: "Private event", es: "Evento privado" },
  { src: "/media/wedding-party.webp", en: "Party energy", es: "Energía en la pista" },
  { src: "/media/dj-formal-wide.webp", en: "Event setup", es: "Montaje de evento" },
  { src: "/media/wedding-bride-dance.webp", en: "Wedding celebration", es: "Celebración de boda" },
  { src: "/media/outdoor-crowd.webp", en: "Outdoor event", es: "Evento al aire libre" },
  { src: "/media/bar-closeup.webp", en: "Behind the decks", es: "Detrás de la cabina" },
  { src: "/media/dj-formal-front.webp", en: "DJ Foca", es: "DJ Foca" },
  { src: "/media/wedding-celebration.webp", en: "Wedding moment", es: "Momento de boda" },
  { src: "/media/outdoor-setup.webp", en: "Ready for the crowd", es: "Listo para el público" },
];

export default function GalleryPage() {
  const { lang } = useLanguage();
  const es = lang === "es";
  return (
    <>
      <PageHero
        kicker={{ en: "SEE THE ENERGY", es: "MIRA LA ENERGÍA" }}
        title={{ en: "Gallery", es: "Galería" }}
        text={{ en: "Real moments from DJ Foca events, from weddings and corporate events to private events and bars.", es: "Momentos reales de eventos de DJ Foca, desde bodas y eventos corporativos hasta eventos privados y bares." }}
        image="/media/wedding-party.webp"
        imagePosition="center 52%"
      />
      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">{es ? "EVENTOS REALES" : "REAL EVENTS"}</div>
              <h2 className="mt-2 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">{es ? "La energía se ve antes de escucharla." : "You can see the energy before you hear it."}</h2>
            </div>
            <a href="https://www.instagram.com/djf.music/" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-black tracking-[0.12em] hover:border-white/40"><Instagram size={16} /> @djf.music</a>
          </div>
          <div className="grid auto-rows-[240px] gap-4 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div key={image.src} className={`group relative overflow-hidden rounded-[1.7rem] border border-white/10 ${index === 0 || index === 6 ? "md:row-span-2" : ""}`}>
                <img src={image.src} alt={es ? image.es : image.en} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0529ED]">DJ FOCA</div>
                  <div className="mt-1 text-sm font-bold uppercase tracking-[0.08em]">{es ? image.es : image.en}</div>
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
