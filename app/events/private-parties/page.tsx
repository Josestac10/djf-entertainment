import { EventDetail } from "../../../components/event-detail";

export default function PrivatePartiesPage() {
  return <EventDetail
    kicker={{ en: "PRIVATE EVENTS", es: "EVENTOS PRIVADOS" }}
    title={{ en: "Private Events", es: "Eventos privados" }}
    text={{ en: "Birthdays, celebrations and private events where the music needs to feel like your crowd.", es: "Cumpleaños, celebraciones y eventos privados donde la música debe sentirse hecha para tu gente." }}
    image="/media/bar-action.webp"
    imagePosition="center 42%"
    introTitle={{ en: "Your people. Your sound.", es: "Tu gente. Tu sonido." }}
    introText={{ en: "A private party should not sound generic. DJ Foca uses the host's preferences and the reaction of the room to guide the set, moving between styles when the crowd is ready for it.", es: "Una fiesta privada no debería sonar genérica. DJ Foca parte de los gustos del anfitrión y de la reacción del público para guiar el set y cambiar de estilos cuando el ambiente lo pide." }}
    bullets={[
      { en: "Birthdays, anniversaries and milestone celebrations.", es: "Cumpleaños, aniversarios y celebraciones especiales." },
      { en: "Flexible music planning around the guest list.", es: "Planificación musical flexible según los invitados." },
      { en: "Bilingual music flow for mixed-language groups.", es: "Flujo musical bilingüe para grupos en ambos idiomas." },
      { en: "High-energy dance-floor focus when the party starts.", es: "Enfoque en mantener la energía de la pista cuando empieza la fiesta." },
    ]}
  />;
}
