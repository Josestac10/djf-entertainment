import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bar & Nightlife DJ in Sioux Falls",

  description:
    "Open-format DJ services for bars and nightlife events in Sioux Falls, South Dakota, with music tailored to the venue, crowd and atmosphere.",

  alternates: {
    canonical: "/events/bars",
  },

  openGraph: {
    title: "Bar & Nightlife DJ in Sioux Falls | DJ Foca",

    description:
      "Open-format DJ services for bars and nightlife events in Sioux Falls, South Dakota.",

    url: "/events/bars",

    images: [
      {
        url: "/media/bar-action.webp",
        alt: "DJ Foca performing at a bar event",
      },
    ],
  },
};

export default function BarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}