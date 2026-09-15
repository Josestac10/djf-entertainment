"use client";

import Link from "next/link";
import { ArrowRight, Globe2, MapPin, Music2 } from "lucide-react";
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
    href: "/events/private-parties",
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

export default function Home() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      <section className="relative flex min-h-[82vh] items-end overflow-hidden">
        <img src="/media/wedding-party.webp" alt="DJ Foca event dance floor" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.92)_0%,rgba(0,0,0,.6)_48%,rgba(0,0,0,.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#090909_0%,transparent_42%)]" />
        <div className="hero-grain absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-16 pt-24 md:px-10 lg:px-14 lg:pb-24">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.24em] text-[#0529ED] sm:text-xs">
              <span className="h-px w-9 bg-[#0529ED]" /> {es ? "SIOUX FALLS, SOUTH DAKOTA · DJ BILINGÜE" : "SIOUX FALLS, SOUTH DAKOTA · BILINGUAL DJ"}
            </div>
            <h1 className="text-[clamp(3.7rem,10vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              <span className="block">{es ? "TU EVENTO." : "YOUR EVENT."}</span>
              <span className="block text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,.72)]">{es ? "TU MÚSICA." : "YOUR MUSIC."}</span>
              <span className="block">{es ? "TU NOCHE." : "YOUR NIGHT."}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
              {es
                ? "Una experiencia de DJ bilingüe con energía, estilo y música adaptada a cada público."
                : "High-energy bilingual DJ entertainment built around your crowd, your style and the moments people remember."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#0529ED] px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white">
                {es ? "CONSULTAR DISPONIBILIDAD" : "CHECK AVAILABILITY"} <ArrowRight size={16} />
              </Link>
              <Link href="/events" className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/20 px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white backdrop-blur">
                {es ? "VER EVENTOS" : "EXPLORE EVENTS"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-6 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1500px] gap-5 text-xs font-semibold tracking-[0.08em] text-white/55 md:grid-cols-3">
          <div className="flex items-center gap-3"><MapPin size={17} className="text-[#0529ED]" /> Sioux Falls, South Dakota</div>
          <div className="flex items-center gap-3"><Music2 size={17} className="text-[#0529ED]" /> Reggaeton · Hip-Hop · Country · Open Format</div>
          <div className="flex items-center gap-3"><Globe2 size={17} className="text-[#0529ED]" /> English / Español</div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">{es ? "EVENTOS" : "EVENTS"}</div>
              <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">{es ? "Una experiencia distinta para cada celebración." : "A different experience for every celebration."}</h2>
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] text-white/60 hover:text-white">{es ? "VER TODOS" : "VIEW ALL"} <ArrowRight size={15} /></Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {events.map((event) => (
              <Link key={event.href} href={event.href} className="group relative min-h-[420px] overflow-hidden rounded-[1.7rem] border border-white/10">
                <img src={event.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-black uppercase tracking-[-0.035em]">{es ? event.es : event.en}</h3>
                  <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.15em] text-[#0529ED]">{es ? "DESCUBRIR" : "EXPLORE"} <ArrowRight size={14} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.035] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">ENGLISH / ESPAÑOL</div>
            <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">{es ? "Un DJ. Dos idiomas. Para todos." : "One DJ. Two languages. Every crowd."}</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">{es ? "La música puede moverse naturalmente entre culturas, generaciones y estilos para que cada invitado se sienta parte de la celebración." : "Music can move naturally between cultures, generations and styles so every guest feels part of the celebration."}</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] text-[#0529ED]">{es ? "CONOCER A DJ FOCA" : "MEET DJ FOCA"} <ArrowRight size={15} /></Link>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <img src="/media/corporate-dj-portrait.webp" alt="DJ Foca performing" className="aspect-[4/5] h-full w-full object-cover object-[center_42%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-[10px] font-black tracking-[0.15em] backdrop-blur">DJ FOCA · SIOUX FALLS, SOUTH DAKOTA</div>
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}
