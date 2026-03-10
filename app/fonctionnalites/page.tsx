import FonctionnalitesPage from "@/components/fonctionnality-page";
import { APP_URL } from "@/lib/env";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fonctionnalites - Tous les modules de gestion hoteliere",
  description:
    "Decouvrez toutes les fonctionnalites d'Hotela : reservations centralisees, gestion des sejours, facturation automatique, rapports et analytics, gestion clientele et API pour votre site web.",
  keywords: [
    "fonctionnalites logiciel hotel",
    "module reservation hotel",
    "gestion sejour hotel",
    "facturation automatique hotel",
    "rapports hotel",
    "analytics hotel",
    "gestion clientele hotel",
    "API reservation hotel",
  ],
  openGraph: {
    title: "Fonctionnalites Hotela - Modules de gestion hoteliere complets",
    description:
      "Reservations, sejours, facturation, rapports, clientele et API. Tout ce dont votre hotel a besoin dans un seul logiciel.",
    url: `${APP_URL}/fonctionnalites`,
    images: [
      {
        url: "/og-fonctionnalites.png",
        width: 1200,
        height: 630,
        alt: "Fonctionnalites Hotela",
      },
    ],
  },
  alternates: {
    canonical: `${APP_URL}/fonctionnalites`,
  },
};

export default function page() {
  return <FonctionnalitesPage />;
}
