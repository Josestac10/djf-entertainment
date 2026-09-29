import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding DJ Packages & Pricing in Sioux Falls",

  description:
    "Explore DJF Entertainment wedding DJ packages in Sioux Falls, South Dakota. Basic Wedding Package starts at $1,500 and Premium Wedding Package starts at $2,000.",

  alternates: {
    canonical: "/packages",
  },

  openGraph: {
    title: "Wedding DJ Packages & Pricing in Sioux Falls | DJ Foca",

    description:
      "Explore Basic and Premium wedding DJ packages from DJF Entertainment in Sioux Falls, South Dakota.",

    url: "/packages",

    images: [
      {
        url: "/media/package-02-enhanced.jpeg",
        alt: "DJF Entertainment Premium Wedding Package DJ setup",
      },
    ],
  },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}