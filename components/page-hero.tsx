"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";

type Localized = { en: string; es: string };

export function PageHero({
  kicker,
  title,
  text,
  image,
  imagePosition = "center",
}: {
  kicker: Localized;
  title: Localized;
  text: Localized;
  image: string;
  imagePosition?: string;
}) {
  const { lang } = useLanguage();
  return (
    <section className="relative min-h-[58vh] overflow-hidden border-b border-white/10">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.92),rgba(0,0,0,.55),rgba(0,0,0,.25))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#090909_0%,transparent_55%)]" />
      <div className="hero-grain absolute inset-0 opacity-20" />
      <div className="relative mx-auto flex min-h-[58vh] max-w-[1500px] items-end px-5 pb-16 pt-24 md:px-10 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
          <div className="mb-4 text-[10px] font-bold tracking-[0.24em] text-[#0529ED] sm:text-xs">{kicker[lang]}</div>
          <h1 className="text-[clamp(3.2rem,8vw,7.8rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">{title[lang]}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">{text[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
}
