import PricingPage from "@/components/pricing-page";
import { APP_URL } from "@/lib/env";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tarifs - Plans et prix du logiciel de gestion hoteliere",
  description:
    "Decouvrez nos offres : Essentiel (15 000 FCFA/mois), Business (25 000 FCFA/mois) et Premium (40 000 FCFA/mois). Essai gratuit 30 jours, sans engagement.",
  keywords: [
    "prix logiciel hotel",
    "tarif PMS hotel",
    "cout logiciel gestion hotel",
    "abonnement logiciel hotel",
    "logiciel hotel pas cher",
    "essai gratuit logiciel hotel",
  ],
  openGraph: {
    title: "Tarifs Hotela - A partir de 15 000 FCFA/mois",
    description:
      "3 plans adaptes a la taille de votre hotel. Essai gratuit 30 jours, 2 mois offerts sur l'abonnement annuel.",
    url: `${APP_URL}/pricing`,
    images: [
      {
        url: "/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "Tarifs Hotela",
      },
    ],
  },
  alternates: {
    canonical: `${APP_URL}/pricing`,
  },
};

export default function page() {
  return <PricingPage />;
}
