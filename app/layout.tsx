import type React from "react";
import type { Metadata, Viewport } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { APP_URL } from "@/lib/env";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = APP_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hotela - Logiciel de gestion hoteliere pour la Cote d'Ivoire",
    template: "%s | Hotela",
  },
  description:
    "Centralisez vos reservations, gerez vos sejours, automatisez votre facturation et pilotez votre hotel depuis n'importe ou. Essai gratuit 30 jours.",
  keywords: [
    "logiciel hotel",
    "gestion hoteliere",
    "PMS hotel",
    "logiciel reservation hotel",
    "gestion hotel Cote d'Ivoire",
    "logiciel hotel Abidjan",
    "hotel management software",
    "check-in check-out",
    "facturation hotel",
    "reservation en ligne",
    "logiciel hebergement",
    "gestion chambre hotel",
    "software hotel Afrique",
  ],
  authors: [{ name: "Hotela", url: siteUrl }],
  creator: "Hotela",
  publisher: "Hotela",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-CI": siteUrl,
      fr: siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: siteUrl,
    siteName: "Hotela",
    title: "Hotela - Logiciel de gestion hoteliere pour la Cote d'Ivoire",
    description:
      "Centralisez vos reservations, gerez vos sejours, automatisez votre facturation et pilotez votre hotel depuis n'importe ou. Essai gratuit 30 jours.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hotela - Logiciel de gestion hoteliere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotela - Logiciel de gestion hoteliere",
    description:
      "Centralisez vos reservations, gerez vos sejours, automatisez votre facturation. Essai gratuit 30 jours.",
    images: ["/og-image.png"],
    creator: "@hotela_app",
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      // { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      // { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`dark ${montserrat.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* <Analytics /> */}
      </body>
    </html>
  );
}
