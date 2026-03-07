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
  Wrench,
  Timer,
  PackageCheck,
  MessageCircle,
  Mail,
  AlertTriangle,
  TrendingUp,
  Laptop,
  Tablet,
  WifiOff,
  Eye,
  XCircle,
  ArrowUpRight,
  CheckCheck,
  Globe2,
  UserCheck,
  FileText,
  CreditCard,
  BookOpen,
  Activity,
  Database,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { CodeBlock } from "./docs/api/page";
import { APP_URL } from "@/lib/env";

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
    title: "Réservations centralisées",
    description:
      "Toutes vos réservations — site web, appels, walk-in — dans un seul tableau de bord. Calendrier visuel, check-in/out rapide, zéro double-réservation.",
  },
  {
    icon: BedDouble,
    title: "Gestion des séjours",
    description:
      "Suivez chaque séjour en temps réel : attribution des chambres, prolongations, transferts, services consommés. Votre équipe sait toujours où en est chaque client.",
  },
  {
    icon: Receipt,
    title: "Facturation automatique",
    description:
      "Factures générées automatiquement avec TVA 18%. Paiements partiels, export PDF, suivi des règlements et historique complet par client.",
  },
  {
    icon: BarChart3,
    title: "Rapports & Analytics",
    description:
      "Revenus du jour, taux d'occupation, chambres les plus rentables, évolution mensuelle — tout est calculé automatiquement en temps réel.",
  },
  {
    icon: Users,
    title: "Gestion de la clientèle",
    description:
      "Fiche complète par client : historique des séjours, préférences, solde dû, notes internes. Fidélisez vos clients avec une connaissance approfondie.",
  },
  {
    icon: Building2,
    title: "Multi-établissements",
    description:
      "Gérez plusieurs hôtels depuis une seule interface. Vue consolidée, rapports par établissement et équipes séparées.",
  },
  {
    icon: Key,
    title: "Connexion API Site Web",
    description:
      "Votre site réserve une chambre ? En 2 secondes, Hôtela met à jour les disponibilités et alerte votre équipe. Inclus dans tous les plans.",
  },
  {
    icon: Shield,
    title: "Données sécurisées & sauvegardées",
    description:
      "Vos données sont protégées et sauvegardées automatiquement chaque jour. Accès sécurisé par rôle : propriétaire, gérant, réceptionniste.",
  },
  {
    icon: CreditCard,
    title: "Gestion des dépenses",
    description:
      "Enregistrez et catégorisez toutes vos dépenses opérationnelles. Vision complète de votre rentabilité réelle mois par mois.",
  },
];

const modules = [
  {
    icon: CalendarCheck,
    label: "Réservations",
    desc: "Walk-in, appels, site web",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: BedDouble,
    label: "Séjours",
    desc: "Check-in / Check-out",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Receipt,
    label: "Facturation",
    desc: "Auto, TVA 18%, PDF",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: BarChart3,
    label: "Rapports",
    desc: "Revenus, occupation, stats",
    color: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
  },
  {
    icon: Users,
    label: "Clientèle",
    desc: "Fiches, historiques, soldes",
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  {
    icon: Key,
    label: "API Site Web",
    desc: "Connexion en temps réel",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
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
      { name: "Tableau de bord", value: "Simplifié" },
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
      { name: "Nombre de comptes", value: "Illimité" },
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
      "Avant, je recevais les réservations par WhatsApp et je devais tout reporter à la main. Maintenant tout arrive directement dans le tableau de bord. Plus d'erreurs, plus de double-réservations.",
    rating: 5,
  },
  {
    name: "Fatou Diallo",
    role: "Gérante, Résidence Les Palmiers",
    location: "Yamoussoukro",
    content:
      "Je suis en déplacement et je vois en temps réel l'occupation de mon hôtel depuis mon téléphone. J'ai le contrôle total même quand je ne suis pas sur place.",
    rating: 5,
  },
  {
    name: "Jean-Marc Koffi",
    role: "Propriétaire, Hôtel du Lac",
    location: "San-Pedro",
    content:
      "Les rapports analytiques me donnent une vision claire de mon activité. Je sais enfin quelles chambres sont les plus rentables et je prends de meilleures décisions.",
    rating: 5,
  },
];

const stats = [
  { value: "3 min", label: "Pour un check-in complet" },
  { value: "0", label: "Double-réservation possible" },
  { value: "24h/7j", label: "Accès depuis n'importe où" },
  { value: "30j", label: "Pour tester gratuitement" },
];

const sidebarNavigation = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Chambres", icon: BedDouble, active: false },
  { name: "Réservations", icon: CalendarDays, active: false },
  { name: "Séjours", icon: UserCheck, active: false },
  { name: "Facturation", icon: Receipt, active: false },
  { name: "Clientèle", icon: Users, active: false },
  { name: "Rapports", icon: BarChart3, active: false },
  { name: "Multi-Hôtels", icon: Building2, active: false },
  { name: "Clés API", icon: Key, active: false },
  { name: "Paramètres", icon: Settings, active: false },
];

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
  const [wantsSite, setWantsSite] = useState(false);

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
        "room__id": "CH-201",
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
              href="#modules"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Modules
            </Link>
            <Link
              href="#probleme"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Le Problème
            </Link>
            <Link
              href="#api"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              API
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
          <div className="hidden items-center gap-3 md:flex">
            <ModeToggle />
            <a target="_blanc" href={`${APP_URL}`}>
              <Button variant="ghost">Connexion</Button>
            </a>
            <a target="_blanc" href={`${APP_URL}/register`}>
              <Button>
                Essai gratuit
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>

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

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
            <div className="mx-auto max-w-7xl divide-y divide-border/50 px-4">
              {[
                { href: "#modules", label: "Modules" },
                { href: "#probleme", label: "Le Problème" },
                { href: "#api", label: "Connexion API" },
                { href: "#features", label: "Fonctionnalités" },
                { href: "#pricing", label: "Tarifs" },
                { href: "#testimonials", label: "Témoignages" },
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

      {/* ═══════════════════════════════════════════════
          HERO — Problem-first messaging
      ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-full bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Double badge — logiciel complet + essai gratuit */}
            <div className="mb-6 flex flex-col items-center gap-2">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                <Hotel className="mr-1.5 h-3 w-3 inline" />
                Logiciel de gestion hôtelière
              </Badge>
              {/* <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                <span className="mr-2 inline-block h-2 w-2 animate-pulse bg-success rounded-full" />
                Essai gratuit 30 jours — sans carte bancaire
              </Badge> */}
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-8xl text-balance">
              Vos réservations arrivent sur{" "}
              <span className="line-through text-red-500">WhatsApp</span> ?
              <br />
              <span className="text-accent">Plus jamais.</span>
            </h1>

            {/* Modules tagline */}
            {/* <div className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              {[
                "Réservations",
                "Séjours",
                "Facturation",
                "Rapports",
                "Clientèle",
                "API Site Web",
              ].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-3">
                  <span>{item}</span>
                  {i < arr.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  )}
                </span>
              ))}
            </div> */}

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
              Hôtela est le logiciel de gestion hôtelière{" "}
              <strong className="text-foreground">tout-en-un</strong> conçu pour
              la Côte d'Ivoire. Centralisez vos réservations, gérez chaque
              séjour, automatisez votre facturation, suivez votre clientèle et
              pilotez votre activité depuis votre téléphone, tablette ou
              ordinateur — où que vous soyez.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link href="/register" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-12 w-full px-8 text-base sm:w-auto"
                >
                  Démarrer l'essai gratuit
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
                Voir la démo
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>Essai gratuit 30 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>Installation en 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>Accessible sur tous les appareils</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mt-16">
            <div className="absolute -inset-1 bg-accent/20 blur-2xl" />
            <div className="relative overflow-hidden border border-border bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 bg-destructive/60" />
                  <div className="h-3 w-3 bg-warning/60" />
                  <div className="h-3 w-3 bg-success/60" />
                </div>
                <div className="ml-4 flex-1 bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  app.hotela.app/dashboard
                </div>
                <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Laptop className="h-3.5 w-3.5" />
                    <span>Bureau</span>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <Smartphone className="h-3.5 w-3.5" />
                    <span>Mobile ✓</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tablet className="h-3.5 w-3.5" />
                    <span>Tablette</span>
                  </div>
                </div>
              </div>

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
                      <div className="flex items-center gap-1.5 border border-success/30 bg-success/10 px-2 py-1 text-xs text-success">
                        <span className="h-1.5 w-1.5 animate-pulse bg-success" />
                        API connectée
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
                            2026
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
                          <span>Déc</span>
                        </div>
                      </div>

                      <div className="border border-border bg-card p-4">
                        <p className="text-sm font-medium">
                          Activité en direct
                        </p>
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
                              text: "Facture #F-2025-089 payée",
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

      {/* Stats */}
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

      {/* ═══════════════════════════════════════════════
          MODULES STRIP — Tout ce que gère Hôtela
      ═══════════════════════════════════════════════ */}
      <section id="modules" className="py-12 sm:py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge
              variant="secondary"
              className="mb-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
            >
              <Database className="mr-1.5 h-3.5 w-3.5 inline" />
              Gestion complète
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-balance">
              Un seul logiciel pour gérer{" "}
              <span className="text-accent">toute votre activité</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Hôtela couvre l'intégralité des opérations d'un hôtel — de la
              première réservation jusqu'au rapport de fin de mois. Fini les
              outils disparates et les données éparpillées.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {modules.map((mod, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center gap-3 border ${mod.border} ${mod.bg} p-4 text-center transition-all hover:-translate-y-1 hover:shadow-md`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center ${mod.bg} border ${mod.border} transition-transform group-hover:scale-110`}
                >
                  <mod.icon className={`h-6 w-6 ${mod.color}`} />
                </div>
                <div>
                  <p className={`text-sm font-bold ${mod.color}`}>
                    {mod.label}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Module detail strip */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: CalendarCheck,
                title: "Réservations",
                points: [
                  "Calendrier visuel des disponibilités",
                  "Réservations walk-in, téléphone & site web",
                  "Zéro double-réservation garanti",
                  "Notifications automatiques à l'équipe",
                ],
                color: "text-accent",
                bg: "bg-accent/10",
                border: "border-accent/20",
              },
              {
                icon: BedDouble,
                title: "Séjours",
                points: [
                  "Check-in en moins de 3 minutes",
                  "Suivi des chambres en temps réel",
                  "Prolongations et transferts de chambre",
                  "Services additionnels enregistrés",
                ],
                color: "text-blue-400",
                bg: "bg-blue-400/10",
                border: "border-blue-400/20",
              },
              {
                icon: Receipt,
                title: "Facturation",
                points: [
                  "Factures générées automatiquement",
                  "TVA 18% calculée et intégrée",
                  "Paiements partiels & soldes suivis",
                  "Export PDF et historique complet",
                ],
                color: "text-purple-400",
                bg: "bg-purple-400/10",
                border: "border-purple-400/20",
              },
              {
                icon: BarChart3,
                title: "Rapports & Analytics",
                points: [
                  "Taux d'occupation en temps réel",
                  "Revenus par jour, semaine, mois",
                  "Chambres les plus rentables",
                  "Comparatifs et tendances",
                ],
                color: "text-success",
                bg: "bg-success/10",
                border: "border-success/20",
              },
              {
                icon: Users,
                title: "Clientèle",
                points: [
                  "Fiche complète par client",
                  "Historique de tous les séjours",
                  "Soldes dus et notes internes",
                  "Base de données centralisée",
                ],
                color: "text-warning",
                bg: "bg-warning/10",
                border: "border-warning/20",
              },
              {
                icon: Key,
                title: "API & Connexion Site Web",
                points: [
                  "Réservations depuis votre site web",
                  "Synchronisation instantanée",
                  "Compatible WordPress, Wix, custom",
                  "Inclus dans tous les plans",
                ],
                color: "text-pink-400",
                bg: "bg-pink-400/10",
                border: "border-pink-400/20",
              },
            ].map((mod, index) => (
              <div
                key={index}
                className={`border ${mod.border} bg-card p-5 hover:-translate-y-0.5 transition-transform`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center ${mod.bg}`}
                  >
                    <mod.icon className={`h-5 w-5 ${mod.color}`} />
                  </div>
                  <h3 className={`font-bold text-sm ${mod.color}`}>
                    {mod.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {mod.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PROBLÈME — Avant / Après
      ═══════════════════════════════════════════════ */}
      <section id="probleme" className="py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              variant="destructive"
              className="mb-4 bg-destructive/10 dark:bg-destructive/20 text-destructive  border-destructive/20 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
            >
              <AlertTriangle className="mr-1.5 h-3.5 w-3.5 inline" />
              Le vrai problème des hôteliers aujourd'hui
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Vous gérez votre hôtel à la{" "}
              <span className="text-destructive line-through decoration-2">
                débrouille
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              La plupart des hôteliers en Côte d'Ivoire jonglent encore entre
              WhatsApp, des fichiers Excel et leur mémoire. Réservations
              perdues, factures manuelles, zéro visibilité sur la clientèle et
              aucun rapport fiable. Résultat : des erreurs, des pertes de
              revenus et un manque de contrôle total.
            </p>
          </div>

          {/* Before / After comparison */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* BEFORE */}
            <div className="relative overflow-hidden border border-destructive/30 bg-destructive/5 p-6 sm:p-8">
              <div className="absolute top-4 right-4">
                <Badge className="bg-destructive/10 text-destructive border-destructive/30 text-xs font-bold">
                  AVANT HÔTELA
                </Badge>
              </div>
              <div className="flex flex-col gap-5 mt-6">
                {[
                  {
                    icon: MessageCircle,
                    title: "Réservations sur WhatsApp",
                    desc: "Un client envoie un message, vous répondez, vous notez sur un carnet. Parfois vous oubliez. Parfois deux clients ont la même chambre.",
                    color: "text-destructive",
                    bg: "bg-destructive/10",
                  },
                  {
                    icon: FileText,
                    title: "Facturation manuelle et chronophage",
                    desc: "Chaque facture est faite à la main ou sur Excel. TVA oubliée, erreurs de calcul, clients qui partent sans payer — et aucun historique propre.",
                    color: "text-destructive",
                    bg: "bg-destructive/10",
                  },
                  {
                    icon: Eye,
                    title: "Zéro visibilité à distance",
                    desc: "Vous n'êtes pas sur place ? Impossible de savoir en temps réel ce qui se passe. Vous appelez la réception pour avoir des infos.",
                    color: "text-destructive",
                    bg: "bg-destructive/10",
                  },
                  {
                    icon: Users,
                    title: "Aucune gestion de la clientèle",
                    desc: "Vous ne savez pas qui sont vos clients fidèles, qui vous doit de l'argent, ni qui a séjourné combien de fois. Chaque client repart comme un inconnu.",
                    color: "text-destructive",
                    bg: "bg-destructive/10",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Pas de rapports fiables",
                    desc: "En fin de mois, difficile de savoir exactement combien vous avez gagné, quelles chambres tournent le mieux, ou où vont vos dépenses.",
                    color: "text-destructive",
                    bg: "bg-destructive/10",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center ${item.bg}`}
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AFTER */}
            <div className="relative overflow-hidden border border-success/30 bg-success/5 p-6 sm:p-8">
              <div className="absolute top-4 right-4">
                <Badge className="bg-success/10 text-success border-success/30 text-xs font-bold">
                  AVEC HÔTELA ✓
                </Badge>
              </div>
              <div className="flex flex-col gap-5 mt-6">
                {[
                  {
                    icon: CheckCheck,
                    title: "Toutes les réservations centralisées",
                    desc: "Site web, appel téléphonique, walk-in — chaque réservation arrive dans le même tableau de bord. Une seule source de vérité, zéro doublon.",
                    color: "text-success",
                    bg: "bg-success/10",
                  },
                  {
                    icon: Receipt,
                    title: "Facturation automatique en 1 clic",
                    desc: "Hôtela génère la facture au check-out avec TVA 18%, enregistre les paiements partiels et suit les soldes dus. Export PDF immédiat.",
                    color: "text-success",
                    bg: "bg-success/10",
                  },
                  {
                    icon: Globe2,
                    title: "Contrôle total depuis n'importe où",
                    desc: "Téléphone, tablette, ordinateur — accédez à votre tableau de bord depuis Abidjan, Paris ou votre véhicule. Votre hôtel en temps réel.",
                    color: "text-success",
                    bg: "bg-success/10",
                  },
                  {
                    icon: UserCheck,
                    title: "Base clients complète et exploitable",
                    desc: "Chaque client a sa fiche : historique des séjours, montants dépensés, soldes, préférences. Vous connaissez vraiment vos clients.",
                    color: "text-success",
                    bg: "bg-success/10",
                  },
                  {
                    icon: TrendingUp,
                    title: "Rapports et décisions basés sur les données",
                    desc: "Revenus du jour, taux d'occupation, chambres les plus rentables — tout est calculé automatiquement. Vous pilotez avec des vrais chiffres.",
                    color: "text-success",
                    bg: "bg-success/10",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center ${item.bg}`}
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Switch CTA */}
          <div className="mt-8 border border-accent/20 bg-accent/5 p-5 sm:p-6 text-center">
            <p className="text-base font-semibold sm:text-lg">
              Vous utilisez un autre logiciel ? La migration prend moins d'une
              journée.
            </p>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Notre équipe s'occupe de tout : paramétrage des chambres, import
              de vos données, formation de votre équipe. Vous repartez
              opérationnel en 24h maximum.
            </p>
            <Link href="/register" className="inline-block mt-4">
              <Button size="lg" className="h-12 px-8">
                Migrer vers Hôtela maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ACCESSIBLE PARTOUT — Any Device, Anywhere
      ═══════════════════════════════════════════════ */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Globe2 className="mr-1.5 h-3.5 w-3.5 inline" />
                Accès universel
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Votre hôtel dans votre poche.{" "}
                <span className="text-accent">Où que vous soyez.</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Hôtela est une application web accessible sur{" "}
                <strong className="text-foreground">tous les appareils</strong>{" "}
                — aucune installation requise. Réservations, séjours,
                facturation, rapports et clientèle : tout est disponible depuis
                votre navigateur, partout dans le monde.
              </p>

              <div className="mt-8 flex flex-col gap-5">
                {[
                  {
                    icon: Smartphone,
                    title: "Sur votre téléphone",
                    description:
                      "Vérifiez les check-ins du jour, l'occupation en temps réel, les factures en attente et l'activité de votre équipe depuis votre mobile.",
                    badge: "Android & iOS",
                    color: "text-accent",
                    bg: "bg-accent/10",
                  },
                  {
                    icon: Laptop,
                    title: "Sur votre ordinateur",
                    description:
                      "Interface complète avec rapports détaillés, gestion multi-hôtels, base clients, comptabilité et toutes les fonctionnalités avancées.",
                    badge: "Windows & Mac",
                    color: "text-blue-400",
                    bg: "bg-blue-400/10",
                  },
                  {
                    icon: Tablet,
                    title: "Sur tablette à la réception",
                    description:
                      "Interface optimisée pour la réception : check-in/out rapide, réservations du jour, facturation et fiche client en un coup d'œil.",
                    badge: "Parfait pour la réception",
                    color: "text-purple-400",
                    bg: "bg-purple-400/10",
                  },
                  {
                    icon: Eye,
                    title: "Le propriétaire voit tout",
                    description:
                      "Revenus en temps réel, taux d'occupation, activité de vos réceptionnistes, soldes clients — vous avez un œil sur tout, même à distance.",
                    badge: "Contrôle total",
                    color: "text-success",
                    bg: "bg-success/10",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center ${item.bg} transition-transform group-hover:scale-110`}
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <span
                          className={`text-xs px-2 py-0.5 ${item.bg} ${item.color} font-medium`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual: Multi-device mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/5 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  {/* Mobile card */}
                  <div className="border border-border bg-card p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Smartphone className="h-4 w-4 text-accent" />
                      <span className="text-xs font-semibold">Vue Mobile</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          Occupation
                        </span>
                        <span className="font-bold text-accent">78%</span>
                      </div>
                      <div className="h-2 bg-muted">
                        <div
                          className="h-2 bg-accent"
                          style={{ width: "78%" }}
                        />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-success mt-2">
                        <span className="h-1.5 w-1.5 bg-success animate-pulse" />
                        En direct
                      </div>
                    </div>
                  </div>
                  {/* Owner card */}
                  <div className="border border-success/30 bg-success/5 p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4 text-success" />
                      <span className="text-xs font-semibold text-success">
                        Propriétaire
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Voir son hôtel depuis n'importe où dans le monde
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs font-medium text-success">
                      <Globe2 className="h-3 w-3" />
                      Accès global
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  {/* Tablet card */}
                  <div className="border border-border bg-card p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Tablet className="h-4 w-4 text-purple-400" />
                      <span className="text-xs font-semibold">Réception</span>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        "CH 101 — Libre",
                        "CH 102 — Occupée",
                        "CH 103 — Check-out",
                      ].map((room, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs"
                        >
                          <span
                            className={`h-2 w-2 ${i === 0 ? "bg-success" : i === 1 ? "bg-accent" : "bg-warning"}`}
                          />
                          <span className="text-muted-foreground">{room}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* No install card */}
                  <div className="border border-border bg-card p-4 shadow-lg">
                    <div className="text-2xl font-bold text-foreground">0</div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Installation requise — fonctionne dans le navigateur
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-accent font-medium">
                      <CheckCircle2 className="h-3 w-3" />
                      Cloud 100%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          API INTEGRATION SECTION
      ═══════════════════════════════════════════════ */}
      <section
        id="api"
        className="relative overflow-hidden py-16 sm:py-20 lg:py-32"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-accent/5 blur-3xl rounded-full sm:h-[800px] sm:w-[800px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm">
              <Zap className="mr-1 h-3 w-3 inline sm:h-3.5 sm:w-3.5" />
              Fonctionnalité clé
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Fini les réservations perdues{" "}
              <span className="text-accent">dans votre boite mail</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base lg:text-lg">
              Quand un client réserve sur votre site, cette réservation ne doit{" "}
              <strong className="text-foreground">jamais</strong> finir dans un
              email ou un WhatsApp. Elle doit arriver directement dans le
              tableau de bord de votre équipe — et déclencher automatiquement la
              création du séjour et la préparation de la facture.
            </p>
          </div>

          {/* Problem → Solution visual */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center">
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
            <div className="border border-success/20 bg-success/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-success mb-3">
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
                      className={`h-3.5 w-3.5 ${i > 0 ? "text-success" : "text-muted-foreground"}`}
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

          {/* Flow steps */}
          <div className="relative mt-10 sm:mt-14">
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

          {/* Code block + Benefits */}
          <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-2 lg:items-start">
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
                <div className="overflow-x-auto p-3 sm:p-4 max-w-xs sm:max-w-full">
                  <pre className="text-[11px] font-mono leading-relaxed text-muted-foreground whitespace-pre sm:text-xs">
                    <CodeBlock
                      snippet={{
                        curl: `curl https://api.hotela.app/v1/public/rooms \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -H "x-api-secret: YOUR_API_SECRET"`,
                      }}
                      defaultLang="curl"
                    />
                  </pre>
                </div>
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

            {/* Benefits */}
            <div className="flex flex-col gap-4 sm:gap-5 max-w-sm sm:max-w-full">
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Pourquoi connecter votre site à Hôtela ?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  WordPress, Wix ou site sur mesure — l'API Hôtela s'y branche
                  facilement. Votre site continue comme avant, sauf que les
                  réservations arrivent désormais directement dans Hôtela,
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
                  color: "text-warning",
                  bg: "bg-warning/10",
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
                  color: "text-success",
                  bg: "bg-success/10",
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

              <Link href="/docs/api" className="mt-1">
                <Button variant="outline" className="w-full gap-2 sm:w-auto">
                  <Code2 className="h-3.5 w-3.5" />
                  Lire la documentation API
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
                    Plus de ressaisie. Plus d'emails perdus. Plus de WhatsApp.
                    Vos réceptionnistes se concentrent sur l'accueil.
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

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Fonctionnalités
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Tout ce dont votre hôtel a besoin,{" "}
              <span className="text-accent">dans un seul logiciel</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Hôtela remplace vos fichiers Excel, votre carnet de réservations,
              vos messages WhatsApp, votre logiciel de facturation et votre
              suivi client — tout en un, conçu pour les hôteliers ivoiriens.
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

      {/* Why Switch / Why Choose Us */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="mb-4">
                Pourquoi changer ?
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Vous avez déjà un logiciel ?{" "}
                <span className="text-accent">
                  Voici pourquoi des hôteliers migrent vers Hôtela.
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La plupart des logiciels hôteliers disponibles ne sont pas
                pensés pour la réalité ivoirienne : pas de Mobile Money, pas de
                connexion au site web, pas de gestion de clientèle, pas d'accès
                mobile, et un support inexistant. Hôtela a été conçu ici, pour
                ici.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {[
                  {
                    icon: Database,
                    title: "Logiciel complet, pas un simple planning",
                    description:
                      "Réservations, séjours, facturation, rapports, clientèle et API — tout est intégré. Un seul outil, une seule source de vérité.",
                  },
                  {
                    icon: Smartphone,
                    title: "Conçu pour le mobile",
                    description:
                      "Interface optimisée sur téléphone. Votre équipe à la réception travaille depuis n'importe quel appareil, sans installation.",
                  },
                  {
                    icon: Link2,
                    title: "Connexion site web en standard",
                    description:
                      "Tous les autres logiciels vous font payer un module d'intégration. Chez nous, c'est inclus dans tous les plans.",
                  },
                  {
                    icon: Clock,
                    title: "Support local à Abidjan",
                    description:
                      "Une équipe basée en Côte d'Ivoire, disponible pour vous accompagner dans votre langue et vos réalités.",
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
                      Migration & mise en service
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <div className="border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-accent">6+</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Modules intégrés dans un seul logiciel
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

      {/* ═══════════════════════════════════════════════
          PRICING SECTION
      ═══════════════════════════════════════════════ */}
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
              jours, la gestion complète des séjours, la facturation automatique
              et la clé API pour connecter votre site.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <span
                className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}
              >
                Mensuel
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative h-7 w-14 transition-colors rounded-full ${isAnnual ? "bg-accent" : "bg-muted-foreground/30"}`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 bg-card shadow-md transition-transform rounded-full ${isAnnual ? "left-8" : "left-1"}`}
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

          {/* ═══════════════════════════════════════════════
              INSTALLATION FEE BANNER — WITH SWITCH
          ═══════════════════════════════════════════════ */}
          <div className="mt-8 sm:mt-10">
            <div className="relative overflow-hidden border border-warning/30 bg-warning/5 p-5 sm:p-6">
              <div
                className="absolute top-0 right-0 h-16 w-16 bg-warning/10"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />

              {/* Switch: avec ou sans site */}
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-warning/20 pb-5">
                <div>
                  <p className="text-sm font-semibold">
                    Vous avez déjà un site web ?
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Choisissez votre situation pour voir le bon tarif
                    d'installation.
                  </p>
                </div>
                <div className="flex items-center gap-1 border border-warning/30 bg-background overflow-hidden self-start sm:self-auto">
                  <button
                    onClick={() => setWantsSite(false)}
                    className={`px-3 py-2 text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                      !wantsSite
                        ? "bg-warning text-warning-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    J'ai déjà un site
                  </button>
                  <button
                    onClick={() => setWantsSite(true)}
                    className={`px-3 py-2 text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                      wantsSite
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Globe className="h-3.5 w-3.5" />
                    Je veux un site
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                {/* Left: Icon + Title + Description */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center border ${wantsSite ? "bg-accent/10 border-accent/20" : "bg-warning/10 border-warning/20"}`}
                  >
                    {wantsSite ? (
                      <Globe className="h-6 w-6 text-accent" />
                    ) : (
                      <Wrench className="h-6 w-6 text-warning" />
                    )}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold sm:text-lg">
                        {wantsSite
                          ? "Création de site + Installation Hôtela"
                          : "Frais d'installation unique"}
                      </h3>
                      <Badge
                        className={`text-xs font-semibold ${wantsSite ? "bg-accent/10 text-accent border-accent/30" : "bg-warning/10 text-warning border-warning/30"}`}
                      >
                        {wantsSite ? "Site inclus" : "Une seule fois"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {wantsSite
                        ? "Vous n'avez pas encore de site web ? Nous créons votre site hôtel professionnel ET l'intégrons directement à Hôtela."
                        : "En plus de votre abonnement, des frais uniques d'installation sont facturés au démarrage."}
                    </p>

                    {/* What's included */}
                    <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {(wantsSite
                        ? [
                            {
                              label:
                                "Création de votre site hôtel professionnel",
                            },
                            {
                              label:
                                "Formulaire de réservation en ligne intégré",
                            },
                            {
                              label:
                                "Connexion API Hôtela incluse dès le départ",
                            },
                            {
                              label:
                                "Paramétrage des chambres & comptes utilisateurs",
                            },
                            {
                              label: "Mise en service complète en 72h maximum",
                            },
                            {
                              label:
                                "Formation de votre équipe à la prise en main",
                            },
                          ]
                        : [
                            {
                              label:
                                "Paramétrage des chambres & types de chambres",
                            },
                            { label: "Création des comptes utilisateurs" },
                            { label: "Connexion avec votre site web existant" },
                            { label: "Mise en service en 24h maximum" },
                          ]
                      ).map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" />
                          <span className="text-muted-foreground">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {wantsSite && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs">
                          <Globe className="h-3 w-3 text-accent" />
                          <span className="text-accent font-medium">
                            100 000 FCFA
                          </span>
                          <span className="text-muted-foreground">
                            création du site
                          </span>
                        </div>
                        <span className="flex items-center text-muted-foreground text-xs">
                          +
                        </span>
                        <div className="flex items-center gap-1.5 border border-warning/20 bg-warning/5 px-3 py-1.5 text-xs">
                          <Wrench className="h-3 w-3 text-warning" />
                          <span className="text-warning font-medium">
                            50 000 FCFA
                          </span>
                          <span className="text-muted-foreground">
                            installation Hôtela
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Price */}
                <div className="flex shrink-0 flex-col items-start gap-1 border-t border-warning/20 pt-4 sm:items-end sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {wantsSite ? "Total installation" : "Frais d'installation"}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-3xl font-bold sm:text-4xl ${wantsSite ? "text-accent" : "text-foreground"}`}
                    >
                      {wantsSite ? "150 000" : "50 000"}
                    </span>
                    <span className="text-lg font-semibold text-muted-foreground">
                      FCFA
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Paiement unique — non récurrent
                  </p>
                  {wantsSite ? (
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-accent font-medium">
                      <Globe className="h-3.5 w-3.5" />
                      Site + Hôtela opérationnels en 72h
                    </div>
                  ) : (
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-success font-medium">
                      <Timer className="h-3.5 w-3.5" />
                      Installation en 24h max
                    </div>
                  )}
                  <Link href="/register" className="mt-3 w-full sm:w-auto">
                    <Button
                      className={`w-full text-xs sm:w-auto ${wantsSite ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
                      variant={wantsSite ? "default" : "outline"}
                    >
                      {wantsSite
                        ? "Créer mon site + Hôtela"
                        : "Démarrer l'installation"}
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
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
                  <tr className="border-t border-border bg-warning/5">
                    <td className="px-6 py-3 text-sm font-medium text-warning">
                      Frais d'installation (unique)
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-semibold text-warning">
                      50 000 F
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-semibold text-warning border-x border-accent/20 bg-warning/5">
                      50 000 F
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-semibold text-warning">
                      50 000 F
                    </td>
                  </tr>
                  {[
                    {
                      label: "Check-in / Check-out",
                      values: ["--", "Complet", "Complet"],
                    },
                    {
                      label: "Tableau de bord",
                      values: ["Simplifié", "Avancé", "Expert"],
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
                        "Illimité",
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
                      label: "Gestion Clientèle",
                      values: ["Basique", "Complète", "Avancée"],
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
              Ce que disent les hôteliers qui ont fait le changement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Ils géraient leur hôtel avec WhatsApp, des fichiers Excel ou un
              vieux logiciel. Voici ce qu'ils vivent aujourd'hui avec Hôtela.
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

      {/* Payment Methods */}
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

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-primary px-6 py-16 text-center sm:px-12 lg:px-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.2_0.01_75/0.3)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.2_0.01_75/0.3)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="relative">
              <Badge className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 text-xs font-bold uppercase tracking-widest">
                Logiciel de gestion hôtelière
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Réservations, séjours, facturation, rapports, clientèle.
                <br />
                <span className="opacity-80">Tout ça, dans un seul outil.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Essayez Hôtela gratuitement pendant 30 jours. Centralisez vos
                réservations, gérez vos séjours, automatisez votre facturation
                et pilotez votre hôtel depuis n'importe où. Sans engagement,
                sans carte bancaire.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-12 px-8 text-base"
                  >
                    Démarrer l'essai gratuit — 30 jours
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    Contacter l'équipe
                  </Button>
                </Link>
              </div>
              {/* Modules reminder */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-primary-foreground/60">
                {[
                  "Réservations",
                  "Séjours",
                  "Facturation auto",
                  "Rapports",
                  "Clientèle",
                  "API Site Web",
                ].map((m, i, arr) => (
                  <span key={m} className="flex items-center gap-4">
                    <span>{m}</span>
                    {i < arr.length - 1 && (
                      <span className="h-1 w-1 rounded-full bg-primary-foreground/30" />
                    )}
                  </span>
                ))}
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
                Le logiciel de gestion hôtelière complet conçu pour la Côte
                d'Ivoire. Réservations, séjours, facturation, rapports,
                clientèle et API.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Produit</h4>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#modules"
                    className="hover:text-foreground transition-colors"
                  >
                    Modules
                  </a>
                </li>
                <li>
                  <a
                    href="#probleme"
                    className="hover:text-foreground transition-colors"
                  >
                    Le Problème
                  </a>
                </li>
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
                    À propos
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
                <li>+225 05 02 93 99 14</li>
                <li>Abidjan, Côte d'Ivoire</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Hôtela. Tous droits réservés.</p>
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
                      Vidéo de démonstration
                    </p>
                    <p className="mt-2 text-sm text-primary-foreground/70 text-center max-w-md">
                      Pour ajouter votre vidéo YouTube, modifiez la constante{" "}
                      <code className="bg-primary-foreground/10 px-2 py-0.5">
                        YOUTUBE_VIDEO_ID
                      </code>{" "}
                      en haut du fichier avec l'ID de votre vidéo.
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
