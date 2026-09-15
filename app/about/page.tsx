"use client";

import { CalendarCheck2, Globe2, Music2 } from "lucide-react";
import { useLanguage } from "../../components/language-provider";
import { PageHero } from "../../components/page-hero";
import { SectionCTA } from "../../components/section-cta";

export default function AboutPage() {
  const { lang } = useLanguage();
  const es = lang === "es";

  return (
    <>
      <PageHero
        kicker={{ en: "MEET YOUR TEAM", es: "CONOCE A TU EQUIPO" }}
        title={{ en: "The Team", es: "El Equipo" }}
        text={{ en: "Meet DJ Foca and Abigail Santa Cruz, the team behind the music, booking and event coordination at DJF Entertainment.", es: "Conoce a DJ Foca y Abigail Santa Cruz, el equipo detras de la musica, las reservas y la coordinacion de eventos de DJF Entertainment." }}
        image="/media/dj-stage-action.webp"
        imagePosition="center 42%"
      />

      <section className="px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <img src="/media/corporate-dj-portrait.webp" alt="DJ Foca" className="aspect-[4/5] h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-[9px] font-black tracking-[0.17em] text-[#0529ED] backdrop-blur">DJ FOCA · SIOUX FALLS, SOUTH DAKOTA</div>
          </div>

          <div className="lg:pl-6">
            <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">01 · {es ? "CONOCE A TU DJ" : "MEET YOUR DJ"}</div>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.88] tracking-[-0.055em] md:text-7xl">DJ FOCA</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-white/60">
              <p>{es ? "Nacido y criado en Peru y orgulloso de llamar hogar a Sioux Falls, South Dakota desde 2021, DJ Foca lleva una mezcla unica de culturas, musica y energia a cada evento." : "Born and raised in Peru and now proud to call Sioux Falls, South Dakota home since 2021, DJ Foca brings a unique blend of cultures, music, and energy to every event."}</p>
              <p>{es ? "Con mas de 4 anos de experiencia como DJ, DJ Foca ha desarrollado una pasion por crear experiencias inolvidables y mantener la pista de baile en movimiento. Haber vivido en distintos lugares le ha dado una comprension unica de diferentes culturas, celebraciones y de la musica que la gente disfruta escuchar y bailar." : "With over 4 years of DJ experience, DJ Foca has developed a passion for creating unforgettable experiences and keeping dance floors moving. Living in different places has given him a unique understanding of different cultures, celebrations, and the music people love to hear and dance to."}</p>
              <p>{es ? "DJ Foca es un DJ open-format con la capacidad de tocar una amplia variedad de generos: desde cumbias hasta country, reggaeton, hip-hop y todo lo que hay entre ellos. Ya sea que tu evento necesite ritmos latinos, clasicos americanos o un poco de todo, sabe leer el ambiente y mantener la musica fluyendo." : "DJ Foca is an open-format DJ with the ability to play across a wide range of genres - from cumbias to country, reggaeton to hip-hop, and everything in between. Whether your event calls for Latin rhythms, American classics, or a little bit of everything, he knows how to read the room and keep the music flowing."}</p>
              <p>{es ? "Pero ser DJ es mas que simplemente poner buena musica. DJ Foca tambien puede ser MC tanto en ingles como en espanol, ayudando con anuncios, guiando el desarrollo del evento y manteniendo todo funcionando con fluidez de principio a fin." : "But being a DJ is about more than just playing great music. DJ Foca can also MC in both English and Spanish, helping make announcements, guide the flow of the event, and keep everything running smoothly from start to finish."}</p>
              <p className="font-black text-white">{es ? "El objetivo de DJ Foca es simple: mantener la energia alta, el evento fluyendo y la pista llena toda la noche." : "DJ Foca's goal is simple: keep the energy high, the event flowing, and the dance floor packed all night."}</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"><Music2 size={17} className="text-[#0529ED]"/><div className="mt-3 text-[10px] font-black uppercase tracking-[0.12em]">OPEN FORMAT</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"><Globe2 size={17} className="text-[#0529ED]"/><div className="mt-3 text-[10px] font-black uppercase tracking-[0.12em]">ENGLISH / ESPANOL</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"><CalendarCheck2 size={17} className="text-[#0529ED]"/><div className="mt-3 text-[10px] font-black uppercase tracking-[0.12em]">4+ YEARS</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div className="relative grid min-h-[430px] place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <div className="hero-grain absolute inset-0 opacity-20" />
            <div className="relative text-center">
              <div className="text-[clamp(8rem,18vw,15rem)] font-black italic leading-none text-[#0529ED]">A</div>
              <div className="mt-1 text-[10px] font-black tracking-[0.25em] text-white/45">ABIGAIL SANTA CRUZ</div>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-black tracking-[0.22em] text-[#0529ED]">02 · {es ? "BOOKING MANAGER Y COORDINADORA DE BODAS" : "BOOKING MANAGER & WEDDING COORDINATOR"}</div>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.88] tracking-[-0.055em] md:text-7xl">ABIGAIL<br/>SANTA CRUZ</h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/60">
              <p>{es ? "Abigail es la persona detras de escena que se asegura de que cada detalle de tu evento este organizado y funcione sin problemas." : "Abigail is the person behind the scenes making sure every detail of your event is organized and running smoothly."}</p>
              <p>{es ? "Como nuestra Booking Manager y Wedding Coordinator, te guiara durante el proceso de reserva, ayudara a coordinar la musica y los detalles del evento, y sera el principal punto de comunicacion entre el DJ, los novios y los invitados." : "As our Booking Manager and Wedding Coordinator, she will guide you through the booking process, help coordinate your music and event details, and serve as the main point of communication between the DJ, bride and groom, and guests."}</p>
              <p>{es ? "El dia de tu evento, Abigail ayuda a mantener todo dentro del horario para que puedas relajarte, disfrutar tu celebracion y crear recuerdos inolvidables." : "On the day of your event, Abigail helps keep everything on schedule so you can relax, enjoy your celebration, and make unforgettable memories."}</p>
              <p className="font-black text-white">{es ? "Desde la primera reserva hasta la ultima cancion, Abigail esta aqui para asegurarse de que tu experiencia con DJF Entertainment sea fluida, organizada y sin estres." : "From the first booking to the last song, Abigail is here to make sure your DJF Entertainment experience is smooth, organized, and stress-free."}</p>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA />
    </>
  );
}
