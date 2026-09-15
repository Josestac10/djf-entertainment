import { EventDetail } from "../../../components/event-detail";

export default function CorporatePage() {
  return <EventDetail
    kicker={{ en: "CORPORATE EVENTS", es: "EVENTOS CORPORATIVOS" }}
    title={{ en: "Corporate Events", es: "Eventos corporativos" }}
    text={{ en: "Professional presentation with music matched to the tone of the room and the purpose of the event.", es: "Presentación profesional con música adaptada al tono del ambiente y al objetivo del evento." }}
    image="/media/corporate-dj-setup.webp"
    imagePosition="center 45%"
    introTitle={{ en: "Professional when it needs to be. Energetic when it can be.", es: "Profesional cuando debe serlo. Enérgico cuando puede serlo." }}
    introText={{ en: "Corporate events need a different kind of awareness. DJ Foca can keep the early part polished and unobtrusive, then raise the energy later if the format shifts into networking, celebration or dancing.", es: "Los eventos corporativos requieren otro tipo de lectura del ambiente. DJ Foca puede mantener el inicio profesional y discreto, y elevar la energía después si el evento pasa a networking, celebración o baile." }}
    bullets={[
      { en: "Professional event presentation.", es: "Presentación profesional para el evento." },
      { en: "Music adapted to networking, dinner or celebration formats.", es: "Música adaptada a networking, cenas o celebraciones." },
      { en: "Clean, flexible musical transitions.", es: "Transiciones musicales limpias y flexibles." },
      { en: "English / Spanish capability for diverse audiences.", es: "Capacidad inglés / español para públicos diversos." },
    ]}
  />;
}
