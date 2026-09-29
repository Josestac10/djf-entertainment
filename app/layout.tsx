import type { Metadata } from "next";

import "./globals.css";

import { LanguageProvider } from "../components/language-provider";
import { SiteShell } from "../components/site-shell";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://djf-entertainment.vercel.app";

const siteTitle = "DJ Foca | Bilingual DJ in South Dakota";

const siteDescription =
  "Bilingual DJ and MC serving weddings, corporate events, private events and bars in Sioux Falls, South Dakota, with professional sound and lighting.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | DJ Foca",
  },

  description: siteDescription,

  applicationName: "DJF Entertainment",

  authors: [
    {
      name: "DJF Entertainment",
    },
  ],

  creator: "DJF Entertainment",
  publisher: "DJF Entertainment",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",

    siteName: "DJF Entertainment",

    title: siteTitle,

    description: siteDescription,

    images: [
      {
        url: "/media/dj-formal-wide.webp",
        width: 2200,
        height: 1467,
        alt: "DJ Foca - DJF Entertainment in Sioux Falls, South Dakota",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteTitle,

    description: siteDescription,

    images: ["/media/dj-formal-wide.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}