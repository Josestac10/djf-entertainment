import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Event DJ in Sioux Falls",

  description:
    "Bilingual DJ and MC services for private events, birthdays, anniversaries and celebrations in Sioux Falls, South Dakota.",

  alternates: {
    canonical: "/events/private-events",
  },

  openGraph: {
    title: "Private Event DJ in Sioux Falls | DJ Foca",

    description:
      "Bilingual DJ and MC services for private events and celebrations in Sioux Falls, South Dakota.",

    url: "/events/private-events",

    images: [
      {
        url: "/media/private-social.webp",
        alt: "Private event with DJF Entertainment",
      },
    ],
  },
};

export default function PrivateEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}