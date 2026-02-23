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
    title: "Reservations simplifiees",
    description:
      "Gerez vos reservations en quelques clics. Calendrier visuel, check-in/out rapide, notifications automatiques.",
  },
  {
    icon: Receipt,
    title: "Facturation automatique",
    description:
      "Factures generees automatiquement avec TVA 18%. Paiements partiels, Mobile Money, et export PDF.",
  },
  {
    icon: BarChart3,
    title: "Rapports & Analytics",
    description:
      "Suivez vos revenus, taux d'occupation et performances en temps reel avec des graphiques detailles.",
  },
  {
    icon: Building2,
    title: "Multi-etablissements",
    description:
      "Gerez plusieurs hotels depuis une seule interface. Vue consolidee et rapports par etablissement.",
  },
  {
    icon: Users,
    title: "Gestion des equipes",
    description:
      "Attribuez des roles (Manager, Receptionniste) et suivez l'historique des operations.",
  },
  {
    icon: Smartphone,
    title: "Paiement Mobile Money",
    description:
      "Acceptez Orange Money, MTN Money et Wave directement dans l'application. Paiements securises.",
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
      { name: "Cle API Reservation", value: true },
      { name: "Nombre de comptes", value: "1 (Reception)" },
      { name: "Gestion Depenses", value: false },
      { name: "Rapports & Stats", value: "Basique" },
      { name: "Module Resto/Bar", value: false },
      { name: "Support Technique", value: "Standard" },
    ],
    cta: "Essai gratuit 30 jours",
    popular: false,
  },
  {
    name: "BUSINESS",
    target: "15 a 40 chambres",
    monthlyPrice: 25000,
    annualPrice: 250000,
    annualSavings: "2 mois offerts",
    features: [
      { name: "Check-in / Check-out", value: "Complet" },
      { name: "Tableau de bord", value: "Avance" },
      { name: "Cle API Reservation", value: true },
      { name: "Nombre de comptes", value: "3 (Admin, Gerant, Recep.)" },
      { name: "Gestion Depenses", value: true },
      { name: "Rapports & Stats", value: "Mensuels detailles" },
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
      { name: "Cle API Reservation", value: true },
      { name: "Nombre de comptes", value: "Illimite" },
      { name: "Gestion Depenses", value: true },
      { name: "Rapports & Stats", value: "Temps reel / Compta" },
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
    role: "Directeur, Hotel Ivoire Palace",
    location: "Abidjan",
    content:
      "L'interface est intuitive et mes receptionnistes l'ont pris en main en une journee. Un outil vraiment pense pour le terrain.",
    rating: 5,
  },
  {
    name: "Fatou Diallo",
    role: "Gerante, Residence Les Palmiers",
    location: "Yamoussoukro",
    content:
      "L'equipe de support est reactive et disponible. La migration de nos donnees s'est faite sans souci. Je recommande !",
    rating: 5,
  },
  {
    name: "Jean-Marc Koffi",
    role: "Proprietaire, Hotel du Lac",
    location: "San-Pedro",
    content:
      "Les rapports analytiques me donnent une vision claire de mon activite. Je sais enfin quelles chambres sont les plus rentables.",
    rating: 5,
  },
];

const stats = [
  { value: "100%", label: "Cloud & Mobile Money" },
  { value: "3 min", label: "Pour un check-in" },
  { value: "99.9%", label: "Disponibilite garantie" },
  { value: "0", label: "Installation requise" },
];

const sidebarNavigation = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Chambres", icon: BedDouble, active: false },
  { name: "Reservations", icon: CalendarDays, active: false },
  { name: "Facturation", icon: Receipt, active: false },
  { name: "Rapports", icon: BarChart3, active: false },
  { name: "Multi-Hotels", icon: Building2, active: false },
  { name: "Utilisateurs", icon: Users, active: false },
  { name: "Cles API", icon: Key, active: false },
  { name: "Parametres", icon: Settings, active: false },
];

const YOUTUBE_VIDEO_ID = "eLxPGQ0P3AM";

export default function LandingPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

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
              Demo
            </Link>
            <Link
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Fonctionnalites
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
              Temoignages
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost">Connexion</Button>
            </Link>
            <Link href="/register">
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
          <div className="absolute top-0 left-0 right-0 h-full bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse bg-success" />
              Nouveau : lancez-vous avec 30 jours gratuits
            </Badge>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance">
              Gerez votre hotel comme un{" "}
              <span className="text-accent">professionnel</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
              Le logiciel de gestion hoteliere concu pour la Cote d'Ivoire.
              Reservations, facturation, rapports — tout en un seul endroit.
              Payez avec Mobile Money.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg" className="h-12 px-8 text-base">
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
                <span>Annulation a tout moment</span>
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
                  app.gesko.com/dashboard
                </div>
              </div>

              {/* Dashboard Layout with Sidebar */}
              <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="hidden w-56 flex-shrink-0 flex-col border-r border-border bg-sidebar md:flex">
                  <div className="flex h-14 items-center gap-2 border-b border-sidebar-border px-4">
                    <div className="flex h-8 w-8 items-center justify-center bg-primary">
                      <Hotel className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-sidebar-foreground">
                      Gesko
                    </span>
                  </div>

                  <div className="border-b border-sidebar-border p-3">
                    <div className="flex w-full items-center justify-between bg-sidebar-accent px-3 py-2 text-sm">
                      <div className="flex items-center gap-2 truncate">
                        <Building2 className="h-4 w-4 shrink-0 text-sidebar-accent-foreground" />
                        <span className="truncate text-sidebar-accent-foreground">
                          Hotel Ivoire Palace
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
                      Deconnexion
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-1 flex-col overflow-hidden">
                  <div className="flex h-14 items-center justify-between border-b border-border bg-background px-4">
                    <div>
                      <h2 className="text-sm font-semibold">Dashboard</h2>
                      <p className="text-xs text-muted-foreground">
                        Bienvenue ! Voici un apercu de votre etablissement.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-primary/20" />
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
                          label: "Factures en attente",
                          value: "5",
                          change: "-2",
                          color: "text-warning",
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
                                className={`flex-1 transition-all ${
                                  i === 11 ? "bg-accent" : "bg-accent/30"
                                }`}
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
                        <p className="text-sm font-medium">
                          {"Activite du jour"}
                        </p>
                        <div className="mt-3 flex flex-col gap-3">
                          {[
                            {
                              text: "Check-in Chambre 201",
                              time: "Il y a 5 min",
                              type: "checkin",
                            },
                            {
                              text: "Facture #F-2025-089 payee",
                              time: "Il y a 12 min",
                              type: "payment",
                            },
                            {
                              text: "Nouvelle reservation",
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
                                className={`mt-1 h-2 w-2 ${
                                  item.type === "checkin"
                                    ? "bg-success"
                                    : item.type === "payment"
                                      ? "bg-accent"
                                      : item.type === "reservation"
                                        ? "bg-primary"
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

                    <div className="mt-4 border border-border bg-card p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">
                          Statut des chambres
                        </p>
                        <div className="flex gap-3 text-xs">
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 bg-success" />
                            <span className="text-muted-foreground">Libre</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 bg-accent" />
                            <span className="text-muted-foreground">
                              Occupee
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 bg-warning" />
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
                              className={`flex aspect-square items-center justify-center border text-xs font-medium ${
                                status === "available"
                                  ? "border-success/30 bg-success/10 text-success"
                                  : status === "occupied"
                                    ? "border-accent/30 bg-accent/10 text-accent"
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
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-foreground lg:text-4xl">
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

      {/* Demo Section */}
      <section id="demo" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Demonstration
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Decouvrez Gesko en action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Regardez notre video de demonstration pour voir comment Gesko peut
              transformer la gestion de votre hotel en quelques minutes.
            </p>
          </div>

          <div className="relative mt-12 mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-accent/10 blur-2xl" />
            <div className="relative overflow-hidden border border-border bg-card shadow-2xl">
              <div className="relative aspect-video bg-muted">
                {YOUTUBE_VIDEO_ID ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                    title="Demonstration Gesko"
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
                        {"Video bientot disponible"}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-border bg-card px-6 py-4">
                <div>
                  <p className="font-medium">
                    {"Presentation complete de Gesko"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {"Duree: 3 minutes"}
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
                title: "Presentation du dashboard",
                description:
                  "Vue d'ensemble des statistiques et indicateurs cles",
              },
              {
                time: "1:15",
                title: "Gestion des reservations",
                description:
                  "Comment creer et gerer vos reservations en quelques clics",
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
      <section
        id="features"
        className="border-t border-border bg-muted/30 py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Fonctionnalites
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Tout ce dont vous avez besoin pour gerer votre hotel
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Une solution complete concue specifiquement pour les hoteliers
              ivoiriens. Simple, puissante, et adaptee a vos besoins.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 transition-all hover:border-accent/50 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center bg-accent/10 text-accent transition-transform group-hover:scale-110">
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
      <section className="border-y border-border py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="secondary" className="mb-4">
                Pourquoi nous choisir
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                {"Concu pour les hoteliers africains"}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {
                  "Nous comprenons les defis uniques de l'industrie hoteliere en Cote d'Ivoire. C'est pourquoi nous avons cree une solution adaptee a vos realites."
                }
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
                    title: "Securite & Fiabilite",
                    description:
                      "Vos donnees sont protegees et sauvegardees automatiquement chaque jour.",
                  },
                  {
                    icon: Clock,
                    title: "Support local 24/7",
                    description:
                      "Une equipe basee a Abidjan disponible pour vous accompagner a tout moment.",
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
                      {"Mise en service rapide"}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <div className="border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-accent">100%</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cloud, rien a installer
                    </p>
                  </div>
                  <div className="border border-border bg-card p-6 shadow-lg">
                    <div className="text-3xl font-bold text-foreground">CI</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {"Concu en Cote d'Ivoire"}
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
            <Badge variant="secondary" className="mb-4">
              Tarifs
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              {"Nos Packs d'Abonnement"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Choisissez le plan qui correspond a la taille de votre
              etablissement. Tous les plans incluent un essai gratuit de 30
              jours.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <span
                className={`text-sm font-medium ${
                  !isAnnual ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Mensuel
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative h-7 w-14 transition-colors ${
                  isAnnual ? "bg-accent" : "bg-muted-foreground/30"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 bg-card shadow-md transition-transform ${
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
                <Badge className="bg-success/10 text-success border-success/20">
                  2 mois offerts
                </Badge>
              )}
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
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
                <CardContent className="p-6">
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
                      Caracteristiques
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
                      {"15 a 40 chambres"}
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
                      values: ["Simplifie", "Avance", "Expert"],
                    },
                    {
                      label: "Cle API Reservation",
                      values: ["check", "check", "check"],
                    },
                    {
                      label: "Nombre de comptes",
                      values: [
                        "1 (Reception)",
                        "3 (Admin, Gerant, Recep.)",
                        "Illimite",
                      ],
                    },
                    {
                      label: "Gestion Depenses",
                      values: ["cross", "check", "check"],
                    },
                    {
                      label: "Rapports & Stats",
                      values: [
                        "Basique",
                        "Mensuels detailles",
                        "Temps reel / Compta",
                      ],
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
        className="border-t border-border bg-muted/30 py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Temoignages
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Ce que disent nos premiers utilisateurs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {"Decouvrez ce que nos clients disent de Gesko."}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 hover:-translate-y-1 transition-transform"
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
              populaires en Cote d'Ivoire.
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
              <span>{"Paiements securises"}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>{"Sans frais caches"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-primary px-6 py-16 text-center sm:px-12 lg:px-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.2_0.01_75/0.3)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.2_0.01_75/0.3)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                {"Pret a transformer la gestion de votre hotel ?"}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                {
                  "Essayez Gesko gratuitement pendant 30 jours et decouvrez une nouvelle facon de gerer votre hotel. Sans engagement, sans carte bancaire."
                }
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-12 px-8 text-base"
                  >
                    {"Demarrer l'essai gratuit"}
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
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">
                {
                  "Le logiciel de gestion hoteliere concu pour la Cote d'Ivoire."
                }
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
                    Fonctionnalites
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
                    Demo
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
                    Carrieres
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <li>support@gesko.app</li>
                <li>+225 07 07 07 07 07</li>
                <li>{"Abidjan, Cote d'Ivoire"}</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>{"© 2025 Gesko. Tous droits reserves."}</p>
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
                    title="Demonstration Gesko"
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
                      {"Video de demonstration"}
                    </p>
                    <p className="mt-2 text-sm text-primary-foreground/70 text-center max-w-md">
                      {
                        "Pour ajouter votre video YouTube, modifiez la constante "
                      }
                      <code className="bg-primary-foreground/10 px-2 py-0.5">
                        YOUTUBE_VIDEO_ID
                      </code>
                      {" en haut du fichier avec l'ID de votre video."}
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
