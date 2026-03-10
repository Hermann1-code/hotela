import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarCheck,
  Receipt,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Shield,
  Building2,
  BedDouble,
  Key,
  CreditCard,
  Database,
  Smartphone,
  Laptop,
  Tablet,
  Eye,
  Globe2,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { APP_URL } from "@/lib/env";

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

const moduleDetails = [
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
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
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
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
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
];

export default function FonctionnalitesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-full bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            <Database className="mr-1.5 h-3 w-3 inline" />
            Fonctionnalités complètes
          </Badge>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Tout ce dont votre hôtel a besoin,{" "}
            <span className="text-accent">dans un seul logiciel</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Hôtela remplace vos fichiers Excel, votre carnet de réservations,
            vos messages WhatsApp, votre logiciel de facturation et votre suivi
            client — tout en un, conçu pour les hôteliers ivoiriens.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a href={`${APP_URL}/register`} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                className="h-12 w-full px-8 text-base sm:w-auto"
              >
                Démarrer l&apos;essai gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Modules Strip */}
      <section className="py-12 sm:py-16 border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-balance">
              Un seul logiciel pour gérer{" "}
              <span className="text-accent">toute votre activité</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
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
        </div>
      </section>

      {/* Module Details */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moduleDetails.map((mod, index) => (
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
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible Partout */}
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
                    color: "text-green-500",
                    bg: "bg-green-500/10",
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

            {/* Visual Cards */}
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/5 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
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
                      <div className="flex items-center gap-1.5 text-xs text-green-500 mt-2">
                        <span className="h-1.5 w-1.5 bg-green-500 animate-pulse" />
                        En direct
                      </div>
                    </div>
                  </div>
                  <div className="border border-green-500/30 bg-green-500/5 p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4 text-green-500" />
                      <span className="text-xs font-semibold text-green-500">
                        Propriétaire
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Voir son hôtel depuis n&apos;importe où dans le monde
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs font-medium text-green-500">
                      <Globe2 className="h-3 w-3" />
                      Accès global
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4">
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
                            className={`h-2 w-2 ${i === 0 ? "bg-green-500" : i === 1 ? "bg-accent" : "bg-orange-500"}`}
                          />
                          <span className="text-muted-foreground">{room}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

      {/* All Features Grid */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Toutes les fonctionnalités
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Vue d&apos;ensemble complète
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-primary px-6 py-16 text-center sm:px-12 lg:px-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.2_0.01_75/0.3)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.2_0.01_75/0.3)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Prêt à moderniser votre gestion hôtelière ?
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
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    Voir les tarifs
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
