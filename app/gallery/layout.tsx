import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ Foca Event Gallery in Sioux Falls",

  description:
    "See DJF Entertainment event photos from weddings, private events, corporate events and bar performances in Sioux Falls, South Dakota.",

  alternates: {
    canonical: "/gallery",
  },

  openGraph: {
    title: "DJ Foca Event Gallery in Sioux Falls | DJ Foca",

    description:
      "See weddings, private events, corporate events and nightlife moments from DJF Entertainment in Sioux Falls, South Dakota.",

    url: "/gallery",

    images: [
      {
        url: "/media/wedding-party.webp",
        alt: "DJF Entertainment event in Sioux Falls, South Dakota",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}