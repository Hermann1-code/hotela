"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Hotel,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Receipt,
  BarChart3,
  Users,
  Key,
  Building2,
  BedDouble,
  Star,
  AlertTriangle,
  Eye,
  XCircle,
  LayoutDashboard,
  CalendarDays,
  UserCheck,
  Settings,
  LogOut,
  ChevronDown,
  Laptop,
  Smartphone,
  Tablet,
  Play,
  Globe,
  Webhook,
  RefreshCw,
  Shield,
  X,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { APP_URL } from "@/lib/env";

const stats = [
  { value: "3 min", label: "Pour un check-in complet" },
  { value: "0", label: "Double-réservation possible" },
  { value: "24h/7j", label: "Accès depuis n'importe où" },
  { value: "30j", label: "Pour tester gratuitement" },
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
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Users,
    label: "Clientèle",
    desc: "Fiches, historiques, soldes",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
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

const YOUTUBE_VIDEO_ID = "eLxPGQ0P3AM";

export default function HomePage() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-full bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              <Hotel className="mr-1.5 h-3 w-3 inline" />
              Logiciel de gestion hôtelière
            </Badge>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-8xl text-balance">
              Vos réservations arrivent sur{" "}
              <span className="line-through text-red-500">WhatsApp</span> ?
              <br />
              <span className="text-accent">Plus jamais.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
              Hôtela est le logiciel de gestion hôtelière{" "}
              <strong className="text-foreground">tout-en-un</strong> conçu pour
              la Côte d&apos;Ivoire. Centralisez vos réservations, gérez chaque
              séjour, automatisez votre facturation, suivez votre clientèle et
              pilotez votre activité depuis votre téléphone, tablette ou
              ordinateur — où que vous soyez.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <a
                href={`${APP_URL}/register`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="h-12 w-full px-8 text-base sm:w-auto"
                >
                  Démarrer l&apos;essai gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
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
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Essai gratuit 30 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Installation en 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
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
                  <div className="h-3 w-3 bg-orange-500/60" />
                  <div className="h-3 w-3 bg-green-500/60" />
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
                    <span>Mobile</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tablet className="h-3.5 w-3.5" />
                    <span>Tablette</span>
                  </div>
                </div>
              </div>

              <div className="flex h-72 sm:h-96 lg:h-[500px]">
                {/* Sidebar */}
                <div className="hidden w-48 flex-shrink-0 flex-col border-r border-border bg-muted/30 lg:flex xl:w-56">
                  <div className="flex h-14 items-center gap-2 border-b border-border px-4">
                    <div className="flex h-8 w-8 items-center justify-center bg-accent">
                      <Hotel className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <span className="font-semibold">Hôtela</span>
                  </div>
                  <div className="border-b border-border p-3">
                    <div className="flex w-full items-center justify-between bg-muted px-3 py-2 text-sm">
                      <div className="flex items-center gap-2 truncate">
                        <Building2 className="h-4 w-4 shrink-0" />
                        <span className="truncate">Hôtel Ivoire Palace</span>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto px-3 py-4">
                    <nav className="flex flex-col gap-1">
                      {sidebarNavigation.map((item) => (
                        <div
                          key={item.name}
                          className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${
                            item.active
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </div>
                      ))}
                    </nav>
                  </div>
                  <div className="border-t border-border p-3">
                    <div className="flex w-full items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
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
                      <div className="flex items-center gap-1.5 border border-green-500/30 bg-green-500/10 px-2 py-1 text-xs text-green-500">
                        <span className="h-1.5 w-1.5 animate-pulse bg-green-500" />
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
                          color: "text-green-500",
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
                          color: "text-green-500",
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
                            <span className="text-xs text-green-500">
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
                                      ? "bg-green-500"
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

      {/* Modules */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Un seul logiciel pour gérer{" "}
              <span className="text-accent">toute votre activité</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Hôtela couvre l&apos;intégralité des opérations d&apos;un hôtel —
              de la première réservation jusqu&apos;au rapport de fin de mois.
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

          <div className="mt-10 text-center">
            <Link href="/fonctionnalites">
              <Button variant="outline" size="lg">
                Voir toutes les fonctionnalités
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section - Avant/Après */}
      <section className="py-16 sm:py-20 lg:py-32 border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20 py-1 text-xs px-4">
              <AlertTriangle className="mr-1.5 h-3.5 w-3.5 inline" />
              Le vrai problème des hôteliers aujourd&apos;hui
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Ce qui change avec Hôtela
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Avant */}
            <div className="border border-destructive/20 bg-destructive/5 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center bg-destructive/10">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-destructive">
                  Avant Hôtela
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  "Réservations sur WhatsApp, cahier et post-it",
                  "Double-réservations fréquentes",
                  "Factures faites à la main (erreurs de calcul)",
                  "Aucune visibilité sur les revenus réels",
                  "Équipe qui ne sait jamais où en est le client",
                  "Stress permanent, perte de temps",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Après */}
            <div className="border border-green-500/20 bg-green-500/5 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center bg-green-500/10">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-500">
                  Avec Hôtela
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  "Toutes les réservations dans un seul tableau de bord",
                  "Zéro double-réservation (calendrier synchronisé)",
                  "Factures automatiques avec TVA 18%",
                  "Rapports en temps réel : revenus, occupation, tendances",
                  "Fiche client complète accessible à toute l'équipe",
                  "Contrôle total, depuis n'importe où",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Connection Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-pink-400/10 text-pink-400 border-pink-400/20">
              <Key className="mr-1.5 h-3.5 w-3.5 inline" />
              Connexion API
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Votre site web et Hôtela,{" "}
              <span className="text-accent">connectés en temps réel</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Avec l&apos;API Hôtela, les réservations faites sur votre site
              arrivent instantanément dans votre tableau de bord. Plus de
              copier-coller, plus d&apos;erreurs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {apiSteps.map((step, index) => (
              <div
                key={index}
                className={`border ${step.border} ${step.bg} p-6 hover:-translate-y-1 transition-transform`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-2xl font-bold ${step.color}`}>
                    {step.step}
                  </span>
                  <div
                    className={`flex h-10 w-10 items-center justify-center ${step.bg} border ${step.border}`}
                  >
                    <step.icon className={`h-5 w-5 ${step.color}`} />
                  </div>
                </div>
                <h3 className={`font-bold ${step.color}`}>{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/connecter-site">
              <Button size="lg">
                En savoir plus sur l&apos;API
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-20 lg:py-32">
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
              vieux logiciel. Voici ce qu&apos;ils vivent aujourd&apos;hui avec
              Hôtela.
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
                        className="h-4 w-4 fill-orange-500 text-orange-500"
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

      {/* Quick Links */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group hover:-translate-y-1 transition-transform">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center bg-accent/10 text-accent mb-4">
                  <Hotel className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Fonctionnalités</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Découvrez tout ce que Hôtela peut faire pour votre
                  établissement.
                </p>
                <Link
                  href="/fonctionnalites"
                  className="mt-4 inline-flex items-center text-sm text-accent hover:underline"
                >
                  En savoir plus <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:-translate-y-1 transition-transform">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center bg-green-500/10 text-green-500 mb-4">
                  <Receipt className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Tarifs</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Des plans adaptés à la taille de votre établissement.
                </p>
                <Link
                  href="/pricing"
                  className="mt-4 inline-flex items-center text-sm text-green-500 hover:underline"
                >
                  Voir les tarifs <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:-translate-y-1 transition-transform">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center bg-pink-400/10 text-pink-400 mb-4">
                  <Key className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">API & Intégration</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Connectez votre site web pour automatiser les réservations.
                </p>
                <Link
                  href="/connecter-site"
                  className="mt-4 inline-flex items-center text-sm text-pink-400 hover:underline"
                >
                  Connecter mon site <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
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
                Essayez Hôtela gratuitement pendant 30 jours. Sans engagement,
                sans carte bancaire.
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
                    Démarrer l&apos;essai gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
              title="Démo Hôtela"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
