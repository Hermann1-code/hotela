"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  ChevronRight,
  Minus,
  Globe,
  Wrench,
  Timer,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { APP_URL } from "@/lib/env";

const paymentMethods = [
  {
    name: "Orange Money",
    logo: "/orangemoney.png",
  },

  {
    name: "MTN Mobile Money",
    logo: "/momo.png",
  },

  {
    name: "Wave",
    logo: "/wave.png",
  },

  {
    name: "Visa",
    logo: "/visa.png",
  },

  {
    name: "Mastercard",
    logo: "/mastercard.png",
  },

  {
    name: "Moov Money",
    logo: "/moov.png",
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

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [wantsSite, setWantsSite] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-full bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Tarifs
          </Badge>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Nos Packs d&apos;Abonnement
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Choisissez le plan qui correspond à la taille de votre
            établissement. Tous les plans incluent un essai gratuit de 30 jours,
            la gestion complète des séjours, la facturation automatique et la
            clé API pour connecter votre site.
          </p>

          {/* Toggle */}
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
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                2 mois offerts
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
                    <p className="mt-1 text-xs text-green-500 font-medium">
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
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
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
                  <a
                    href={`${APP_URL}/register`}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: plan.popular ? "default" : "outline",
                      className: `w-full ${plan.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`,
                    })}
                  >
                    {plan.cta}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Installation Fee Banner */}
          <div className="mt-8 sm:mt-10">
            <div className="relative overflow-hidden border border-orange-500/30 bg-orange-500/5 p-5 sm:p-6">
              <div
                className="absolute top-0 right-0 h-16 w-16 bg-orange-500/10"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />

              {/* Switch */}
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-orange-500/20 pb-5">
                <div>
                  <p className="text-sm font-semibold">
                    Vous avez déjà un site web ?
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Choisissez votre situation pour voir le bon tarif
                    d&apos;installation.
                  </p>
                </div>
                <div className="flex items-center gap-1 border border-orange-500/30 bg-background overflow-hidden self-start sm:self-auto">
                  <button
                    onClick={() => setWantsSite(false)}
                    className={`px-3 py-2 text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                      !wantsSite
                        ? "bg-accent text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    J&apos;ai déjà un site
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
                {/* Left */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center border ${wantsSite ? "bg-accent/10 border-accent/20" : "bg-orange-500/10 border-orange-500/20"}`}
                  >
                    {wantsSite ? (
                      <Globe className="h-6 w-6 text-accent" />
                    ) : (
                      <Wrench className="h-6 w-6 text-orange-500" />
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
                        className={`text-xs font-semibold ${wantsSite ? "bg-accent/10 text-accent border-accent/30" : "bg-orange-500/10 text-orange-500 border-orange-500/30"}`}
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
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-500" />
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
                            A partir de 100 000 FCFA
                          </span>
                          <span className="text-muted-foreground">
                            :création du site
                          </span>
                        </div>
                        <span className="flex items-center text-muted-foreground text-xs">
                          +
                        </span>
                        <div className="flex items-center gap-1.5 border border-orange-500/20 bg-orange-500/5 px-3 py-1.5 text-xs">
                          <Wrench className="h-3 w-3 text-orange-500" />
                          <span className="text-orange-500 font-medium">
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
                <div className="flex shrink-0 flex-col items-start gap-1 border-t border-orange-500/20 pt-4 sm:items-end sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
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
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-green-500 font-medium">
                      <Timer className="h-3.5 w-3.5" />
                      Installation en 24h max
                    </div>
                  )}
                  <a
                    href={`${APP_URL}/register`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 w-full sm:w-auto"
                  >
                    <Button
                      className={`w-full text-xs sm:w-auto ${wantsSite ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
                      variant={wantsSite ? "default" : "outline"}
                    >
                      {wantsSite
                        ? "Créer mon site + Hôtela"
                        : "Démarrer l'installation"}
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
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
                      <span className="text-xs text-green-500">
                        (2 mois offerts)
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center text-sm border-x border-accent/20 bg-accent/5">
                      250 000 F{" "}
                      <span className="text-xs text-green-500">
                        (2 mois offerts)
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center text-sm">
                      450 000 F{" "}
                      <span className="text-xs text-green-500">
                        (2 mois offerts)
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-border bg-orange-500/5">
                    <td className="px-6 py-3 text-sm font-medium text-orange-500">
                      Frais d&apos;installation (unique)
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-semibold text-orange-500">
                      50 000 F
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-semibold text-orange-500 border-x border-accent/20 bg-orange-500/5">
                      50 000 F
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-semibold text-orange-500">
                      50 000 F
                    </td>
                  </tr>
                  {[
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
                            <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                          ) : val === "cross" ? (
                            <Minus className="h-4 w-4 text-muted-foreground/40 mx-auto" />
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

      {/* FAQ / Payment Methods */}

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
      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-primary px-6 py-16 text-center sm:px-12 lg:px-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.2_0.01_75/0.3)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.2_0.01_75/0.3)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Prêt à essayer Hôtela ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                30 jours d&apos;essai gratuit. Sans engagement, sans carte
                bancaire.
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
