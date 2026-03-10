import ConnecterSitePage from "@/components/integration-page";
import { APP_URL } from "@/lib/env";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Connecter votre site web - API & Integration",
  description:
    "Integrez votre site web a Hotela en quelques minutes. API REST securisee, exemples de code en JavaScript, PHP et Python. Documentation complete.",
  keywords: [
    "API hotel",
    "integration site web hotel",
    "API reservation hotel",
    "webhook hotel",
    "connecter site hotel",
    "synchronisation reservations",
    "API REST hotel",
  ],
  openGraph: {
    title: "API Hotela - Connectez votre site web a votre PMS",
    description:
      "Synchronisez les reservations de votre site web avec Hotela. API REST, webhooks, documentation complete.",
    url: `${APP_URL}/integration`,
    images: [
      {
        url: "/og-api.png",
        width: 1200,
        height: 630,
        alt: "API Hotela",
      },
    ],
  },
  alternates: {
    canonical: `${APP_URL}/integration`,
  },
};

export default function page() {
  return <ConnecterSitePage />;
}
