"use client";

import Link from "next/link";
import { ArrowRight, Check, Music2 } from "lucide-react";
import { useLanguage } from "./language-provider";
import { PageHero } from "./page-hero";

type Localized = { en: string; es: string };

type EventDetailProps = {
  kicker: Localized;
  title: Localized;
  text: Localized;
  image: string;
  imagePosition?: string;
  introTitle: Localized;
  introText: Localized;
  bullets: Localized[];
};

export function EventDetail(props: EventDetailProps) {
  const { lang } = useLanguage();
  return (
    <>
      <PageHero kicker={props.kicker} title={props.title} text={props.text} image={props.image} imagePosition={props.imagePosition} />
      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <div>
            <div className="mb-4 flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-[#0529ED]"><Music2 size={15} /> DJ FOCA</div>
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">{props.introTitle[lang]}</h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 md:text-lg">{props.introText[lang]}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-9">
            <div className="text-xs font-black tracking-[0.18em] text-white/40">{lang === "en" ? "WHAT TO EXPECT" : "QUÉ PUEDES ESPERAR"}</div>
            <div className="mt-6 grid gap-4">
              {props.bullets.map((bullet, index) => (
                <div key={index} className="flex gap-3 text-sm leading-6 text-white/70"><Check className="mt-1 shrink-0 text-[#0529ED]" size={17} /> {bullet[lang]}</div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0529ED] px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white">
              {lang === "en" ? "CHECK YOUR DATE" : "CONSULTAR TU FECHA"} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
