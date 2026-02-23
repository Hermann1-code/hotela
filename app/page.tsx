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
  Globe,
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
  Palette,
  Search,
  Zap,
  CreditCard,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";

const websiteFeatures = [
  {
    icon: Globe,
    title: "Votre vitrine en ligne",
    description:
      "Un site web professionnel à votre image, avec votre logo, vos couleurs et vos photos.",
  },
  {
    icon: CalendarCheck,
    title: "Réservation en ligne 24/7",
    description:
      "Vos clients peuvent réserver directement depuis votre site, même en dehors des heures d'ouverture.",
  },
  {
    icon: Palette,
    title: "Design personnalisable",
    description:
      "Plusieurs templates modernes et responsive, adaptés à tous les écrans.",
  },
  {
    icon: Search,
    title: "Référencement optimisé",
    description:
      "Votre hôtel visible sur Google grâce à un SEO optimisé pour attirer plus de clients.",
  },
  {
    icon: Zap,
    title: "Mise à jour instantanée",
    description:
      "Tarifs, disponibilités et photos synchronisés automatiquement avec votre système de gestion.",
  },
  {
    icon: Shield,
    title: "Hébergement sécurisé",
    description:
      "SSL inclus, sauvegarde automatique et protection contre les cyberattaques.",
  },
];

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
      "Gérez plusieurs hôtels depuis une seule interface. Vue consolidée et rapports par établissement.",
  },
  {
    icon: Users,
    title: "Gestion des équipes",
    description:
      "Attribuez des rôles ( Manager, Réceptionniste) et suivez l'historique des opérations.",
  },
  {
    icon: Globe,
    title: "Site web inclus",
    description:
      "Créez votre site vitrine avec système de réservation en ligne intégré. Sans frais supplémentaires.",
  },
];

const plans = [
  {
    name: "Essentiel",
    monthlyPrice: 15000,
    period: "/mois",
    description: "Idéal pour les petits hôtels",
    features: [
      "Gestion des chambres",
      "Gestion des réservations",
      "Facturation avec TVA",
      "1 utilisateur",
      "Support par email",
    ],
    cta: "Essai gratuit de 30 jours",
    popular: false,
  },
  {
    name: "Business",
    monthlyPrice: 25000,
    period: "/mois",
    description: "Pour les hôtels en croissance",
    features: [
      "Gestion des chambres",
      "Multi-établissements (3)",
      "Rapports avancés",
      "5 utilisateurs",
      "Support prioritaire",
      "Export PDF/CSV",
    ],
    cta: "Essai gratuit de 30 jours",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    period: "",
    description: "Solution sur mesure pour les grandes structures",
    isCustom: true,
    features: [
      "Système entièrement personnalisé",
      "Multi-établissements illimités",
      "Intégrations sur mesure",
      "Utilisateurs illimités",
      "Support dédié 24/7",
      "API personnalisée",
      "Formation sur site incluse",
      "Accompagnement personnalisé",
      "SLA garanti",
    ],
    cta: "Demander un devis",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Kouamé Yao",
    role: "Directeur, Hôtel Ivoire Palace",
    location: "Abidjan",
    content:
      "Depuis que nous utilisons Gesko, nous avons réduit nos erreurs de facturation de 90%. L'interface est intuitive et mes réceptionnistes l'ont adopté en une journée.",
    rating: 5,
  },
  {
    name: "Fatou Diallo",
    role: "Gérante, Résidence Les Palmiers",
    location: "Yamoussoukro",
    content:
      "Le support client est exceptionnel. Ils m'ont aidé à migrer toutes mes données en 48h. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Jean-Marc Koffi",
    role: "Propriétaire, Hôtel du Lac",
    location: "San-Pédro",
    content:
      "Les rapports analytiques m'ont permis d'identifier mes chambres les plus rentables. Mon chiffre d'affaires a augmenté de 25% en 6 mois.",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Hôtels utilisateurs" },
  { value: "10K+", label: "Réservations/mois" },
  { value: "99.9%", label: "Disponibilité" },
  { value: "4.9/5", label: "Satisfaction client" },
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
  { name: "Site Web", icon: Globe, active: false },
  { name: "Paramètres", icon: Settings, active: false },
];

const YOUTUBE_VIDEO_ID = "eLxPGQ0P3AM";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "rooms" | "reservations"
  >("dashboard");
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  const getPrice = (monthlyPrice: number) => {
    if (isAnnual) {
      const annualPrice = monthlyPrice * 12 * 0.85; // 15% de réduction
      return Math.round(annualPrice).toLocaleString("fr-FR");
    }
    return monthlyPrice.toLocaleString("fr-FR");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
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
          <div className="flex items-center gap-3">
            <ModeToggle />
            <Link href="http://localhost:3000/" className="hidden sm:block">
              <Button variant="ghost">Connexion</Button>
            </Link>
            <Link href="http://localhost:3000/register">
              <Button>
                Essai gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow delay-300" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-sm animate-fade-in-down"
            >
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-success" />
              +50 nouveaux hôtels ce mois
            </Badge>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance animate-fade-in-up delay-100">
              Gérez votre hôtel comme un{" "}
              <span className="dark:text-primary text-accent ">
                professionnel
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty animate-fade-in-up delay-200">
              Le logiciel de gestion hôtelière N°1 en Côte d'Ivoire.
              Réservations, facturation, rapports — tout en un seul endroit.
              Payez avec Mobile Money.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up delay-300">
              <Link href="/register">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base transition-transform hover:scale-105"
                >
                  Essayer pendant 30 jours
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base bg-transparent transition-transform hover:scale-105"
                onClick={() => setShowVideoModal(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Voir la démo
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground animate-fade-in-up delay-400">
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

          <div className="relative mt-16 animate-scale-in delay-500">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl animate-pulse-glow" />
            <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-warning/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                  app.gesko.com/dashboard
                </div>
              </div>

              {/* Dashboard Layout with Sidebar */}
              <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="hidden w-56 flex-shrink-0 flex-col border-r border-border bg-sidebar md:flex">
                  {/* Logo area */}
                  <div className="flex h-14 items-center gap-2 border-b border-sidebar-border px-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                      <Hotel className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-sidebar-foreground">
                      Gesko
                    </span>
                  </div>

                  {/* Hotel Selector */}
                  <div className="border-b border-sidebar-border p-3">
                    <div className="flex w-full items-center justify-between rounded-md bg-sidebar-accent px-3 py-2 text-sm">
                      <div className="flex items-center gap-2 truncate">
                        <Building2 className="h-4 w-4 shrink-0 text-sidebar-accent-foreground" />
                        <span className="truncate text-sidebar-accent-foreground">
                          Hôtel Ivoire Palace
                        </span>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 text-sidebar-accent-foreground/50" />
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex-1 overflow-y-auto px-3 py-4">
                    <nav className="flex flex-col gap-1">
                      {sidebarNavigation.map((item) => (
                        <div
                          key={item.name}
                          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
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

                  {/* Logout */}
                  <div className="border-t border-sidebar-border p-3">
                    <div className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-sidebar-foreground/70">
                      <LogOut className="h-4 w-4" />
                      Déconnexion
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-1 flex-col overflow-hidden">
                  {/* Header */}
                  <div className="flex h-14 items-center justify-between border-b border-border bg-background px-4">
                    <div>
                      <h2 className="text-sm font-semibold">Dashboard</h2>
                      <p className="text-xs text-muted-foreground">
                        Bienvenue ! Voici un aperçu de votre établissement.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/20" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 overflow-y-auto bg-background p-4">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                      {[
                        {
                          label: "Taux d'occupation",
                          value: "78%",
                          change: "+5%",
                          color: "text-primary",
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
                          color: "text-primary",
                        },
                        {
                          label: "Factures en attente",
                          value: "5",
                          change: "-2",
                          color: "text-warning",
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-border bg-card p-3"
                        >
                          <p className="text-xs text-muted-foreground">
                            {stat.label}
                          </p>
                          <div className="mt-1 flex items-end justify-between">
                            <p className={`text-xl font-bold ${stat.color}`}>
                              {stat.value}
                            </p>
                            <span
                              className={`text-xs ${
                                stat.change.startsWith("+")
                                  ? "text-success"
                                  : "text-warning"
                              }`}
                            >
                              {stat.change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Charts Row */}
                    <div className="mt-4 grid gap-3 lg:grid-cols-3">
                      {/* Revenue Chart */}
                      <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">
                            Revenus mensuels
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            2024
                          </Badge>
                        </div>
                        <div className="mt-4 flex h-28 items-end gap-1.5">
                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                            (h, i) => (
                              <div
                                key={i}
                                className={`flex-1 rounded-t transition-all ${
                                  i === 11 ? "bg-primary" : "bg-primary/40"
                                }`}
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

                      {/* Activity Feed */}
                      <div className="rounded-lg border border-border bg-card p-4">
                        <p className="text-sm font-medium">Activité du jour</p>
                        <div className="mt-3 space-y-3">
                          {[
                            {
                              text: "Check-in Chambre 201",
                              time: "Il y a 5 min",
                              type: "checkin",
                            },
                            {
                              text: "Facture #F-2024-089 payée",
                              time: "Il y a 12 min",
                              type: "payment",
                            },
                            {
                              text: "Nouvelle réservation",
                              time: "Il y a 25 min",
                              type: "reservation",
                            },
                            {
                              text: "Check-out Chambre 105",
                              time: "Il y a 1h",
                              type: "checkout",
                            },
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div
                                className={`mt-1 h-2 w-2 rounded-full ${
                                  item.type === "checkin"
                                    ? "bg-success"
                                    : item.type === "payment"
                                      ? "bg-primary"
                                      : item.type === "reservation"
                                        ? "bg-accent"
                                        : "bg-warning"
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

                    {/* Room Status Grid */}
                    <div className="mt-4 rounded-lg border border-border bg-card p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">
                          Statut des chambres
                        </p>
                        <div className="flex gap-3 text-xs">
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-success" />
                            <span className="text-muted-foreground">Libre</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">
                              Occupée
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-warning" />
                            <span className="text-muted-foreground">
                              Maintenance
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-8 gap-2 lg:grid-cols-12">
                        {Array.from({ length: 24 }).map((_, i) => {
                          const statuses = [
                            "available",
                            "occupied",
                            "occupied",
                            "maintenance",
                            "available",
                            "occupied",
                            "available",
                            "occupied",
                          ];
                          const status = statuses[i % statuses.length];
                          return (
                            <div
                              key={i}
                              className={`flex aspect-square items-center justify-center rounded-md border text-xs font-medium ${
                                status === "available"
                                  ? "border-success/30 bg-success/10 text-success"
                                  : status === "occupied"
                                    ? "border-primary/30 bg-primary/10 text-primary"
                                    : "border-warning/30 bg-warning/10 text-warning"
                              }`}
                            >
                              {101 + i}
                            </div>
                          );
                        })}
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
      <section className="border-y border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-3xl font-bold text-primary lg:text-4xl">
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

      <section id="demo" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Démonstration
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Découvrez Gesko en action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Regardez notre vidéo de démonstration pour voir comment Gesko peut
              transformer la gestion de votre hôtel en quelques minutes.
            </p>
          </div>

          {/* Video Player Container */}
          <div className="relative mt-12 mx-auto max-w-4xl">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              <div className="relative aspect-video bg-muted">
                {YOUTUBE_VIDEO_ID ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                    title="Démonstration Gesko"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                    onClick={() => setShowVideoModal(true)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sidebar via-sidebar/90 to-primary/20">
                      <div className="absolute inset-0 opacity-50">
                        <div className="h-full w-full p-8">
                          <div className="grid h-full grid-cols-3 gap-4">
                            <div className="col-span-2 space-y-4">
                              <div className="h-16 rounded-lg bg-primary/20" />
                              <div className="h-32 rounded-lg bg-primary/10" />
                            </div>
                            <div className="space-y-4">
                              <div className="h-24 rounded-lg bg-primary/15" />
                              <div className="h-24 rounded-lg bg-primary/15" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg transition-transform group-hover:scale-110">
                        <Play
                          className="h-8 w-8 text-primary-foreground ml-1"
                          fill="currentColor"
                        />
                      </div>
                      <span className="text-lg font-medium text-white">
                        Vidéo bientôt disponible
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Video info bar */}
              <div className="flex items-center justify-between border-t border-border bg-card px-6 py-4">
                <div>
                  <p className="font-medium">Présentation complète de Gesko</p>
                  <p className="text-sm text-muted-foreground">
                    Durée: 3 minutes • Mise à jour: Décembre 2024
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Play className="h-4 w-4" />
                    <span>12.5K vues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video highlights */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                time: "0:00",
                title: "Présentation du dashboard",
                description:
                  "Vue d'ensemble des statistiques et indicateurs clés",
              },
              {
                time: "1:15",
                title: "Gestion des réservations",
                description:
                  "Comment créer et gérer vos réservations en quelques clics",
              },
              {
                time: "2:30",
                title: "Facturation automatique",
                description:
                  "Génération de factures avec TVA et paiement Mobile Money",
              },
            ].map((chapter, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:shadow-lg"
                onClick={() => setShowVideoModal(true)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-16 items-center justify-center rounded-md bg-primary/10 text-sm font-mono text-primary">
                      {chapter.time}
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
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
      <section
        id="features"
        className="border-t border-border bg-muted/30 py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 animate-fade-in-down">
              Fonctionnalités
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance animate-fade-in-up delay-100">
              Tout ce dont vous avez besoin pour gérer votre hôtel
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground animate-fade-in-up delay-200">
              Une solution complète conçue spécifiquement pour les hôteliers
              ivoiriens. Simple, puissante, et adaptée à vos besoins.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Globe className="mr-2 h-3 w-3" />
                Site Web Inclus
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Un site web professionnel pour votre hôtel,{" "}
                <span className="text-primary">sans frais supplémentaires</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Avec Gesko, vous ne gérez pas seulement votre hôtel — vous
                obtenez aussi un site web moderne et professionnel pour attirer
                plus de clients. Réservations en ligne, galerie photos, et
                informations sur vos services, tout est inclus.
              </p>

              <div className="mt-8 space-y-4">
                {websiteFeatures.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/register">
                  <Button>
                    Créer mon site gratuitement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-warning/60" />
                    <div className="h-3 w-3 rounded-full bg-success/60" />
                  </div>
                  <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                    votre-hotel.gesko.app
                  </div>
                </div>

                {/* Website Preview */}
                <div className="p-4">
                  {/* Hero */}
                  <div className="relative h-32 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">
                          Votre nom d'hôtel
                        </p>
                        <p className="font-bold text-foreground">
                          Hôtel Ivoire Palace
                        </p>
                        <div className="mt-2 flex justify-center gap-2">
                          <div className="h-6 w-20 rounded bg-primary text-xs flex items-center justify-center text-primary-foreground">
                            Réserver
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rooms Preview */}
                  <div className="mt-4">
                    <p className="text-xs font-medium mb-2">Nos chambres</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="aspect-square rounded bg-muted flex items-center justify-center"
                        >
                          <BedDouble className="h-4 w-4 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-border p-2">
                      <p className="text-xs font-medium">À partir de</p>
                      <p className="text-sm font-bold text-primary">
                        25,000 FCFA
                      </p>
                    </div>
                    <div className="rounded-lg border border-border p-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-warning text-warning" />
                        <span className="text-sm font-bold">4.8</span>
                      </div>
                      <p className="text-xs text-muted-foreground">120 avis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Website Features */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {websiteFeatures.slice(3).map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-border py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="mb-4">
                Pourquoi nous choisir
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Conçu pour les hôteliers africains
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nous comprenons les défis uniques de l'industrie hôtelière en
                Côte d'Ivoire. C'est pourquoi nous avons créé une solution
                adaptée à vos réalités.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Paiement Mobile Money",
                    description:
                      "Acceptez Orange Money, MTN Money, et Wave directement dans l'application.",
                  },
                  {
                    icon: Shield,
                    title: "Sécurité & Fiabilité",
                    description:
                      "Vos données sont protégées et sauvegardées automatiquement chaque jour.",
                  },
                  {
                    icon: Clock,
                    title: "Support local 24/7",
                    description:
                      "Une équipe basée à Abidjan disponible pour vous accompagner à tout moment.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Taux de satisfaction
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-success">24h</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Temps de réponse moyen
                    </p>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-primary">150+</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Hôtels partenaires
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-accent">5 ans</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      D'expérience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 animate-fade-in-down">
              Tarifs
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance animate-fade-in-up delay-100">
              Des tarifs adaptés à votre établissement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground animate-fade-in-up delay-200">
              Choisissez le plan qui correspond à vos besoins. Tous les plans
              incluent un essai gratuit de 30 jours.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in-up delay-300">
              <span
                className={`text-sm font-medium ${
                  !isAnnual ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Mensuel
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative h-7 w-14 rounded-full transition-colors ${
                  isAnnual ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${
                    isAnnual ? "left-8" : "left-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  isAnnual ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Annuel
              </span>
              {isAnnual && (
                <Badge className="bg-success/10 text-success border-success/20 animate-scale-in">
                  -15%
                </Badge>
              )}
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                style={{ animationDelay: `${400 + index * 150}ms` }}
                className={`relative overflow-hidden animate-fade-in-up hover:-translate-y-2 transition-transform ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Populaire
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-4">
                    {plan.isCustom ? (
                      <span className="text-4xl font-bold text-primary">
                        Sur devis
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">
                          {getPrice(plan.monthlyPrice!)}
                        </span>
                        <span className="text-muted-foreground">
                          {" "}
                          FCFA{isAnnual ? "/an" : "/mois"}
                        </span>
                      </>
                    )}
                  </div>
                  {isAnnual && !plan.isCustom && plan.monthlyPrice && (
                    <p className="mt-1 text-xs text-success">
                      Économisez{" "}
                      {Math.round(plan.monthlyPrice * 12 * 0.15).toLocaleString(
                        "fr-FR",
                      )}{" "}
                      FCFA/an
                    </p>
                  )}
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href={plan.isCustom ? "/contact" : "/register"}
                    className={buttonVariants({
                      variant:
                        plan.popular || plan.isCustom ? "default" : "outline",
                      className: "w-full",
                    })}
                  >
                    {plan.cta}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="border-t border-border bg-muted/30 py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 animate-fade-in-down">
              Témoignages
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance animate-fade-in-up delay-100">
              Ils nous font confiance
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground animate-fade-in-up delay-200">
              Découvrez ce que nos clients disent de Gesko.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 animate-fade-in-up hover:-translate-y-1 transition-transform"
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-warning text-warning"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
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
      <section className="py-20 lg:py-32">
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
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
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

      {/* Nueva sección Métodos de Pago */}
      {/* <section className="border-t border-border py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">
                Méthodes de paiement acceptées
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Payez avec votre méthode préférée — Mobile Money ou carte bancaire
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="flex h-16 w-28 items-center justify-center rounded-lg border border-border bg-card p-3 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <img
                  src={method.logo || "/placeholder.svg"}
                  alt={method.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center sm:px-12 lg:px-16 animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance animate-fade-in-up delay-100">
                Prêt à transformer la gestion de votre hôtel ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80 animate-fade-in-up delay-200">
                Rejoignez plus de 150 hôtels ivoiriens qui utilisent déjà Gesko
                pour optimiser leurs opérations.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up delay-300">
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-12 px-8 text-base transition-transform hover:scale-105"
                  >
                    Démarrer l'essai gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-neutral transition-transform hover:scale-105"
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
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">
                Le logiciel de gestion hôtelière N°1 en Côte d'Ivoire.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Produit</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-foreground">
                    Démo
                  </a>
                </li>
                <li>
                  <a href="#website-pro" className="hover:text-foreground">
                    Site Web Pro
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Entreprise</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Carrières
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>support@gesko.app</li>
                <li>+225 07 07 07 07 07</li>
                <li>Abidjan, Côte d'Ivoire</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Gesko. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

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
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              <div className="aspect-video bg-muted">
                {YOUTUBE_VIDEO_ID ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                    title="Démonstration Gesko"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-sidebar via-sidebar/90 to-primary/20 p-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 mb-4">
                      <Play className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-white">
                      Vidéo de démonstration
                    </p>
                    <p className="mt-2 text-sm text-white/70 text-center max-w-md">
                      Pour ajouter votre vidéo YouTube, modifiez la constante{" "}
                      <code className="bg-white/10 px-2 py-0.5 rounded">
                        YOUTUBE_VIDEO_ID
                      </code>{" "}
                      en haut du fichier avec l'ID de votre vidéo.
                    </p>
                    <div className="mt-6 rounded-lg bg-white/10 px-4 py-3 text-sm text-white/80 font-mono">
                      <p className="text-white/50 text-xs mb-1">
                        Exemple pour youtube.com/watch?v=dQw4w9WgXcQ
                      </p>
                      {'const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"'}
                    </div>
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
