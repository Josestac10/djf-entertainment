"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useLanguage } from "./language-provider";

type Localized = {
  en: string;
  es: string;
};

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
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{
          objectPosition: imagePosition,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.92),rgba(0,0,0,.55),rgba(0,0,0,.25))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#090909_0%,transparent_55%)]" />
      <div className="hero-grain absolute inset-0 opacity-20" />
      <div className="relative mx-auto flex min-h-[58vh] max-w-[1500px] items-end px-5 pb-16 pt-24 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full min-w-0 max-w-4xl"
        >
          <div className="mb-4 text-[10px] font-bold tracking-[0.24em] text-[#0529ED] sm:text-xs">
            {kicker[lang]}
          </div>

          <h1
            className="
              w-full max-w-full
              break-normal
              hyphens-none
              [overflow-wrap:normal]
              text-[clamp(2rem,8vw,2.4rem)]
              font-black uppercase
              leading-[0.9]
              tracking-[-0.04em]
              sm:text-[clamp(3.2rem,8vw,7.8rem)]
              sm:leading-[0.84]
              sm:tracking-[-0.06em]
            "
          >
            {title[lang]}
          </h1>

          <p className="mt-6 w-full max-w-2xl break-words text-sm leading-6 text-white/65 sm:text-base sm:leading-7 md:text-lg">
            {text[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}