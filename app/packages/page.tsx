"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Lightbulb, Sparkles } from "lucide-react";
import { useLanguage } from "../../components/language-provider";
import { PageHero } from "../../components/page-hero";
import { SectionCTA } from "../../components/section-cta";

const factors = [
  {
    icon: CalendarDays,
    en: "Event type",
    es: "Tipo de evento",
    textEn: "Pricing starts with the type of event you are planning.",
    textEs: "La cotización parte del tipo de evento que estás organizando.",
  },
  {
    icon: Clock3,
    en: "Hours",
    es: "Horas",
    textEn: "The number of service hours is part of the final quote.",
    textEs: "La cantidad de horas de servicio forma parte de la cotización final.",
  },
  {
    icon: Lightbulb,
    en: "Lighting",
    es: "Luces",
    textEn: "The amount of lighting you want is considered in the price.",
    textEs: "La cantidad de luces que quieras se considera en el precio.",
  },
  {
    icon: Sparkles,
    en: "Add-ons",
    es: "Extras",
    textEn: "Any additional services requested are added to the custom quote.",
    textEs: "Cualquier servicio adicional solicitado se agrega a la cotización personalizada.",
  },
];

export default function PackagesPage() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      <PageHero
        kicker={{ en: "PRICING & EXTRAS", es: "PRECIOS Y EXTRAS" }}
        title={{ en: "Custom Pricing", es: "Cotización personalizada" }}
        text={{
          en: "Pricing depends on the event and how much service you need, including hours, lighting and any additional extras.",
          es: "El precio depende del evento y de cuánto servicio necesites, incluyendo horas, luces y cualquier extra adicional.",
        }}
        image="/media/dj-formal-wide.webp"
        imagePosition="center 44%"
      />

      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">{es ? "SIN PRECIO ÚNICO" : "NO ONE-SIZE-FITS-ALL PRICE"}</div>
              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
                {es ? "La cotización se adapta a tu evento." : "Your quote is built around your event."}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                {es
                  ? "Cuéntanos qué tipo de evento tienes, cuántas horas necesitas, cuántas luces quieres y qué extras te interesan. Con esos detalles, DJF Entertainment puede preparar una cotización para tu evento."
                  : "Tell us what kind of event you are planning, how many hours you need, how much lighting you want and which extras you are interested in. DJF Entertainment can then prepare a quote for your event."}
              </p>
              <Link href="/contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#0529ED] px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white">
                {es ? "SOLICITAR COTIZACIÓN" : "REQUEST A QUOTE"} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {factors.map((factor) => {
                const Icon = factor.icon;
                return (
                  <article key={factor.en} className="rounded-[1.7rem] border border-white/10 bg-white/[0.025] p-6 md:p-7">
                    <Icon size={20} className="text-[#0529ED]" />
                    <h3 className="mt-5 text-xl font-black uppercase tracking-[-0.03em]">{es ? factor.es : factor.en}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/50">{es ? factor.textEs : factor.textEn}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}
