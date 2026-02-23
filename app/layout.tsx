import type React from "react";
import type { Metadata, Viewport } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Gesco - Gestion Hôtelière Moderne pour la Côte d'Ivoire",
  description:
    "Le logiciel de gestion hôtelière N°1 en Côte d'Ivoire. Gérez vos réservations, factures et chambres facilement. Essai gratuit 30 jours.",
};

export const viewport: Viewport = {
  themeColor: "#1a1f35",
  width: "device-width",
  initialScale: 1,
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
