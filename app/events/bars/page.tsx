import { EventDetail } from "../../../components/event-detail";

export default function BarsPage() {
  return (
    <EventDetail
      kicker={{
        en: "BAR & NIGHTLIFE DJ IN SIOUX FALLS",
        es: "DJ PARA BARES Y NIGHTLIFE EN SIOUX FALLS",
      }}
      title={{
        en: "Bar & Nightlife DJ in Sioux Falls",
        es: "DJ para Bares y Nightlife en Sioux Falls",
      }}
      text={{
        en: "Open-format DJ services for bars and nightlife events in Sioux Falls, with music and energy adapted to the venue, the crowd and the atmosphere of the night.",
        es: "Servicios de DJ open-format para bares y eventos nocturnos en Sioux Falls, con música y energía adaptadas al local, al público y al ambiente de la noche.",
      }}
      image="/media/bar-action.webp"
      imagePosition="center 48%"
      introTitle={{
        en: "Read the room. Build the energy. Keep the night moving.",
        es: "Leer al público. Subir la energía. Mantener la noche en movimiento.",
      }}
      introText={{
        en: "Bar and nightlife sets need flexibility. DJ Foca uses an open-format approach to move between genres, respond to the crowd and keep the music aligned with the energy of the venue throughout the night.",
        es: "Los sets para bares y nightlife necesitan flexibilidad. DJ Foca utiliza un enfoque open-format para moverse entre géneros, responder al público y mantener la música alineada con la energía del local durante toda la noche.",
      }}
      bullets={[
        {
          en: "Open-format DJ sets adapted to the crowd.",
          es: "Sets open-format adaptados al público.",
        },
        {
          en: "Music that can move between Latin, hip-hop, country and other styles.",
          es: "Música que puede moverse entre ritmos latinos, hip-hop, country y otros estilos.",
        },
        {
          en: "Flexible pacing based on the venue and the energy of the night.",
          es: "Ritmo flexible según el local y la energía de la noche.",
        },
        {
          en: "English / Spanish DJ and MC capability when the event calls for it.",
          es: "Servicio de DJ y MC en inglés y español cuando el evento lo requiera.",
        },
      ]}
    />
  );
}