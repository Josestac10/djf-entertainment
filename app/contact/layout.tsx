import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book DJ Foca in Sioux Falls",

  description:
    "Check DJ Foca availability and request a custom quote for weddings, corporate events, private events and bar bookings in Sioux Falls, South Dakota.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Book DJ Foca in Sioux Falls | DJ Foca",

    description:
      "Check availability and request a custom DJ quote from DJF Entertainment in Sioux Falls, South Dakota.",

    url: "/contact",

    images: [
      {
        url: "/media/wedding-dj-smile.webp",
        alt: "DJ Foca of DJF Entertainment",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}