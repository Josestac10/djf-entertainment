import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Event DJ in Sioux Falls",

  description:
    "Professional bilingual DJ and MC services for corporate events in Sioux Falls, South Dakota, with music tailored to your audience, event format and atmosphere.",

  alternates: {
    canonical: "/events/corporate",
  },

  openGraph: {
    title: "Corporate Event DJ in Sioux Falls | DJ Foca",

    description:
      "Professional bilingual DJ and MC services for corporate events in Sioux Falls, South Dakota.",

    url: "/events/corporate",

    images: [
      {
        url: "/media/corporate-dj-setup.webp",
        alt: "DJF Entertainment corporate event DJ setup",
      },
    ],
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}