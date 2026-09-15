import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../components/language-provider";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "DJ Foca | Bilingual DJ in South Dakota",
    template: "%s | DJ Foca",
  },
  description:
    "Bilingual DJ entertainment for weddings, corporate events, private events and bars in Sioux Falls, South Dakota.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
