"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Globe,
  Zap,
  Code2,
  Link2,
  ArrowLeftRight,
  Webhook,
  RefreshCw,
  MonitorSmartphone,
  Key,
  LayoutDashboard,
  ChevronRight,
  Mail,
  AlertTriangle,
  MessageCircle,
  CheckCheck,
  UserCheck,
  BarChart3,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { APP_URL } from "@/lib/env";

const apiSteps = [
  {
    step: "01",
    icon: Globe,
    title: "Votre site web reçoit une réservation",
    description:
      "Un client visite votre site et réserve une chambre en ligne, 24h/24.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    step: "02",
    icon: Webhook,
    title: "L'API Hôtela est déclenchée instantanément",
    description:
      "Votre site envoie les données de la réservation à Hôtela via notre API REST sécurisée.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    step: "03",
    icon: RefreshCw,
    title: "Synchronisation en temps réel",
    description:
      "Hôtela met à jour automatiquement le calendrier, les disponibilités et le statut des chambres.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    step: "04",
    icon: LayoutDashboard,
    title: "Votre équipe gère tout depuis Hôtela",
    description:
      "Check-in, facturation, attribution des chambres — tout centralisé dans un seul tableau de bord.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
];

const codeSnippets: Record<string, string> = {
  javascript: `// Envoyer une réservation depuis votre site
const response = await fetch(
  "https://api.hotela.app/v1/reservations",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      room_id: "CH-201",
      guest: {
        name: "Kouame Yao",
        phone: "+225 07 00 00 00"
      },
      check_in: "2025-08-15",
      check_out: "2025-08-18",
      source: "website"
    })
  }
);

const { reservation_id, status } = await response.json();
// reservation_id: "RES-2025-089"
// status: "confirmed" ✓`,
  php: `<?php
// Envoyer une réservation depuis votre site
$client = new GuzzleHttp\\Client();
$response = $client->post(
  'https://api.hotela.app/v1/reservations',
  [
    'headers' => [
      'Authorization' => 'Bearer YOUR_API_KEY',
      'Content-Type'  => 'application/json',
    ],
    'json' => [
      'room_id'    => 'CH-201',
      'guest'      => [
        'name'  => 'Kouame Yao',
        'phone' => '+225 07 00 00 00',
      ],
      'check_in'   => '2025-08-15',
      'check_out'  => '2025-08-18',
      'source'     => 'website',
    ],
  ]
);
$data = json_decode($response->getBody(), true);
// reservation_id: "RES-2025-089"
// status: "confirmed" ✓`,
  python: `import requests

# Envoyer une réservation depuis votre site
response = requests.post(
    "https://api.hotela.app/v1/reservations",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    },
    json={
        "room_id": "CH-201",
        "guest": {
            "name": "Kouame Yao",
            "phone": "+225 07 00 00 00"
        },
        "check_in": "2025-08-15",
        "check_out": "2025-08-18",
        "source": "website"
    }
)
data = response.json()
# reservation_id: "RES-2025-089"
# status: "confirmed" ✓`,
};

export default function ConnecterSitePage() {
  const [activeTab, setActiveTab] = useState("javascript");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-accent/5 blur-3xl rounded-full sm:h-[800px] sm:w-[800px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm">
            <Zap className="mr-1 h-3 w-3 inline sm:h-3.5 sm:w-3.5" />
            Fonctionnalité clé
          </Badge>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Fini les réservations perdues{" "}
            <span className="text-accent">dans votre boite mail</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Quand un client réserve sur votre site, cette réservation ne doit{" "}
            <strong className="text-foreground">jamais</strong> finir dans un
            email ou un WhatsApp. Elle doit arriver directement dans le tableau
            de bord de votre équipe — et déclencher automatiquement la création
            du séjour et la préparation de la facture.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a href={`${APP_URL}/register`} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                className="h-12 w-full px-8 text-base sm:w-auto"
              >
                Obtenir ma clé API
                <Key className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base w-full sm:w-auto"
              >
                Voir les tarifs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-12 sm:py-16 border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center">
            {/* Problem side */}
            <div className="border border-destructive/20 bg-destructive/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-destructive mb-3">
                Sans Hôtela
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { icon: Globe, label: "Client réserve sur votre site" },
                  { icon: Mail, label: "Email dans votre boite mail" },
                  { icon: MessageCircle, label: "WhatsApp au réceptionniste" },
                  {
                    icon: AlertTriangle,
                    label: "Risque de double-réservation",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <item.icon
                      className={`h-3.5 w-3.5 ${i > 0 ? "text-destructive" : "text-muted-foreground"}`}
                    />
                    {item.label}
                    {i < 3 && (
                      <ArrowRight className="h-3 w-3 ml-auto text-muted-foreground/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="h-10 w-10 bg-accent flex items-center justify-center">
                  <Zap className="h-5 w-5 text-accent-foreground" />
                </div>
                <p className="text-xs font-semibold text-accent text-center">
                  API Hôtela
                </p>
              </div>
            </div>

            {/* Solution side */}
            <div className="border border-green-500/20 bg-green-500/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-green-500 mb-3">
                Avec Hôtela
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { icon: Globe, label: "Client réserve sur votre site" },
                  { icon: Zap, label: "API Hôtela déclenchée instantanément" },
                  {
                    icon: LayoutDashboard,
                    label: "Tableau de bord mis à jour",
                  },
                  { icon: CheckCheck, label: "Équipe notifiée, zéro doublon" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <item.icon
                      className={`h-3.5 w-3.5 ${i > 0 ? "text-green-500" : "text-muted-foreground"}`}
                    />
                    {item.label}
                    {i < 3 && (
                      <ArrowRight className="h-3 w-3 ml-auto text-muted-foreground/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Steps */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-balance">
              Comment ça fonctionne ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              En 4 étapes simples, vos réservations web arrivent automatiquement
              dans Hôtela.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-3">
            {apiSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-4 sm:flex-col sm:items-center sm:text-center p-4 border ${step.border} ${step.bg}`}
              >
                <div
                  className={`relative flex h-14 w-14 shrink-0 items-center justify-center border-2 sm:h-16 sm:w-16 ${step.border} bg-background`}
                >
                  <step.icon
                    className={`h-6 w-6 sm:h-7 sm:w-7 ${step.color}`}
                  />
                  <span
                    className={`absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center bg-background border border-border text-xs font-bold ${step.color}`}
                  >
                    {step.step}
                  </span>
                </div>
                <div className="flex-1 sm:flex-none">
                  <h3
                    className={`font-semibold text-sm leading-snug ${step.color}`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Block + Benefits */}
      <section className="py-16 sm:py-20 border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Code block */}
            <div className="relative max-w-sm sm:max-w-full">
              <div className="absolute -inset-1 bg-accent/10 blur-xl" />
              <div className="relative overflow-hidden border border-border bg-card">
                <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3 py-2.5 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-3.5 w-3.5 text-accent sm:h-4 sm:w-4" />
                    <span className="text-xs font-medium sm:text-sm">
                      Intégration API Hôtela
                    </span>
                  </div>
                  <div className="flex gap-0.5 sm:gap-1">
                    {[
                      {
                        key: "javascript",
                        label: "JS",
                        labelFull: "JavaScript",
                      },
                      { key: "php", label: "PHP", labelFull: "PHP" },
                      { key: "python", label: "PY", labelFull: "Python" },
                    ].map((lang) => (
                      <button
                        key={lang.key}
                        onClick={() => setActiveTab(lang.key)}
                        className={`px-2 py-1 text-xs font-mono transition-colors sm:px-3 ${
                          activeTab === lang.key
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="sm:hidden">{lang.label}</span>
                        <span className="hidden sm:inline">
                          {lang.labelFull}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto p-3 sm:p-4 max-w-xs sm:max-w-full bg-muted/30">
                  <pre className="text-[11px] font-mono leading-relaxed text-muted-foreground whitespace-pre sm:text-xs">
                    {codeSnippets[activeTab]}
                  </pre>
                </div>
                <div className="flex flex-col gap-2 border-t border-border bg-muted/30 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3 text-green-500 sm:h-3.5 sm:w-3.5" />
                    HTTPS chiffré — Clé API unique par hôtel
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-0.5 text-xs text-accent hover:underline"
                  >
                    Voir la documentation <ChevronRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col gap-4 sm:gap-5 max-w-sm sm:max-w-full">
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Pourquoi connecter votre site à Hôtela ?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  WordPress, Wix ou site sur mesure — l&apos;API Hôtela s&apos;y
                  branche facilement. Votre site continue comme avant, sauf que
                  les réservations arrivent désormais directement dans Hôtela,
                  créent automatiquement la fiche client et préparent la
                  facturation.
                </p>
              </div>

              {[
                {
                  icon: ArrowLeftRight,
                  title: "Synchronisation bidirectionnelle",
                  description:
                    "Les disponibilités de votre site se mettent à jour en temps réel depuis Hôtela. Fini les doubles réservations.",
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  icon: MonitorSmartphone,
                  title: "Compatible avec tous les sites",
                  description:
                    "WordPress, Wix, site custom — si votre site peut faire un appel HTTP, il se connecte à Hôtela.",
                  color: "text-blue-400",
                  bg: "bg-blue-400/10",
                },
                {
                  icon: Zap,
                  title: "Mise en place en moins de 30 minutes",
                  description:
                    "Une clé API, quelques lignes de code ou un plugin. Notre équipe vous accompagne si besoin.",
                  color: "text-orange-500",
                  bg: "bg-orange-500/10",
                },
                {
                  icon: UserCheck,
                  title: "Fiche client créée automatiquement",
                  description:
                    "Chaque réservation web crée ou enrichit automatiquement la fiche client dans votre base Hôtela.",
                  color: "text-purple-400",
                  bg: "bg-purple-400/10",
                },
                {
                  icon: BarChart3,
                  title: "Origine des réservations tracée",
                  description:
                    "Voyez exactement combien de réservations viennent de votre site vs les autres canaux.",
                  color: "text-green-500",
                  bg: "bg-green-500/10",
                },
                {
                  icon: Key,
                  title: "Clé API incluse dans tous les plans",
                  description:
                    "Même le pack Essentiel inclut l'accès à l'API. Aucun surcoût, aucune limite artificielle.",
                  color: "text-pink-400",
                  bg: "bg-pink-400/10",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-3 group sm:gap-4">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10 ${benefit.bg} transition-transform group-hover:scale-110`}
                  >
                    <benefit.icon
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${benefit.color}`}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{benefit.title}</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}

              <Link href={`/docs/api`} className="mt-1">
                <Button variant="outline" className="w-full gap-2 sm:w-auto">
                  <Code2 className="h-3.5 w-3.5" />
                  Voir la documentation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Banner CTA */}
          <div className="mt-8 border border-accent/20 bg-accent/5 p-4 sm:mt-12 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10 sm:h-12 sm:w-12">
                  <Link2 className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold sm:text-base">
                    Site web connecté = réservations + clients + factures
                    automatiques
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                    Plus de ressaisie. Plus d&apos;emails perdus. Plus de
                    WhatsApp. Vos réceptionnistes se concentrent sur
                    l&apos;accueil.
                  </p>
                </div>
              </div>
              <a
                href={`${APP_URL}/register`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto sm:shrink-0"
              >
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                  Obtenir ma clé API
                  <Key className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-balance">
              Questions fréquentes
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                question: "Dois-je être développeur pour connecter mon site ?",
                answer:
                  "Non. Si vous utilisez WordPress ou Wix, nous avons des plugins prêts à l'emploi. Pour les sites sur mesure, notre équipe peut vous aider à intégrer l'API en moins de 30 minutes.",
              },
              {
                question: "L'API est-elle incluse dans tous les plans ?",
                answer:
                  "Oui ! Contrairement à d'autres logiciels, la clé API est incluse dans tous les plans Hôtela, même le pack Essentiel. Aucun surcoût.",
              },
              {
                question: "Que se passe-t-il si mon site tombe en panne ?",
                answer:
                  "Vos données dans Hôtela sont indépendantes de votre site. Vous pouvez toujours créer des réservations manuellement depuis le tableau de bord.",
              },
              {
                question:
                  "Les disponibilités se mettent-elles à jour sur mon site ?",
                answer:
                  "Oui, l'API est bidirectionnelle. Quand une chambre est réservée dans Hôtela (quel que soit le canal), les disponibilités de votre site se mettent à jour automatiquement.",
              },
              {
                question: "Puis-je tester l'API avant de m'engager ?",
                answer:
                  "Absolument. L'essai gratuit de 30 jours inclut l'accès complet à l'API. Vous pouvez tester l'intégration avec votre site sans engagement.",
              },
            ].map((faq, index) => (
              <div key={index} className="border border-border bg-card p-5">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-primary px-6 py-16 text-center sm:px-12 lg:px-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.2_0.01_75/0.3)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.2_0.01_75/0.3)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Prêt à connecter votre site web ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Obtenez votre clé API dès maintenant et commencez à recevoir vos
                réservations directement dans Hôtela.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <a
                  href={`${APP_URL}/register`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-12 px-8 text-base"
                  >
                    Obtenir ma clé API
                    <Key className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link href="/fonctionnalites">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    Voir les fonctionnalités
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
