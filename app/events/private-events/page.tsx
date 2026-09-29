import { EventDetail } from "../../../components/event-detail";

export default function PrivateEventsPage() {
  return (
    <EventDetail
      kicker={{
        en: "PRIVATE EVENT DJ IN SIOUX FALLS",
        es: "DJ PARA EVENTOS PRIVADOS EN SIOUX FALLS",
      }}
      title={{
        en: "Private Event DJ in Sioux Falls",
        es: "DJ para Eventos Privados en Sioux Falls",
      }}
      text={{
        en: "Bilingual DJ and MC services for private events and celebrations in Sioux Falls, with music shaped around your guests, your style and the atmosphere you want to create.",
        es: "Servicios bilingües de DJ y MC para eventos privados y celebraciones en Sioux Falls, con música adaptada a tus invitados, tu estilo y el ambiente que quieres crear.",
      }}
      image="/media/private-social.webp"
      imagePosition="center 45%"
      introTitle={{
        en: "Your people. Your music. Your celebration.",
        es: "Tu gente. Tu música. Tu celebración.",
      }}
      introText={{
        en: "Private events should feel personal. DJ Foca adapts the music to the host, the guests and the energy in the room, moving naturally between styles as the celebration develops.",
        es: "Los eventos privados deben sentirse personales. DJ Foca adapta la música al anfitrión, los invitados y la energía del ambiente, cambiando de estilos de forma natural a medida que avanza la celebración.",
      }}
      bullets={[
        {
          en: "Birthdays, anniversaries and private celebrations.",
          es: "Cumpleaños, aniversarios y celebraciones privadas.",
        },
        {
          en: "Music selection adapted to the host and guest list.",
          es: "Selección musical adaptada al anfitrión y a los invitados.",
        },
        {
          en: "English / Spanish DJ and MC capability.",
          es: "Servicio de DJ y MC en inglés y español.",
        },
        {
          en: "Open-format music that can move between different genres and generations.",
          es: "Música open-format que puede moverse entre diferentes géneros y generaciones.",
        },
      ]}
    />
  );
}