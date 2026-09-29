import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ Services in Sioux Falls",

  description:
    "Explore bilingual DJ and MC services for weddings, corporate events, private events and bars in Sioux Falls, South Dakota.",

  alternates: {
    canonical: "/events",
  },

  openGraph: {
    title: "DJ Services in Sioux Falls | DJ Foca",
    description:
      "Bilingual DJ and MC services for weddings, corporate events, private celebrations and bars in Sioux Falls, South Dakota.",
    url: "/events",
    images: [
      {
        url: "/media/wedding-party.webp",
        alt: "DJF Entertainment event in Sioux Falls, South Dakota",
      },
    ],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}