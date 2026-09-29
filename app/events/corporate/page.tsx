import { EventDetail } from "../../../components/event-detail";

export default function CorporatePage() {
  return (
    <EventDetail
      kicker={{
        en: "CORPORATE EVENT DJ IN SIOUX FALLS",
        es: "DJ PARA EVENTOS CORPORATIVOS EN SIOUX FALLS",
      }}
      title={{
        en: "Corporate Event DJ in Sioux Falls",
        es: "DJ para Eventos Corporativos en Sioux Falls",
      }}
      text={{
        en: "Professional bilingual DJ and MC services for corporate events in Sioux Falls, with music and presentation adapted to the format, audience and atmosphere of your event.",
        es: "Servicios profesionales y bilingües de DJ y MC para eventos corporativos en Sioux Falls, con música y presentación adaptadas al formato, público y ambiente de tu evento.",
      }}
      image="/media/corporate-dj-setup.webp"
      imagePosition="center 45%"
      introTitle={{
        en: "Professional when it needs to be. Energetic when it can be.",
        es: "Profesional cuando debe serlo. Enérgico cuando puede serlo.",
      }}
      introText={{
        en: "Corporate events require the right balance between professionalism and energy. DJ Foca adapts the music and presentation to the flow of the event, whether the atmosphere calls for background music, networking, dinner, celebration or a more energetic finish.",
        es: "Los eventos corporativos requieren el equilibrio adecuado entre profesionalismo y energía. DJ Foca adapta la música y la presentación al desarrollo del evento, ya sea que el ambiente requiera música de fondo, networking, cena, celebración o un cierre con mayor energía.",
      }}
      bullets={[
        {
          en: "Professional DJ and event presentation.",
          es: "DJ y presentación profesional para el evento.",
        },
        {
          en: "Music adapted to networking, dinner and celebration formats.",
          es: "Música adaptada a formatos de networking, cenas y celebraciones.",
        },
        {
          en: "Flexible music selection based on the audience and event atmosphere.",
          es: "Selección musical flexible según el público y el ambiente del evento.",
        },
        {
          en: "English / Spanish DJ and MC capability for diverse audiences.",
          es: "Servicio de DJ y MC en inglés y español para públicos diversos.",
        },
      ]}
    />
  );
}