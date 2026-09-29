import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why DJF Entertainment | Sioux Falls DJ",

  description:
    "Learn why DJF Entertainment offers a personalized bilingual DJ and MC experience for weddings, corporate events, private events and bars in Sioux Falls, South Dakota.",

  alternates: {
    canonical: "/why-djf",
  },

  openGraph: {
    title: "Why DJF Entertainment | Sioux Falls DJ",
    description:
      "A personalized bilingual DJ and MC experience for events in Sioux Falls, South Dakota.",
    url: "/why-djf",
  },
};

export default function WhyDJFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}