import { EventDetail } from "../../../components/event-detail";

export default function WeddingsPage() {
  return <EventDetail
    kicker={{ en: "WEDDING DJ", es: "DJ PARA BODAS" }}
    title={{ en: "Weddings", es: "Bodas" }}
    text={{ en: "A polished soundtrack for the moments that matter, followed by the party everyone remembers.", es: "Una banda sonora cuidada para los momentos importantes y una fiesta que todos recuerden." }}
    image="/media/wedding-dj-smile.webp"
    imagePosition="center 44%"
    introTitle={{ en: "From the first entrance to the last song.", es: "Desde la primera entrada hasta la última canción." }}
    introText={{ en: "DJ Foca adapts the music to the couple, families and guests rather than forcing every wedding into the same playlist. The goal is a smooth flow, a packed dance floor and a night that still feels personal.", es: "DJ Foca adapta la música a la pareja, las familias y los invitados, sin convertir cada boda en la misma playlist. El objetivo es lograr una transición fluida, una pista llena y una noche que siga sintiéndose personal." }}
    bullets={[
      { en: "Music planning around your must-play and do-not-play preferences.", es: "Planificación musical según tus canciones imprescindibles y las que prefieres evitar." },
      { en: "Bilingual English / Spanish experience when the crowd needs it.", es: "Experiencia bilingüe inglés / español cuando el público lo necesite." },
      { en: "Reggaeton, hip-hop, country and open-format flexibility.", es: "Reggaeton, hip-hop, country y flexibilidad open format." },
      { en: "Professional setup and event-focused presentation.", es: "Montaje profesional y una presentación enfocada en el evento." },
    ]}
  />;
}
