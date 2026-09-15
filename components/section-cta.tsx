"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./language-provider";

export function SectionCTA() {
  const { lang } = useLanguage();
  return (
    <section className="border-y border-white/10 bg-[#0529ED] px-5 py-12 text-white md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-[10px] font-black tracking-[0.2em] text-white/65">{lang === "en" ? "READY WHEN YOU ARE" : "CUANDO TÚ QUIERAS"}</div>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] md:text-5xl">{lang === "en" ? "Is your date available?" : "¿Está disponible tu fecha?"}</h2>
        </div>
        <Link href="/contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white">
          {lang === "en" ? "CHECK AVAILABILITY" : "VER DISPONIBILIDAD"} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
