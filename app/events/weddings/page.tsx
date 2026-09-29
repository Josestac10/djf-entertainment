import { EventDetail } from "../../../components/event-detail";

export default function WeddingsPage() {
  return (
    <EventDetail
      kicker={{
        en: "WEDDING DJ IN SIOUX FALLS",
        es: "DJ PARA BODAS EN SIOUX FALLS",
      }}
      title={{
        en: "Wedding DJ in Sioux Falls",
        es: "DJ para Bodas en Sioux Falls",
      }}
      text={{
        en: "Bilingual DJ and MC services for weddings in Sioux Falls, with professional sound, dance floor lighting and wedding packages built for your celebration.",
        es: "Servicios bilingües de DJ y MC para bodas en Sioux Falls, con sonido profesional, iluminación para la pista y paquetes pensados para tu celebración.",
      }}
      image="/media/wedding-dj-smile.webp"
      imagePosition="center 44%"
      introTitle={{
        en: "Music, energy and a setup built for your wedding.",
        es: "Música, energía y un setup pensado para tu boda.",
      }}
      introText={{
        en: "DJ Foca brings an open-format approach to weddings, combining music, bilingual MC support and professional event equipment. From cumbia and reggaeton to hip-hop, country and more, the music is adapted to the couple and the people on the dance floor.",
        es: "DJ Foca lleva un enfoque open-format a las bodas, combinando música, apoyo bilingüe como MC y equipo profesional para eventos. Desde cumbia y reggaetón hasta hip-hop, country y más, la música se adapta a la pareja y a las personas en la pista de baile.",
      }}
      bullets={[
        {
          en: "Bilingual English / Spanish DJ and MC service.",
          es: "Servicio bilingüe de DJ y MC en inglés y español.",
        },
        {
          en: "Professional sound system and wireless microphones.",
          es: "Sistema de sonido profesional y micrófonos inalámbricos.",
        },
        {
          en: "Dance floor lighting with Basic and Premium wedding package options.",
          es: "Iluminación para la pista con opciones Basic y Premium Wedding Package.",
        },
        {
          en: "Open-format music including cumbia, reggaeton, hip-hop, country and more.",
          es: "Música open-format que incluye cumbia, reggaetón, hip-hop, country y más.",
        },
      ]}
      secondaryAction={{
        href: "/packages",
        label: {
          en: "VIEW WEDDING PACKAGES",
          es: "VER PAQUETES DE BODA",
        },
      }}
    />
  );
}