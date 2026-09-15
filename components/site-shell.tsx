"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./language-provider";

const nav = [
  { href: "/", en: "Home", es: "Inicio" },
  { href: "/events", en: "Why DJF", es: "Por que DJF" },
  { href: "/about", en: "Meet Your Team", es: "Conoce al equipo" },
  { href: "/packages", en: "Pricing & Extras", es: "Precios y extras" },
  { href: "/gallery", en: "Gallery", es: "Galeria" },
  { href: "/contact", en: "Book With Us", es: "Reserva con nosotros" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="border-b border-white/10 bg-black py-2 text-center text-[10px] font-semibold tracking-[0.24em] text-white/60 sm:text-xs">
        {lang === "en" ? "SIOUX FALLS, SOUTH DAKOTA · BILINGUAL DJ + MC · ENGLISH / ESPANOL" : "SIOUX FALLS, SOUTH DAKOTA · DJ + MC BILINGUE · ENGLISH / ESPANOL"}
      </div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3 md:px-10 lg:px-14">
          <Link href="/" className="flex items-center" aria-label="DJF Entertainment home">
            <img src="/media/djf-entertainment.png" alt="DJF Entertainment" className="h-14 w-auto max-w-[150px] object-contain sm:h-16 sm:max-w-[175px]" />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[10px] font-semibold uppercase tracking-[0.15em] transition ${active ? "text-[#0529ED]" : "text-white/60 hover:text-white"}`}
                >
                  {lang === "en" ? item.en : item.es}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <button onClick={toggleLang} className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold tracking-[0.16em] transition hover:border-white/40">
              <Globe2 size={14} /> {lang === "en" ? "EN / ES" : "ES / EN"}
            </button>
            <Link href="/contact" className="rounded-full bg-[#0529ED] px-5 py-2.5 text-[10px] font-black tracking-[0.14em] text-white transition hover:scale-[1.03]">
              {lang === "en" ? "BOOK WITH US" : "RESERVA CON NOSOTROS"}
            </Link>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 xl:hidden" aria-label="Open navigation">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-black/95 px-5 py-5 xl:hidden">
            <div className="mx-auto grid max-w-[1500px] gap-1">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-white/75 hover:bg-white/5 hover:text-white">
                  {lang === "en" ? item.en : item.es}
                </Link>
              ))}
              <button onClick={toggleLang} className="mt-2 flex items-center gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold text-[#0529ED]">
                <Globe2 size={16} /> {lang === "en" ? "Cambiar a Espanol" : "Switch to English"}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  const { lang } = useLanguage();
  const es = lang === "es";
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="text-[10px] font-black tracking-[0.2em] text-[#0529ED]">SIOUX FALLS · SOUTH DAKOTA · ENGLISH / ESPANOL</div>
          <img src="/media/djf-entertainment.png" alt="DJ Foca" className="mt-4 h-20 w-auto max-w-[190px] object-contain object-left" />
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">
            {es ? "DJF Entertainment - Tu evento. Tu vision. Nuestra pasion." : "DJF Entertainment - Your Event. Your Vision. Our Passion."}
          </p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold tracking-[0.12em] text-white/55 md:justify-end">
            <a href="https://www.instagram.com/djf.music/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
              <Instagram size={16} /> @djf.music
            </a>
            <span>© 2026 DJF Entertainment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#090909] text-white selection:bg-[#0529ED] selection:text-white">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
