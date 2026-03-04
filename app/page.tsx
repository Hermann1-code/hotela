"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Hotel,
  CalendarCheck,
  Receipt,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Smartphone,
  Clock,
  Building2,
  ChevronRight,
  Play,
  LayoutDashboard,
  BedDouble,
  CalendarDays,
  Key,
  Settings,
  LogOut,
  ChevronDown,
  X,
  Minus,
  Menu,
  Globe,
  Zap,
  Code2,
  Link2,
  ArrowLeftRight,
  Webhook,
  RefreshCw,
  MonitorSmartphone,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";

const paymentMethods = [
  { name: "Orange Money", logo: "/orangemoney.png" },
  { name: "MTN Mobile Money", logo: "/momo.png" },
  { name: "Wave", logo: "/wave.png" },
  { name: "Visa", logo: "/visa.png" },
  { name: "Mastercard", logo: "/mastercard.png" },
  { name: "Moov Money", logo: "/moov.png" },
];

const features = [
  {
    icon: CalendarCheck,
    title: "Réservations simplifiées",
    description:
      "Gérez vos réservations en quelques clics. Calendrier visuel, check-in/out rapide, notifications automatiques.",
  },
  {
    icon: Receipt,
    title: "Facturation automatique",
    description:
      "Factures générées automatiquement avec TVA 18%. Paiements partiels, Mobile Money, et export PDF.",
  },
  {
    icon: BarChart3,
    title: "Rapports & Analytics",
    description:
      "Suivez vos revenus, taux d'occupation et performances en temps réel avec des graphiques détaillés.",
  },
  {
    icon: Building2,
    title: "Multi-établissements",
    description:
      "Gérez plusieurs hôtels depuis une seule interface. Vue consolidee et rapports par établissement.",
  },
  {
    icon: Users,
    title: "Gestion des équipes",
    description:
      "Attribuez des roles (Manager, Réceptionniste) et suivez l'historique des operations.",
  },
  {
    icon: Smartphone,
    title: "Paiement Mobile Money",
    description:
      "Acceptez Orange Money, MTN Money et Wave directement dans l'application. Paiements sécurisés.",
  },
];

const plans = [
  {
    name: "ESSENTIEL",
    target: "< 15 chambres",
    monthlyPrice: 15000,
    annualPrice: 150000,
    annualSavings: "2 mois offerts",
    features: [
      { name: "Check-in / Check-out", value: true },
      { name: "Tableau de bord", value: "Simplifie" },
      { name: "Clé API Réservation", value: true },
      { name: "Nombre de comptes", value: "1 (Réception)" },
      { name: "Gestion Dépenses", value: false },
      { name: "Rapports & Stats", value: "Basique" },
      { name: "Multi-établissement", value: false },
      { name: "Module Resto/Bar", value: false },
      { name: "Support Technique", value: "Standard" },
    ],
    cta: "Essai gratuit 30 jours",
    popular: false,
  },
  {
    name: "BUSINESS",
    target: "15 à 40 chambres",
    monthlyPrice: 25000,
    annualPrice: 250000,
    annualSavings: "2 mois offerts",
    features: [
      { name: "Check-in / Check-out", value: "Complet" },
      { name: "Tableau de bord", value: "Avancé" },
      { name: "Clé API Réservation", value: true },
      { name: "Nombre de comptes", value: "3 (Admin, Gérant, Récep.)" },
      { name: "Gestion Dépenses", value: true },
      { name: "Rapports & Stats", value: "Mensuels détaillés" },
      { name: "Multi-établissement", value: true },
      { name: "Module Resto/Bar", value: false },
      { name: "Support Technique", value: "Prioritaire" },
    ],
    cta: "Essai gratuit 30 jours",
    popular: true,
  },
  {
    name: "PREMIUM",
    target: "> 40 chambres",
    monthlyPrice: 45000,
    annualPrice: 450000,
    annualSavings: "2 mois offerts",
    features: [
      { name: "Check-in / Check-out", value: "Complet" },
      { name: "Tableau de bord", value: "Expert" },
      { name: "Clé API Réservation", value: true },
      { name: "Nombre de comptes", value: "Illimite" },
      { name: "Gestion Dépenses", value: true },
      { name: "Rapports & Stats", value: "Temps réel / Compta" },
      { name: "Multi-établissement", value: true },
      { name: "Module Resto/Bar", value: true },
      { name: "Support Technique", value: "24h/7j + Formation" },
    ],
    cta: "Essai gratuit 30 jours",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Kouame Yao",
    role: "Directeur, Hôtel Ivoire Palace",
    location: "Abidjan",
    content:
      "L'interface est intuitive et mes réceptionnistes l'ont pris en main en une journee. Un outil vraiment pense pour le terrain.",
    rating: 5,
  },
  {
    name: "Fatou Diallo",
    role: "Gérante, Residence Les Palmiers",
    location: "Yamoussoukro",
    content:
      "Depuis qu'on a connecte notre site web a Hôtela via l'API, toutes les réservations arrivent directement dans le tableau de bord. Fini les erreurs de double réservation !",
    rating: 5,
  },
  {
    name: "Jean-Marc Koffi",
    role: "Proprietaire, Hôtel du Lac",
    location: "San-Pedro",
    content:
      "Les rapports analytiques me donnent une vision claire de mon activité. Je sais enfin quelles chambres sont les plus rentables.",
    rating: 5,
  },
];

const stats = [
  { value: "100%", label: "Cloud & Mobile Money" },
  { value: "3 min", label: "Pour un check-in" },
  { value: "99.9%", label: "Disponibilité garantie" },
  { value: "0", label: "Installation requise" },
];

const sidebarNavigation = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Chambres", icon: BedDouble, active: false },
  { name: "Réservations", icon: CalendarDays, active: false },
  { name: "Facturation", icon: Receipt, active: false },
  { name: "Rapports", icon: BarChart3, active: false },
  { name: "Multi-Hôtels", icon: Building2, active: false },
  { name: "Utilisateurs", icon: Users, active: false },
  { name: "Clés API", icon: Key, active: false },
  { name: "Paramètres", icon: Settings, active: false },
];

const apiSteps = [
  {
    step: "01",
    icon: Globe,
    title: "Votre site web récoit une réservation",
    description:
      "Un client visite votre site et reserve une chambre en ligne, 24h/24.",
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
      "Hôtela met a jour automatiquement le calendrier, les disponibilités et le statut des chambres.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    step: "04",
    icon: LayoutDashboard,
    title: "Votre équipe gere tout depuis Hôtela",
    description:
      "Check-in, facturation, attribution des chambres — tout centralisé dans un seul tableau de bord.",
    color: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
  },
];

const YOUTUBE_VIDEO_ID = "eLxPGQ0P3AM";

export default function LandingPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeTab, setActiveTab] = useState("javascript");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const codeSnippets = {
    javascript: `// Envoyer une réservation depuis votre site
const response = await fetch(
  "https://api.hotela.app/v1/réservations",
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

const { réservation_id, status } = await response.json();
// réservation_id: "RES-2025-089"
// status: "confirmed" ✓`,
    php: `<?php
// Envoyer une réservation depuis votre site
$client = new GuzzleHttp\\Client();
$response = $client->post(
  'https://api.hotela.app/v1/réservations',
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
// réservation_id: "RES-2025-089"
// status: "confirmed" ✓`,
    python: `import requests

# Envoyer une réservation depuis votre site
response = requests.post(
    "https://api.hotela.app/v1/réservations",
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
# réservation_id: "RES-2025-089"
# status: "confirmed" ✓`,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center bg-accent">
              <Hotel className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">Hôtela</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#api"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              API
            </Link>
            <Link
              href="#demo"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Démo
            </Link>
            <Link
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Fonctionnalités
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Tarifs
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Témoignages
            </Link>
          </div>
          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <ModeToggle />
            <Link href="/login">
              <Button variant="ghost">Connexion</Button>
            </Link>
            <Link href="/register">
              <Button>
                Essai gratuit
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
            <div className="mx-auto max-w-7xl divide-y divide-border/50 px-4">
              {[
                { href: "#api", label: "Connexion API" },
                { href: "#demo", label: "Demo" },
                { href: "#features", label: "Fonctionnalites" },
                { href: "#pricing", label: "Tarifs" },
                { href: "#testimonials", label: "Temoignages" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  <ChevronRight className="h-3.5 w-3.5 opacity-40" />
                </a>
              ))}
              <div className="flex flex-col gap-2 py-4">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Connexion
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">
                    Essai gratuit 30 jours
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-full bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse bg-success" />
              Nouveau : lancez-vous avec 30 jours gratuits
            </Badge>

            <h1 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance">
              Gérez votre hôtel comme un{" "}
              <span className="text-accent">professionnel</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
              Hôtela connecte votre site hôtel a un centre de controle puissant
              via API. Chaque réservation en ligne atterrit instantanement dans
              votre dashboard — réservations, facturation, rapports, tout en un
              seul endroit.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link href="/register" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-12 w-full px-8 text-base sm:w-auto"
                >
                  Essayer pendant 30 jours
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base bg-transparent"
                onClick={() => setShowVideoModal(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Voir la demo
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>Essai gratuit pendant 30 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>Aucune carte requise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>Annulation à tout moment</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mt-16">
            <div className="absolute -inset-1 bg-accent/20 blur-2xl" />
            <div className="relative overflow-hidden border border-border bg-card shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 bg-destructive/60" />
                  <div className="h-3 w-3 bg-warning/60" />
                  <div className="h-3 w-3 bg-success/60" />
                </div>
                <div className="ml-4 flex-1 bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  app.hotela.app/dashboard
                </div>
              </div>

              {/* Dashboard Layout with Sidebar */}
              <div className="flex h-72 sm:h-96 lg:h-[500px]">
                {/* Sidebar */}
                <div className="hidden w-48 flex-shrink-0 flex-col border-r border-border bg-sidebar lg:flex xl:w-56">
                  <div className="flex h-14 items-center gap-2 border-b border-sidebar-border px-4">
                    <div className="flex h-8 w-8 items-center justify-center bg-accent">
                      <Hotel className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <span className="font-semibold text-sidebar-foreground">
                      Hôtela
                    </span>
                  </div>

                  <div className="border-b border-sidebar-border p-3">
                    <div className="flex w-full items-center justify-between bg-sidebar-accent px-3 py-2 text-sm">
                      <div className="flex items-center gap-2 truncate">
                        <Building2 className="h-4 w-4 shrink-0 text-sidebar-accent-foreground" />
                        <span className="truncate text-sidebar-accent-foreground">
                          Hôtel Ivoire Palace
                        </span>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 text-sidebar-accent-foreground/50" />
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto px-3 py-4">
                    <nav className="flex flex-col gap-1">
                      {sidebarNavigation.map((item) => (
                        <div
                          key={item.name}
                          className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${
                            item.active
                              ? "bg-sidebar-primary text-sidebar-primary-foreground"
                              : "text-sidebar-foreground/70 hover:bg-sidebar-accent"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </div>
                      ))}
                    </nav>
                  </div>

                  <div className="border-t border-sidebar-border p-3">
                    <div className="flex w-full items-center gap-2 px-3 py-2 text-sm text-sidebar-foreground/70">
                      <LogOut className="h-4 w-4" />
                      Déconnexion
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-1 flex-col overflow-hidden">
                  <div className="flex h-14 items-center justify-between border-b border-border bg-background px-4">
                    <div>
                      <h2 className="text-sm font-semibold">Dashboard</h2>
                      <p className="text-xs text-muted-foreground">
                        Bienvenue ! Voici un aperçu de votre établissement.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Live API indicator */}
                      <div className="flex items-center gap-1.5 border border-success/30 bg-success/10 px-2 py-1 text-xs text-success">
                        <span className="h-1.5 w-1.5 animate-pulse bg-success" />
                        API connectee
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto bg-background p-4">
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                      {[
                        {
                          label: "Taux d'occupation",
                          value: "78%",
                          change: "+5%",
                          color: "text-accent",
                        },
                        {
                          label: "Check-ins aujourd'hui",
                          value: "12",
                          change: "+3",
                          color: "text-success",
                        },
                        {
                          label: "Revenus du jour",
                          value: "850K",
                          change: "+12%",
                          color: "text-accent",
                        },
                        {
                          label: "Réservations web",
                          value: "8",
                          change: "+5",
                          color: "text-success",
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="border border-border bg-card p-3"
                        >
                          <p className="text-xs text-muted-foreground">
                            {stat.label}
                          </p>
                          <div className="mt-1 flex items-end justify-between">
                            <p className={`text-xl font-bold ${stat.color}`}>
                              {stat.value}
                            </p>
                            <span
                              className={`text-xs ${stat.change.startsWith("+") ? "text-success" : "text-warning"}`}
                            >
                              {stat.change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3 lg:grid-cols-3">
                      <div className="lg:col-span-2 border border-border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">
                            Revenus mensuels
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            2025
                          </Badge>
                        </div>
                        <div className="mt-4 flex h-28 items-end gap-1.5">
                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                            (h, i) => (
                              <div
                                key={i}
                                className={`flex-1 transition-all ${i === 11 ? "bg-accent" : "bg-accent/30"}`}
                                style={{ height: `${h}%` }}
                              />
                            ),
                          )}
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                          <span>Jan</span>
                          <span>Juin</span>
                          <span>Dec</span>
                        </div>
                      </div>

                      <div className="border border-border bg-card p-4">
                        <p className="text-sm font-medium">Activité du jour</p>
                        <div className="mt-3 flex flex-col gap-3">
                          {[
                            {
                              text: "Réservation web — CH 201",
                              time: "Il y a 2 min",
                              type: "api",
                            },
                            {
                              text: "Check-in Chambre 105",
                              time: "Il y a 5 min",
                              type: "checkin",
                            },
                            {
                              text: "Facture #F-2025-089 payee",
                              time: "Il y a 12 min",
                              type: "payment",
                            },
                            {
                              text: "Réservation web — CH 118",
                              time: "Il y a 18 min",
                              type: "api",
                            },
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div
                                className={`mt-1 h-2 w-2 ${
                                  item.type === "api"
                                    ? "bg-accent animate-pulse"
                                    : item.type === "checkin"
                                      ? "bg-success"
                                      : "bg-primary"
                                }`}
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium truncate">
                                  {item.text}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {item.time}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== API INTEGRATION SECTION ========== */}
      <section
        id="api"
        className="relative overflow-hidden py-16 sm:py-20 lg:py-32"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-accent/5 blur-3xl rounded-full sm:h-[800px] sm:w-[800px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ── Header ── */}
          <div className="text-center">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm">
              <Zap className="mr-1 h-3 w-3 inline sm:h-3.5 sm:w-3.5" />
              Fonctionnalité clé
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Votre site web existant,{" "}
              <span className="text-accent">
                branché à votre tableau de bord
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base lg:text-lg">
              Connectez votre site hôtel à Hotela via notre API. Chaque
              réservation faite en ligne arrive{" "}
              <strong className="text-foreground">instantanément</strong> dans
              votre tableau de bord — sans ressaisie, sans erreur, sans effort.
            </p>
          </div>

          {/* ── Flow steps ── */}
          <div className="relative mt-10 sm:mt-14">
            {/* Connecting line — desktop only */}
            {/* <div className="absolute hidden md:block top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-400/30 via-accent/50 to-success/30" /> */}

            {/* 1 col on mobile → 2 cols sm → 4 cols md */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-3">
              {apiSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-4 sm:flex-col sm:items-center sm:text-center p-4 border ${step.border} ${step.bg}`}
                >
                  {/* Icon */}
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
                  {/* Text */}
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

          {/* ── Code block + Benefits ── */}
          <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-2 lg:items-start ">
            {/* Code block */}
            <div className="relative max-w-sm sm:max-w-full">
              <div className="absolute -inset-1 bg-accent/10 blur-xl" />
              <div className="relative  overflow-hidden border border-border bg-card">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3 py-2.5 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-3.5 w-3.5 text-accent sm:h-4 sm:w-4" />
                    <span className="text-xs font-medium sm:text-sm">
                      Intégration API Hotela
                    </span>
                  </div>
                  {/* Tabs — abbreviated labels on mobile */}
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

                {/* Code — scrollable horizontally, smaller font on mobile */}
                <div className="overflow-x-auto p-3 sm:p-4 max-w-xs sm:max-w-full">
                  <pre className="text-[11px] font-mono leading-relaxed text-muted-foreground whitespace-pre sm:text-xs">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-2 border-t border-border bg-muted/30 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3 text-success sm:h-3.5 sm:w-3.5" />
                    HTTPS chiffré — Clé API unique par hôtel
                  </div>
                  <Link
                    href="/docs/api"
                    className="flex items-center gap-0.5 text-xs text-accent hover:underline"
                  >
                    Voir la documentation <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Benefits list */}
            <div className="flex flex-col gap-4 sm:gap-5 max-w-sm sm:max-w-full">
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Pourquoi connecter votre site à Hotela ?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  WordPress, Wix ou site sur mesure — l'API Hotela s'y branche
                  facilement. Votre site continue comme avant, sauf que les
                  réservations arrivent désormais directement dans Hotela.
                </p>
              </div>

              {[
                {
                  icon: ArrowLeftRight,
                  title: "Synchronisation bidirectionnelle",
                  description:
                    "Les disponibilités de votre site se mettent à jour en temps réel depuis Hotela. Fini les doubles réservations.",
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  icon: MonitorSmartphone,
                  title: "Compatible avec tous les sites",
                  description:
                    "WordPress, Wix, site custom — si votre site peut faire un appel HTTP, il se connecte à Hotela.",
                  color: "text-blue-400",
                  bg: "bg-blue-400/10",
                },
                {
                  icon: Zap,
                  title: "Mise en place en moins de 30 minutes",
                  description:
                    "Une clé API, quelques lignes de code ou un plugin. Notre équipe vous accompagne si besoin.",
                  color: "text-warning",
                  bg: "bg-warning/10",
                },
                {
                  icon: BarChart3,
                  title: "Origine des réservations tracée",
                  description:
                    "Voyez exactement combien de réservations viennent de votre site vs les autres canaux.",
                  color: "text-success",
                  bg: "bg-success/10",
                },
                {
                  icon: Key,
                  title: "Clé API incluse dans tous les plans",
                  description:
                    "Même le pack Essentiel inclut l'accès à l'API. Aucun surcoût, aucune limite artificielle.",
                  color: "text-purple-400",
                  bg: "bg-purple-400/10",
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

              <Link href="/docs/api" className="mt-1">
                <Button variant="outline" className="w-full gap-2 sm:w-auto">
                  <Code2 className="h-3.5 w-3.5" />
                  Lire la documentation API
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* ── Banner CTA ── */}
          <div className="mt-8 border border-accent/20 bg-accent/5 p-4 sm:mt-12 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10 sm:h-12 sm:w-12">
                  <Link2 className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold sm:text-base">
                    Site web connecté = réservations automatiques
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                    Plus de ressaisie. Vos réceptionnistes se concentrent sur
                    l'accueil.
                  </p>
                </div>
              </div>
              <Link href="/register" className="w-full sm:w-auto sm:shrink-0">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                  Obtenir ma clé API
                  <Key className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Démo Section */}
      <section
        id="demo"
        className="border-t border-border bg-muted/30 py-16 sm:py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Démonstration
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Découvrez Hôtela en action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Regardez notre video de démonstration pour voir comment Hôtela
              peut transformer la gestion de votre hôtel en quelques minutes.
            </p>
          </div>

          <div className="relative mt-12 mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-accent/10 blur-2xl" />
            <div className="relative overflow-hidden border border-border bg-card shadow-2xl">
              <div className="relative aspect-video bg-muted">
                {YOUTUBE_VIDEO_ID ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                    title="Démonstration Hôtela"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                    onClick={() => setShowVideoModal(true)}
                  >
                    <div className="absolute inset-0 bg-primary">
                      <div className="absolute inset-0 opacity-50">
                        <div className="h-full w-full p-8">
                          <div className="grid h-full grid-cols-3 gap-4">
                            <div className="col-span-2 flex flex-col gap-4">
                              <div className="h-16 bg-accent/20" />
                              <div className="h-32 bg-accent/10" />
                            </div>
                            <div className="flex flex-col gap-4">
                              <div className="h-24 bg-accent/15" />
                              <div className="h-24 bg-accent/15" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="flex h-20 w-20 items-center justify-center bg-accent shadow-lg transition-transform group-hover:scale-110">
                        <Play
                          className="h-8 w-8 text-accent-foreground ml-1"
                          fill="currentColor"
                        />
                      </div>
                      <span className="text-lg font-medium text-primary-foreground">
                        Video bientôt disponible
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-border bg-card px-6 py-4">
                <div>
                  <p className="font-medium">Présentation complete de Hôtela</p>
                  <p className="text-sm text-muted-foreground">
                    Durée: 3 minutes
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Play className="h-4 w-4" />
                    <span>Nouvelle video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                time: "0:00",
                title: "Présentation du dashboard",
                description:
                  "Vue d'ensemble des statistiques et indicateurs cles",
              },
              {
                time: "1:15",
                title: "Connexion API & site web",
                description:
                  "Comment connecter votre site et centraliser toutes les réservations",
              },
              {
                time: "2:30",
                title: "Facturation automatique",
                description:
                  "Generation de factures avec TVA et paiement Mobile Money",
              },
            ].map((chapter, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-border/50 bg-card/50 transition-all hover:border-accent/50 hover:shadow-lg"
                onClick={() => setShowVideoModal(true)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-16 items-center justify-center bg-accent/10 text-sm font-mono text-accent">
                      {chapter.time}
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-accent transition-colors">
                        {chapter.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Fonctionnalités
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Tout ce dont vous avez besoin pour gerer votre hôtel
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Une solution complete conçue spécifiquement pour les hôteliers
              ivoiriens. Simple, puissante, et adaptée à vos besoins.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 transition-all hover:border-accent/50 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center bg-accent/10 sm:h-12 sm:w-12 text-accent transition-transform group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="mb-4">
                Pourquoi nous choisir
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Conçu pour les hôteliers africains
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nous comprenons les defis uniques de l'industrie hôtelière en
                Côte d'Ivoire. C'est pourquoi nous avons créé une solution
                adaptée a vos réalités.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Paiement Mobile Money",
                    description:
                      "Acceptez Orange Money, MTN Money, et Wave directement dans l'application.",
                  },
                  {
                    icon: Shield,
                    title: "Sécurité & Fiabilite",
                    description:
                      "Vos donnees sont protegees et sauvegardées automatiquement chaque jour.",
                  },
                  {
                    icon: Clock,
                    title: "Support local 24/7",
                    description:
                      "Une équipe basee à Abidjan disponible pour vous accompagner à tout moment.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent/10 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-accent/5 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-foreground">
                      30j
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Essai gratuit sans engagement
                    </p>
                  </div>
                  <div className="border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-success">24h</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mise en service rapide
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <div className="border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-accent">API</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Connexion site web incluse
                    </p>
                  </div>
                  <div className="border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-foreground">CI</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Conçu en Côte d'Ivoire
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Tarifs
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Nos Packs d'Abonnement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Choisissez le plan qui correspond à la taille de votre
              établissement. Tous les plans incluent un essai gratuit de 30
              jours et la cle API pour connecter votre site.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <span
                className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}
              >
                Mensuel
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative h-7 w-14 transition-colors ${isAnnual ? "bg-accent" : "bg-muted-foreground/30"}`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 bg-card shadow-md transition-transform ${isAnnual ? "left-8" : "left-1"}`}
                />
              </button>
              <span
                className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}
              >
                Annuel
              </span>
              {isAnnual && (
                <Badge className="bg-success/10 text-success border-success/20">
                  2 mois offerts
                </Badge>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:-translate-y-2 transition-transform ${
                  plan.popular
                    ? "border-accent shadow-lg shadow-accent/10"
                    : "border-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    Populaire
                  </div>
                )}
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.target}
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      {isAnnual
                        ? plan.annualPrice.toLocaleString("fr-FR")
                        : plan.monthlyPrice.toLocaleString("fr-FR")}
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      F{isAnnual ? "/an" : "/mois"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="mt-1 text-xs text-success font-medium">
                      {plan.annualSavings}
                    </p>
                  )}

                  <div className="mt-6 flex flex-col gap-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        {feature.value === false ? (
                          <Minus className="h-4 w-4 text-muted-foreground/40" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4 text-success" />
                        )}
                        <span
                          className={
                            feature.value === false
                              ? "text-muted-foreground/50"
                              : ""
                          }
                        >
                          {feature.name}
                          {typeof feature.value === "string" && (
                            <span className="ml-1 text-xs text-muted-foreground">
                              ({feature.value})
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/register"
                    className={buttonVariants({
                      variant: plan.popular ? "default" : "outline",
                      className: `w-full ${plan.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`,
                    })}
                  >
                    {plan.cta}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pricing Comparison Table */}
          <div className="mt-16 hidden lg:block">
            <div className="overflow-hidden border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Caractéristiques
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      Pack ESSENTIEL
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold border-x border-accent/20 bg-accent/5">
                      Pack BUSINESS
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      Pack PREMIUM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-6 py-3 text-sm font-medium text-muted-foreground">
                      Cible
                    </td>
                    <td className="px-6 py-3 text-center text-sm">
                      {"< 15 chambres"}
                    </td>
                    <td className="px-6 py-3 text-center text-sm border-x border-accent/20 bg-accent/5">
                      {"15 à 40 chambres"}
                    </td>
                    <td className="px-6 py-3 text-center text-sm">
                      {"> 40 chambres"}
                    </td>
                  </tr>
                  <tr className="border-t border-border bg-muted/20">
                    <td className="px-6 py-3 text-sm font-medium text-muted-foreground">
                      Prix Mensuel
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-semibold">
                      15 000 F
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-semibold border-x border-accent/20 bg-accent/5">
                      25 000 F
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-semibold">
                      45 000 F
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-6 py-3 text-sm font-medium text-muted-foreground">
                      Prix Annuel
                    </td>
                    <td className="px-6 py-3 text-center text-sm">
                      150 000 F{" "}
                      <span className="text-xs text-success">
                        (2 mois offerts)
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center text-sm border-x border-accent/20 bg-accent/5">
                      250 000 F{" "}
                      <span className="text-xs text-success">
                        (2 mois offerts)
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center text-sm">
                      450 000 F{" "}
                      <span className="text-xs text-success">
                        (2 mois offerts)
                      </span>
                    </td>
                  </tr>
                  {[
                    {
                      label: "Check-in / Check-out",
                      values: ["--", "Complet", "Complet"],
                    },
                    {
                      label: "Tableau de bord",
                      values: ["Simplifie", "Avancé", "Expert"],
                    },
                    {
                      label: "Clé API Réservation",
                      values: ["check", "check", "check"],
                    },
                    {
                      label: "Nombre de comptes",
                      values: [
                        "1 (Réception)",
                        "3 (Admin, Gérant, Récep.)",
                        "Illimite",
                      ],
                    },
                    {
                      label: "Gestion Dépenses",
                      values: ["cross", "check", "check"],
                    },
                    {
                      label: "Rapports & Stats",
                      values: [
                        "Basique",
                        "Mensuels détaillés",
                        "Temps réel / Compta",
                      ],
                    },
                    {
                      label: "Multi-établissement",
                      values: ["cross", "check", "check"],
                    },
                    {
                      label: "Module Resto/Bar",
                      values: ["cross", "cross", "check"],
                    },
                    {
                      label: "Support Technique",
                      values: ["Standard", "Prioritaire", "24h/7j + Formation"],
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-border ${i % 2 === 0 ? "bg-muted/20" : ""}`}
                    >
                      <td className="px-6 py-3 text-sm font-medium text-muted-foreground">
                        {row.label}
                      </td>
                      {row.values.map((val, j) => (
                        <td
                          key={j}
                          className={`px-6 py-3 text-center text-sm ${j === 1 ? "border-x border-accent/20 bg-accent/5" : ""}`}
                        >
                          {val === "check" ? (
                            <CheckCircle2 className="h-4 w-4 text-success mx-auto" />
                          ) : val === "cross" ? (
                            <Minus className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                          ) : val === "--" ? (
                            <span className="text-muted-foreground">--</span>
                          ) : (
                            val
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="border-t border-border bg-muted/30 py-16 sm:py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Témoignages
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Ce que disent nos premiers utilisateurs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Découvrez ce que nos clients disent de Hôtela.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 hover:-translate-y-1 transition-transform"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-warning text-warning"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-accent/10 text-accent font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role} - {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Paiements
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Nous acceptons tous les moyens de paiement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Payez vos factures facilement avec les solutions les plus
              populaires en Côte d'Ivoire.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-16 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-8">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <img
                  src={method.logo || "/placeholder.svg"}
                  alt={method.name}
                  className="h-10 w-auto grayscale opacity-70 transition-all hover:scale-110 hover:grayscale-0 hover:opacity-100"
                />
                <span className="text-sm font-medium">{method.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-success" />
              <span>Paiements sécurisés</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>Sans frais cachés</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-primary px-6 py-16 text-center sm:px-12 lg:px-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.2_0.01_75/0.3)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.2_0.01_75/0.3)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Prêt a connecter votre site et centraliser vos réservations ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Essayez Hôtela gratuitement pendant 30 jours. Obtenez votre cle
                API et connectez votre site web des aujourd'hui. Sans
                engagement, sans carte bancaire.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-12 px-8 text-base"
                  >
                    Démarrer l'essai gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    Contacter les ventes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center bg-accent">
                  <Hotel className="h-3.5 w-3.5 text-accent-foreground" />
                </div>
                <span className="font-bold tracking-tight">Hôtela</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Le logiciel de gestion hôtelière conçu pour la Côte d'Ivoire.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Produit</h4>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-foreground transition-colors"
                  >
                    Tarifs
                  </a>
                </li>
                <li>
                  <a
                    href="#demo"
                    className="hover:text-foreground transition-colors"
                  >
                    Démo
                  </a>
                </li>
                <li>
                  <a
                    href="#api"
                    className="hover:text-foreground transition-colors"
                  >
                    API & Intégration
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Entreprise</h4>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    A propos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Carrières
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <li>support@hotela.app</li>
                <li>+225 07 07 07 07 07</li>
                <li>Abidjan, Côte d'Ivoire</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Hôtela. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative mx-4 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-foreground hover:bg-muted"
              onClick={() => setShowVideoModal(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="overflow-hidden border border-border bg-card shadow-2xl">
              <div className="aspect-video bg-muted">
                {YOUTUBE_VIDEO_ID ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                    title="Démonstration Hôtela"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-primary p-8">
                    <div className="flex h-20 w-20 items-center justify-center bg-accent/20 mb-4">
                      <Play className="h-10 w-10 text-accent" />
                    </div>
                    <p className="text-lg font-medium text-primary-foreground">
                      Video de démonstration
                    </p>
                    <p className="mt-2 text-sm text-primary-foreground/70 text-center max-w-md">
                      Pour ajouter votre video YouTube, modifiez la constante{" "}
                      <code className="bg-primary-foreground/10 px-2 py-0.5">
                        YOUTUBE_VIDEO_ID
                      </code>{" "}
                      en haut du fichier avec l'ID de votre video.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
