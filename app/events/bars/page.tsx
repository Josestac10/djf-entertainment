import { EventDetail } from "../../../components/event-detail";

export default function BarsPage() {
  return <EventDetail
    kicker={{ en: "BAR EVENTS", es: "EVENTOS EN BARES" }}
    title={{ en: "Bars", es: "Bares" }}
    text={{ en: "DJ service for bars, quoted around the event details and what the venue needs.", es: "Servicio de DJ para bares, cotizado según los detalles del evento y lo que necesite el local." }}
    image="/media/bar-action.webp"
    imagePosition="center 42%"
    introTitle={{ en: "DJ service built around the night.", es: "Servicio de DJ adaptado a la noche." }}
    introText={{ en: "Tell DJF Entertainment about the bar event, the hours you need, the lighting you want and any extras you would like included. Those details are used to prepare the quote.", es: "Cuéntale a DJF Entertainment sobre el evento en el bar, las horas que necesitas, las luces que quieres y cualquier extra que quieras incluir. Esos detalles se usan para preparar la cotización." }}
    bullets={[
      { en: "Pricing based on the event details.", es: "Precio basado en los detalles del evento." },
      { en: "Service hours included in the quote.", es: "Horas de servicio incluidas en la cotización." },
      { en: "Lighting based on what you request.", es: "Luces según lo que solicites." },
      { en: "Additional extras can be included in the quote.", es: "Los extras adicionales pueden incluirse en la cotización." },
    ]}
  />;
}
