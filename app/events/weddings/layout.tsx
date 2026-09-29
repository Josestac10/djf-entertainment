import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding DJ in Sioux Falls",

  description:
    "Bilingual wedding DJ and MC services in Sioux Falls, South Dakota, with professional sound, dance floor lighting, wireless microphones and wedding packages.",

  alternates: {
    canonical: "/events/weddings",
  },

  openGraph: {
    title: "Wedding DJ in Sioux Falls | DJ Foca",

    description:
      "Bilingual wedding DJ and MC services with professional sound and dance floor lighting in Sioux Falls, South Dakota.",

    url: "/events/weddings",

    images: [
      {
        url: "/media/wedding-dj-smile.webp",
        alt: "DJ Foca providing wedding DJ services in Sioux Falls",
      },
    ],
  },
};

export default function WeddingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}