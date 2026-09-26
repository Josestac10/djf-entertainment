"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { useLanguage } from "../../components/language-provider";
import { PageHero } from "../../components/page-hero";
import { SectionCTA } from "../../components/section-cta";

const packages = [
  {
    number: "01",
    name: "Basic Wedding Package",
    image: "/media/package-01-basic.jpeg",
    price: "$1,500",
    items: [
      {
        en: "Professional Sound System",
        es: "Sistema de sonido profesional",
      },
      {
        en: "Basic Dance Floor Lights",
        es: "Iluminación básica para la pista de baile",
      },
      {
        en: "Wireless Microphones",
        es: "Micrófonos inalámbricos",
      },
    ],
  },
  {
    number: "02",
    name: "Premium Wedding Package",
    image: "/media/package-02-enhanced.jpeg",
    price: "$2,000",
    items: [
      {
        en: "Enhanced Dance Floor Lights",
        es: "Iluminación mejorada para la pista de baile",
        noteEn: "Recommended for bigger venues",
        noteEs: "Recomendado para espacios más grandes",
      },
      {
        en: "Wireless Microphones",
        es: "Micrófonos inalámbricos",
      },
      {
        en: "Discounts on Add-ons",
        es: "Descuentos en servicios adicionales",
      },
    ],
  },
];

export default function PackagesPage() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      {/* HERO */}
      <PageHero
        kicker={{
          en: "PRICING & PACKAGES",
          es: "PRECIOS Y PAQUETES",
        }}
        title={{
          en: "Choose Your Setup",
          es: "Elige tu setup",
        }}
        text={{
          en: "Choose the setup that best fits your event. Final pricing may vary depending on event type, hours of service, venue requirements and selected add-ons.",
          es: "Elige el setup que mejor se adapte a tu evento. El precio final puede variar según el tipo de evento, las horas de servicio, los requisitos del lugar y los extras seleccionados.",
        }}
        image="/media/dj-formal-wide.webp"
        imagePosition="center 44%"
      />

      {/* INTRO */}
      <section className="px-5 py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
                {es ? "PAQUETES DJF" : "DJF PACKAGES"}
              </div>

              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
                {es
                  ? "Un setup para cada evento."
                  : "A setup for every event."}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/55 lg:justify-self-end">
              {es
                ? "Cada evento es diferente. Los precios mostrados son precios iniciales y pueden variar según la duración, el tipo de evento, el lugar y los servicios adicionales seleccionados."
                : "Every event is different. The prices shown are starting prices and may vary depending on duration, event type, venue requirements and selected add-ons."}
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="px-5 pb-20 md:px-10 lg:px-14 lg:pb-28">
        <div className="mx-auto grid max-w-[1300px] gap-20 lg:gap-28">
          {packages.map((pkg, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={pkg.number}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={pkg.image}
                      alt={
                        es
                          ? `Setup del paquete ${pkg.number} de DJF Entertainment`
                          : `DJF Entertainment package ${pkg.number} setup`
                      }
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                </div>

                {/* INFO */}
                <div
                  className={`${
                    reverse ? "lg:pr-10" : "lg:pl-10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-black tracking-[0.22em] text-[#0529ED]">
                      {es ? "PAQUETE" : "PACKAGE"} {pkg.number}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="mt-5 text-3xl font-black uppercase leading-none tracking-[-0.04em] text-white md:text-4xl">
                    {pkg.name}
                  </h3>
                  <div className="mt-8">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                      {es ? "Desde" : "Starting at"}
                    </div>

                    <div className="mt-2 text-6xl font-black tracking-[-0.06em] text-white md:text-7xl">
                      {pkg.price}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4">
                    {pkg.items.map((item) => (
                      <div
                        key={item.en}
                        className="flex gap-4 border-b border-white/10 pb-4"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0529ED]">
                          <Check size={13} strokeWidth={3} />
                        </div>

                        <div>
                          <div className="text-sm font-bold text-white">
                            {es ? item.es : item.en}
                          </div>

                          {(item.noteEn || item.noteEs) && (
                            <div className="mt-1 text-xs leading-5 text-white/40">
                              {es ? item.noteEs : item.noteEn}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#0529ED] px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white transition hover:bg-[#2447ff]"
                  >
                    {es
                      ? "CONSULTAR DISPONIBILIDAD"
                      : "CHECK AVAILABILITY"}

                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0529ED]/30 bg-[#0529ED]/10">
                <Sparkles size={21} className="text-[#0529ED]" />
              </div>

              <div className="mt-7 text-[10px] font-black tracking-[0.22em] text-[#0529ED]">
                {es
                  ? "PERSONALIZA TU EXPERIENCIA"
                  : "CUSTOMIZE YOUR EXPERIENCE"}
              </div>

              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
                {es
                  ? "Haz que tu paquete sea tuyo."
                  : "Make your package yours."}
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0d0d12] p-7 md:p-9">
              <h3 className="text-2xl font-black uppercase tracking-[-0.04em]">
                {es ? "Add-ons y extras" : "Add-ons & Extras"}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                {es
                  ? "Puedes agregar servicios y mejoras adicionales según las necesidades de tu evento. Consulta las opciones disponibles cuando solicites tu cotización."
                  : "Additional services and upgrades can be added depending on your event needs. Ask about available add-ons when requesting your quote."}
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-[11px] font-black tracking-[0.14em] text-white transition hover:border-[#0529ED] hover:text-[#5270ff]"
              >
                {es
                  ? "SOLICITAR COTIZACIÓN"
                  : "REQUEST A QUOTE"}

                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}