import { APP_URL } from "@/lib/env";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation API Hotela - Reference complete pour developpeurs",
  description:
    "Documentation technique complete de l'API REST Hotela. Endpoints, authentification, exemples de code en JavaScript, PHP et Python pour integrer les reservations a votre site web.",
  keywords: [
    "API hotel Cote d'Ivoire",
    "documentation API reservation",
    "API REST hotel",
    "integration booking hotel",
    "webhook reservation hotel",
    "SDK hotel",
    "developpeur hotel API",
    "endpoints reservation",
    "authentification API hotel",
    "exemples code API hotel",
  ],
  openGraph: {
    title: "Documentation API Hotela - Reference developpeurs",
    description:
      "Integrez les reservations Hotela a votre site web. Documentation complete avec exemples de code, endpoints et guides d'authentification.",
    url: `${APP_URL}/docs/api`,
    type: "website",
    images: [
      {
        url: "/og-api-docs.png",
        width: 1200,
        height: 630,
        alt: "Documentation API Hotela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation API Hotela",
    description:
      "Reference technique complete pour integrer les reservations Hotela a votre application.",
  },
  alternates: {
    canonical: `${APP_URL}/docs/api`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DocsApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
