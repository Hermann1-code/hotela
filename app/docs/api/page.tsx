"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Hotel,
  Key,
  Code2,
  Shield,
  Zap,
  ChevronRight,
  Copy,
  Check,
  ArrowRight,
  BookOpen,
  Terminal,
  Globe,
  Lock,
  AlertCircle,
  CheckCircle2,
  Menu,
  X,
  Hash,
  ExternalLink,
  Clock,
  Server,
  Layers,
  BedDouble,
  CalendarCheck,
} from "lucide-react";

const Badge = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-primary text-primary-foreground border-primary",
    secondary: "bg-muted text-muted-foreground border-border",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    destructive: "bg-destructive/10 text-destructive border-destructive/20",
    accent: "bg-accent/10 text-accent border-accent/20",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium border ${variants[variant] ?? ""} ${className}`}
    >
      {children}
    </span>
  );
};

const sidebarSections = [
  {
    title: "Introduction",
    items: [
      { id: "overview", label: "Vue d'ensemble" },
      { id: "authentication", label: "Authentification" },
      { id: "base-url", label: "URL de base & Permissions" },
    ],
  },
  {
    title: "Disponibilités",
    items: [
      { id: "get-availability", label: "Vérifier la disponibilité" },
      { id: "get-rooms", label: "Lister les types de chambres" },
    ],
  },
  {
    title: "Réservations",
    items: [
      { id: "create-reservation", label: "Créer une réservation" },
      { id: "get-reservation", label: "Obtenir une réservation" },
    ],
  },
  {
    title: "Site vitrine",
    items: [{ id: "public-website", label: "Données du site public" }],
  },
  {
    title: "Référence",
    items: [
      { id: "errors", label: "Codes d'erreur" },
      { id: "permissions", label: "Tableau des permissions" },
    ],
  },
];

const endpoints = [
  {
    method: "GET",
    path: "/public/availability",
    description: "Chambres disponibles sur une période",
    permission: "availability:read",
  },
  {
    method: "GET",
    path: "/public/rooms",
    description: "Types de chambres avec disponibilités",
    permission: "rooms:read",
  },
  {
    method: "POST",
    path: "/public/reservations",
    description: "Créer une réservation (HTTP 201)",
    permission: "reservations:write",
  },
  {
    method: "GET",
    path: "/public/reservations/:id",
    description: "Détails d'une réservation",
    permission: "reservations:read",
  },
  {
    method: "GET",
    path: "/public/website/:slug",
    description: "Données publiques du site vitrine",
    permission: "— (public)",
  },
];

const permissionsTable = [
  {
    permission: "availability:read",
    endpoints: ["GET /public/availability"],
    description: "Lire les disponibilités",
  },
  {
    permission: "rooms:read",
    endpoints: ["GET /public/rooms"],
    description: "Lire les types de chambres",
  },
  {
    permission: "reservations:write",
    endpoints: ["POST /public/reservations"],
    description: "Créer des réservations",
  },
  {
    permission: "reservations:read",
    endpoints: ["GET /public/reservations/:id"],
    description: "Lire les réservations",
  },
];

const errorCodes = [
  {
    code: "400",
    name: "Bad Request",
    description:
      "Paramètres invalides ou manquants (ex: dates incohérentes, checkIn ≥ checkOut).",
  },
  {
    code: "400",
    name: "Aucune disponibilité",
    description: "Aucune chambre du type demandé n'est libre sur la période.",
  },
  {
    code: "401",
    name: "Unauthorized",
    description: "x-api-key ou x-api-secret manquant ou invalide.",
  },
  {
    code: "403",
    name: "Forbidden",
    description:
      "La clé API ne possède pas la permission requise pour cet endpoint.",
  },
  {
    code: "404",
    name: "Not Found",
    description:
      "Réservation ou type de chambre introuvable, ou site non publié.",
  },
  {
    code: "500",
    name: "Server Error",
    description: "Erreur interne. Contactez le support si persistant.",
  },
];

// ── Snippets ───────────────────────────────────────────────────────────────

const S = {
  availability: {
    curl: `curl "https://api.hotela.app/public/availability?checkIn=2025-08-15&checkOut=2025-08-18" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "x-api-secret: YOUR_API_SECRET"`,
    javascript: `const res = await fetch(
  "https://api.hotela.app/public/availability" +
  "?checkIn=2025-08-15&checkOut=2025-08-18",
  {
    headers: {
      "x-api-key": "YOUR_API_KEY",
      "x-api-secret": "YOUR_API_SECRET",
    },
  }
);
const data = await res.json();`,
    php: `$res = $client->get(
  'https://api.hotela.app/public/availability',
  [
    'headers' => [
      'x-api-key'    => 'YOUR_API_KEY',
      'x-api-secret' => 'YOUR_API_SECRET',
    ],
    'query' => [
      'checkIn'  => '2025-08-15',
      'checkOut' => '2025-08-18',
    ],
  ]
);`,
    python: `res = requests.get(
    "https://api.hotela.app/public/availability",
    headers={
        "x-api-key": "YOUR_API_KEY",
        "x-api-secret": "YOUR_API_SECRET",
    },
    params={"checkIn": "2025-08-15", "checkOut": "2025-08-18"},
)`,
    response: `{
  "checkIn": "2025-08-15T00:00:00.000Z",
  "checkOut": "2025-08-18T00:00:00.000Z",
  "nights": 3,
  "availableCount": 5,
  "rooms": [
    {
      "id": "clx1abc...",
      "number": "201",
      "floor": 2,
      "type": {
        "id": "clx2def...",
        "name": "Chambre Supérieure",
        "price": 50000,
        "capacity": 2,
        "description": "Vue sur le jardin, lit king-size.",
        "image": "https://cdn.hotela.app/...",
        "equipments": [
          { "name": "Wi-Fi", "icon": "wifi" },
          { "name": "Climatisation", "icon": "wind" }
        ]
      },
      "pricePerNight": 50000,
      "totalPrice": 150000
    }
  ]
}`,
  },

  rooms: {
    curl: `curl https://api.hotela.app/public/rooms \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "x-api-secret: YOUR_API_SECRET"`,
    javascript: `const res = await fetch("https://api.hotela.app/public/rooms", {
  headers: {
    "x-api-key": "YOUR_API_KEY",
    "x-api-secret": "YOUR_API_SECRET",
  },
});
const types = await res.json();`,
    php: `$res = $client->get('https://api.hotela.app/public/rooms', [
  'headers' => [
    'x-api-key'    => 'YOUR_API_KEY',
    'x-api-secret' => 'YOUR_API_SECRET',
  ],
]);`,
    python: `res = requests.get(
    "https://api.hotela.app/public/rooms",
    headers={
        "x-api-key": "YOUR_API_KEY",
        "x-api-secret": "YOUR_API_SECRET",
    },
)`,
    response: `[
  {
    "id": "clx2def...",
    "name": "Chambre Supérieure",
    "price": 50000,
    "capacity": 2,
    "description": "Vue sur le jardin, lit king-size.",
    "image": "https://cdn.hotela.app/...",
    "equipments": [
      { "name": "Wi-Fi", "icon": "wifi" },
      { "name": "Climatisation", "icon": "wind" }
    ],
    "rooms": [
      { "id": "clx1abc..." },
      { "id": "clx1xyz..." }
    ]
  }
]
// rooms[] = chambres physiques avec status AVAILABLE
// rooms.length = disponibilité instantanée (sans filtre de dates)`,
  },

  createReservation: {
    curl: `curl -X POST https://api.hotela.app/public/reservations \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "x-api-secret: YOUR_API_SECRET" \\
  -H "Content-Type: application/json" \\
  -d '{
    "roomTypeId": "clx2def...",
    "guestName": "Kouame Yao",
    "guestEmail": "kouame@example.com",
    "guestPhone": "+225 07 00 00 00",
    "checkIn": "2025-08-15",
    "checkOut": "2025-08-18",
    "specialRequests": "Chambre non-fumeur, étage élevé"
  }'`,
    javascript: `const res = await fetch(
  "https://api.hotela.app/public/reservations",
  {
    method: "POST",
    headers: {
      "x-api-key": "YOUR_API_KEY",
      "x-api-secret": "YOUR_API_SECRET",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roomTypeId: "clx2def...",
      guestName: "Kouame Yao",
      guestEmail: "kouame@example.com",
      guestPhone: "+225 07 00 00 00",
      checkIn: "2025-08-15",
      checkOut: "2025-08-18",
      specialRequests: "Chambre non-fumeur",
    }),
  }
);
// HTTP 201 Created
const data = await res.json();`,
    php: `$res = $client->post('https://api.hotela.app/public/reservations', [
  'headers' => [
    'x-api-key'    => 'YOUR_API_KEY',
    'x-api-secret' => 'YOUR_API_SECRET',
    'Content-Type' => 'application/json',
  ],
  'json' => [
    'roomTypeId'      => 'clx2def...',
    'guestName'       => 'Kouame Yao',
    'guestEmail'      => 'kouame@example.com',
    'guestPhone'      => '+225 07 00 00 00',
    'checkIn'         => '2025-08-15',
    'checkOut'        => '2025-08-18',
    'specialRequests' => 'Chambre non-fumeur',
  ],
]);
// HTTP 201 Created`,
    python: `res = requests.post(
    "https://api.hotela.app/public/reservations",
    headers={
        "x-api-key": "YOUR_API_KEY",
        "x-api-secret": "YOUR_API_SECRET",
    },
    json={
        "roomTypeId": "clx2def...",
        "guestName": "Kouame Yao",
        "guestEmail": "kouame@example.com",
        "guestPhone": "+225 07 00 00 00",
        "checkIn": "2025-08-15",
        "checkOut": "2025-08-18",
        "specialRequests": "Chambre non-fumeur",
    },
)
# res.status_code == 201`,
    response: `// HTTP 201 Created
{
  "reservation": {
    "id": "clxres...",
    "reservationNumber": "RES-0089",
    "roomId": "clx1abc...",
    "clientId": "clxclt...",
    "guestName": "Kouame Yao",
    "guestEmail": "kouame@example.com",
    "guestPhone": "+225 07 00 00 00",
    "checkIn": "2025-08-15T00:00:00.000Z",
    "checkOut": "2025-08-18T00:00:00.000Z",
    "status": "PENDING",
    "totalAmount": 150000,
    "specialRequests": "Chambre non-fumeur, étage élevé",
    "source": "website",
    "room": {
      "number": "201",
      "floor": 2,
      "type": { "name": "Chambre Supérieure" }
    }
  },
  "invoice": {
    "invoiceNumber": "INV-0089",
    "status": "PENDING",
    "subtotal": 150000,
    "taxRate": 0,
    "taxAmount": 0,
    "total": 150000,
    "paidAmount": 0,
    "dueDate": "2025-08-25T00:00:00.000Z",
    "invoiceItems": [
      {
        "description": "Chambre Supérieure - 201 (3 nuits)",
        "quantity": 3,
        "unitPrice": 50000,
        "total": 150000
      }
    ]
  },
  "clientId": "clxclt...",
  "nights": 3,
  "room": {
    "number": "201",
    "floor": 2,
    "type": { "name": "Chambre Supérieure" }
  }
}`,
  },

  getReservation: {
    curl: `curl https://api.hotela.app/public/reservations/clxres... \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "x-api-secret: YOUR_API_SECRET"`,
    response: `{
  "id": "clxres...",
  "guestName": "Kouame Yao",
  "guestEmail": "kouame@example.com",
  "checkIn": "2025-08-15T00:00:00.000Z",
  "checkOut": "2025-08-18T00:00:00.000Z",
  "totalAmount": 150000,
  "paidAmount": 0,
  "status": "PENDING",
  "room": {
    "number": "201",
    "type": { "name": "Chambre Supérieure" }
  },
  "createdAt": "2025-08-10T14:32:00.000Z"
}`,
  },

  publicWebsite: {
    curl: `# Aucune authentification requise — endpoint public
curl https://api.hotela.app/public/website/mon-hotel`,
    response: `{
  "id": "clxweb...",
  "slug": "mon-hotel",
  "published": true,
  "views": 1248,
  "hotel": {
    "name": "Hôtel Ivoire Palace",
    "phone": "+225 07 00 00 00",
    "email": "contact@ivoirepalace.ci",
    "address": "Plateau, Abidjan",
    "logo": "https://cdn.hotela.app/...",
    "city": {
      "name": "Abidjan",
      "country": { "name": "Côte d'Ivoire" }
    }
  },
  "sections": [ /* sections enabled:true, triées par order */ ],
  "rooms":    [ /* chambres enabled:true avec roomType + equipments */ ],
  "gallery":  [ /* photos triées par order */ ],
  "features": [ /* points forts triés par order */ ],
  "reviews":  [ /* avis approved:true, featured en premier */ ]
}`,
  },
};

// ── UI helpers ─────────────────────────────────────────────────────────────

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-muted-foreground border border-border hover:text-foreground hover:border-accent/50 transition-colors"
    >
      {copied ? (
        <Check className="h-3 w-3 text-success" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      {copied ? "Copié !" : "Copier"}
    </button>
  );
}

function MethodBadge({ method }) {
  const c = {
    GET: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    POST: "text-success bg-success/10 border-success/20",
    DELETE: "text-destructive bg-destructive/10 border-destructive/20",
  };
  return (
    <span
      className={`inline-flex items-center border px-2 py-0.5 text-xs font-mono font-bold ${c[method] ?? "bg-muted text-muted-foreground border-border"}`}
    >
      {method}
    </span>
  );
}

function CodeBlock({ snippet, defaultLang = "curl" }) {
  const langs = Object.keys(snippet).filter((k) => k !== "response");
  const [lang, setLang] = useState(
    langs.includes(defaultLang) ? defaultLang : langs[0],
  );
  const [tab, setTab] = useState("request");
  const activeCode = tab === "response" ? snippet.response : snippet[lang];
  return (
    <div className="overflow-hidden border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2.5">
        <div className="flex items-center gap-0.5 overflow-x-auto">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setTab("request");
              }}
              className={`px-3 py-1 text-xs font-mono shrink-0 border-b-2 transition-colors ${lang === l && tab === "request" ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {l === "curl" ? "cURL" : l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
          {snippet.response && (
            <button
              onClick={() => setTab("response")}
              className={`px-3 py-1 text-xs font-mono shrink-0 border-b-2 transition-colors ${tab === "response" ? "border-success text-success" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              Réponse
            </button>
          )}
        </div>
        <CopyButton text={activeCode} />
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="text-xs font-mono leading-relaxed text-muted-foreground whitespace-pre">
          <code>{activeCode}</code>
        </pre>
      </div>
    </div>
  );
}

function ParamRow({ name, type, required, description, badge }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border/50 py-3 last:border-0 sm:flex-row sm:gap-4">
      <div className="flex flex-wrap items-center gap-2 sm:w-60 sm:shrink-0">
        <code className="text-xs font-mono font-semibold text-foreground">
          {name}
        </code>
        <span className="text-xs text-muted-foreground font-mono">{type}</span>
        {required && (
          <span className="text-xs text-destructive border border-destructive/20 bg-destructive/10 px-1.5 py-0.5">
            requis
          </span>
        )}
        {badge && (
          <span className="text-xs text-success border border-success/20 bg-success/5 px-1.5 py-0.5">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function SectionTitle({ id, icon: Icon, children }) {
  return (
    <h2
      id={id}
      className="group flex items-center gap-2.5 text-xl font-bold tracking-tight scroll-mt-24"
    >
      {Icon && <Icon className="h-5 w-5 text-accent" />}
      {children}
      <a
        href={`#${id}`}
        className="opacity-0 group-hover:opacity-30 transition-opacity"
      >
        <Hash className="h-4 w-4" />
      </a>
    </h2>
  );
}

function EndpointHeader({ method, path, permission, description }) {
  const isPublic = permission === "— (public)";
  return (
    <div className="border-t border-border pt-10 mb-5">
      <div className="flex flex-wrap items-start gap-3">
        <MethodBadge method={method} />
        <code className="text-sm font-mono text-foreground bg-muted/50 px-2 py-0.5 border border-border">
          {path}
        </code>
        {isPublic ? (
          <span className="flex items-center gap-1 text-xs text-success border border-success/20 bg-success/5 px-2 py-0.5">
            <Globe className="h-3 w-3" /> Public — sans auth
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-muted-foreground border border-border bg-muted/30 px-2 py-0.5">
            <Key className="h-3 w-3" /> {permission}
          </span>
        )}
      </div>
      <p className="mt-3 text-muted-foreground">{description}</p>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function ApiDocsPage() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex h-8 w-8 items-center justify-center bg-accent">
                <Hotel className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">Hôtela</span>
            </Link>
            <span className="hidden text-border sm:block">/</span>
            <span className="hidden items-center gap-1.5 sm:flex text-sm text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Documentation API
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary">v1.0 · /public</Badge>
            <Link href="/register" className="hidden sm:block">
              <button className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 text-sm font-medium hover:bg-accent/90 transition-colors">
                Obtenir ma clé API <Key className="h-3.5 w-3.5" />
              </button>
            </Link>
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground lg:hidden"
            >
              {mobileSidebarOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Shield className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl pt-16">
        <div className="flex">
          {/* Sidebar */}
          <aside
            className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r border-border bg-background overflow-y-auto transition-transform duration-200 ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:sticky lg:translate-x-0 lg:shrink-0`}
          >
            <div className="px-4 py-6">
              <div className="mb-6 border border-border bg-muted/30 p-3 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Base URL
                  </p>
                  <code className="text-xs font-mono text-accent break-all">
                    https://api.hotela.app
                  </code>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Auth headers
                  </p>
                  <code className="block text-xs font-mono text-foreground">
                    x-api-key
                  </code>
                  <code className="block text-xs font-mono text-foreground">
                    x-api-secret
                  </code>
                </div>
              </div>
              {sidebarSections.map((section) => (
                <div key={section.title} className="mb-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {section.title}
                  </p>
                  <nav className="flex flex-col gap-0.5">
                    {section.items.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setMobileSidebarOpen(false)}
                        className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        <ChevronRight className="h-3 w-3 shrink-0 opacity-40" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
              <div className="border-t border-border pt-4">
                <a
                  href="mailto:support@hotela.app"
                  className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Contacter le support
                </a>
              </div>
            </div>
          </aside>

          {mobileSidebarOpen && (
            <div
              className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
          )}

          {/* Main */}
          <main className="min-w-0 flex-1 px-4 py-10 sm:px-8 lg:px-12 xl:px-16">
            {/* Hero */}
            <div className="mb-12 border-b border-border pb-10" id="overview">
              <Badge variant="accent" className="mb-4">
                <Zap className="mr-1.5 h-3 w-3 inline" /> API REST · Base:
                /public
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                Documentation <span className="text-accent">API Hôtela</span>
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Connectez votre site web à votre tableau de bord Hôtela.
                Vérifiez les disponibilités, créez des réservations et
                synchronisez les données de votre site vitrine — en temps réel,
                sans ressaisie manuelle.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  {
                    label: "Authentification",
                    href: "#authentication",
                    icon: Lock,
                  },
                  {
                    label: "Disponibilités",
                    href: "#get-availability",
                    icon: CalendarCheck,
                  },
                  {
                    label: "Réservations",
                    href: "#create-reservation",
                    icon: BedDouble,
                  },
                  {
                    label: "Codes d'erreur",
                    href: "#errors",
                    icon: AlertCircle,
                  },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-1.5 border border-border bg-muted/30 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors"
                  >
                    <l.icon className="h-3.5 w-3.5" />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Endpoints overview */}
            <div className="mb-12">
              <div className="flex flex-col gap-2">
                {endpoints.map((ep, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap items-center gap-3 border border-border bg-card/50 p-3"
                  >
                    <MethodBadge method={ep.method} />
                    <code className="text-xs font-mono text-foreground flex-1 min-w-0">
                      {ep.path}
                    </code>
                    <span className="hidden text-xs text-muted-foreground sm:block">
                      {ep.description}
                    </span>
                    <span
                      className={`shrink-0 text-xs font-mono border px-2 py-0.5 ${ep.permission === "— (public)" ? "text-success border-success/20 bg-success/5" : "text-muted-foreground border-border bg-muted/30"}`}
                    >
                      {ep.permission}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Authentication ── */}
            <section className="mb-16" id="authentication">
              <SectionTitle id="authentication" icon={Lock}>
                Authentification
              </SectionTitle>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tous les endpoints protégés requièrent{" "}
                <strong className="text-foreground">deux en-têtes HTTP</strong>{" "}
                présents dans chaque requête. Ces identifiants sont générés dans
                votre tableau de bord sous <em>Paramètres → Clés API</em>.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="border border-border bg-card/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Clé publique
                  </p>
                  <code className="text-sm font-mono text-foreground">
                    x-api-key: YOUR_API_KEY
                  </code>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Identifie votre hôtel. Transmis avec chaque requête.
                  </p>
                </div>
                <div className="border border-accent/20 bg-accent/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    Secret
                  </p>
                  <code className="text-sm font-mono text-foreground">
                    x-api-secret: YOUR_API_SECRET
                  </code>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Ne jamais exposer côté navigateur — serveur uniquement.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 border border-warning/20 bg-warning/5 p-4">
                <AlertCircle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-warning">Sécurité :</span>{" "}
                  L'API secret ne doit jamais apparaître dans du code frontend,
                  un dépôt public ou un bundle navigateur. Effectuez tous les
                  appels API depuis votre serveur (backend, fonction serverless,
                  etc.).
                </p>
              </div>

              <div className="mt-5">
                <CodeBlock
                  snippet={{
                    curl: `curl https://api.hotela.app/public/rooms \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -H "x-api-secret: YOUR_API_SECRET"`,
                  }}
                  defaultLang="curl"
                />
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 border border-destructive/20 bg-destructive/5 p-3">
                  <AlertCircle className="h-3.5 w-3.5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    En-tête absent ou invalide →{" "}
                    <code className="font-mono">401 Unauthorized</code>
                  </p>
                </div>
                <div className="flex items-start gap-3 border border-warning/20 bg-warning/5 p-3">
                  <AlertCircle className="h-3.5 w-3.5 text-warning shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    Permission manquante →{" "}
                    <code className="font-mono">403 Forbidden</code>
                  </p>
                </div>
              </div>
            </section>

            {/* ── Base URL & Permissions ── */}
            <section className="mb-16" id="base-url">
              <SectionTitle id="base-url" icon={Server}>
                URL de base & Permissions
              </SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="border border-success/20 bg-success/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 bg-success animate-pulse" />
                    <span className="text-xs font-semibold text-success uppercase tracking-wide">
                      Production
                    </span>
                  </div>
                  <code className="text-sm font-mono text-foreground">
                    https://api.hotela.app
                  </code>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Tous les endpoints sous{" "}
                    <code className="font-mono">/public/</code>
                  </p>
                </div>
                <div className="border border-border bg-muted/30 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 bg-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Sandbox
                    </span>
                  </div>
                  <code className="text-sm font-mono text-foreground">
                    https://sandbox.api.hotela.app
                  </code>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Tests uniquement. Aucune réservation réelle.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Chaque clé API est créée avec un jeu de{" "}
                <strong className="text-foreground">permissions</strong>{" "}
                granulaires. Voir le{" "}
                <a
                  href="#permissions"
                  className="text-accent underline underline-offset-2"
                >
                  tableau des permissions
                </a>{" "}
                pour le détail.
              </p>
            </section>

            {/* ══ GET /public/availability ══ */}
            <section className="mb-16" id="get-availability">
              <EndpointHeader
                method="GET"
                path="/public/availability"
                permission="availability:read"
                description="Retourne la liste des chambres physiques disponibles pour une période donnée, avec prix total calculé. Les chambres retournées ont le statut AVAILABLE ou CLEANING et aucune réservation CONFIRMED/PENDING en conflit."
              />
              <h4 className="text-sm font-semibold mb-3">
                Paramètres de requête
              </h4>
              <div className="border border-border bg-card/50 mb-5">
                <ParamRow
                  name="checkIn"
                  type="string"
                  required
                  description="Date d'arrivée au format YYYY-MM-DD. Ex: 2025-08-15"
                  badge={undefined}
                />
                <ParamRow
                  name="checkOut"
                  type="string"
                  required
                  description="Date de départ (YYYY-MM-DD). Doit être strictement après checkIn."
                  badge={undefined}
                />
              </div>
              <CodeBlock snippet={S.availability} defaultLang="curl" />
            </section>

            {/* ══ GET /public/rooms ══ */}
            <section className="mb-16" id="get-rooms">
              <EndpointHeader
                method="GET"
                path="/public/rooms"
                permission="rooms:read"
                description="Retourne les types de chambres (RoomType) de l'hôtel avec leurs équipements. Le champ rooms[] contient les chambres physiques au statut AVAILABLE — son length indique la disponibilité instantanée sans filtre de dates."
              />
              <div className="mb-4 flex items-start gap-3 border border-accent/20 bg-accent/5 p-4">
                <AlertCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Pour connaître la disponibilité sur une période précise (ex:
                  15-18 août), utilisez{" "}
                  <a
                    href="#get-availability"
                    className="text-accent underline underline-offset-2"
                  >
                    GET /availability
                  </a>
                  .
                  <code className="font-mono text-xs bg-muted px-1 border border-border ml-1">
                    GET /rooms
                  </code>{" "}
                  convient pour afficher le catalogue sans contrainte de dates.
                </p>
              </div>
              <CodeBlock snippet={S.rooms} defaultLang="curl" />
            </section>

            {/* ══ POST /public/reservations ══ */}
            <section className="mb-16" id="create-reservation">
              <EndpointHeader
                method="POST"
                path="/public/reservations"
                permission="reservations:write"
                description="Crée une réservation. Vous fournissez un roomTypeId — Hôtela attribue automatiquement la première chambre physique disponible du type (ordre étage ASC, numéro ASC). Retourne HTTP 201 avec la réservation, la facture et le client."
              />

              <div className="mb-4 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: CheckCircle2,
                    color: "text-success",
                    bg: "bg-success/10 border-success/20",
                    title: "Attribution auto",
                    body: "Pas besoin de connaître l'ID d'une chambre physique. Vous passez un roomTypeId, Hôtela fait le reste.",
                  },
                  {
                    icon: CheckCircle2,
                    color: "text-accent",
                    bg: "bg-accent/10 border-accent/20",
                    title: "Upsert client",
                    body: "Si guestEmail correspond à un client existant, sa fiche est mise à jour. Sinon un nouveau client est créé.",
                  },
                  {
                    icon: CheckCircle2,
                    color: "text-blue-400",
                    bg: "bg-blue-400/10 border-blue-400/20",
                    title: "Facture + notif",
                    body: "Une facture INV-XXXX est générée automatiquement. Votre équipe reçoit une notification push en temps réel.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-3 border p-4 ${item.bg}`}>
                    <item.icon
                      className={`h-4 w-4 shrink-0 mt-0.5 ${item.color}`}
                    />
                    <div>
                      <p className={`text-xs font-semibold ${item.color}`}>
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-semibold mb-3">
                Corps de la requête (JSON)
              </h4>
              <div className="border border-border bg-card/50 mb-4">
                <ParamRow
                  name="roomTypeId"
                  type="string"
                  required
                  description="ID du type de chambre (obtenu via GET /public/rooms). Hôtela attribue la chambre physique disponible."
                  badge={undefined}
                />
                <ParamRow
                  name="guestName"
                  type="string"
                  required
                  description="Nom complet du client."
                  badge={undefined}
                />
                <ParamRow
                  name="guestEmail"
                  type="string"
                  required
                  description="Email du client. Utilisé pour l'upsert du profil client dans le tableau de bord."
                  badge={undefined}
                />
                <ParamRow
                  name="guestPhone"
                  type="string"
                  required
                  description="Téléphone au format international. Ex: +225 07 00 00 00"
                  badge={undefined}
                />
                <ParamRow
                  name="checkIn"
                  type="string"
                  required
                  description="Date d'arrivée (YYYY-MM-DD)."
                  badge={undefined}
                />
                <ParamRow
                  name="checkOut"
                  type="string"
                  required
                  description="Date de départ (YYYY-MM-DD). Strictement après checkIn."
                  badge={undefined}
                />
                <ParamRow
                  name="specialRequests"
                  type="string"
                  description="Demandes spéciales visibles par votre équipe. Optionnel."
                  badge={undefined}
                  required={undefined}
                />
              </div>

              <div className="mb-4 flex items-start gap-3 border border-border bg-muted/20 p-4">
                <AlertCircle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  La réservation est créée avec le statut{" "}
                  <code className="text-xs font-mono bg-muted px-1 border border-border">
                    PENDING
                  </code>{" "}
                  et la source{" "}
                  <code className="text-xs font-mono bg-muted px-1 border border-border">
                    website
                  </code>
                  . Le passage à{" "}
                  <code className="text-xs font-mono bg-muted px-1 border border-border">
                    CONFIRMED
                  </code>{" "}
                  est effectué par votre équipe depuis le tableau de bord.
                </p>
              </div>

              <CodeBlock snippet={S.createReservation} defaultLang="curl" />
            </section>

            {/* ══ GET /public/reservations/:id ══ */}
            <section className="mb-16" id="get-reservation">
              <EndpointHeader
                method="GET"
                path="/public/reservations/:id"
                permission="reservations:read"
                description="Récupère les informations essentielles d'une réservation à partir de son ID interne (retourné lors de la création)."
              />
              <h4 className="text-sm font-semibold mb-3">
                Paramètre de chemin
              </h4>
              <div className="border border-border bg-card/50 mb-5">
                <ParamRow
                  name=":id"
                  type="string"
                  required
                  description="ID interne de la réservation (champ reservation.id retourné par POST /reservations)."
                  badge={undefined}
                />
              </div>
              <CodeBlock snippet={S.getReservation} defaultLang="curl" />
            </section>

            {/* ══ GET /public/website/:slug ══ */}
            <section className="mb-16" id="public-website">
              <EndpointHeader
                method="GET"
                path="/public/website/:slug"
                permission="— (public)"
                description="Retourne toutes les données nécessaires à l'affichage du site vitrine d'un hôtel. Endpoint 100% public — aucune authentification requise. Incrémente le compteur de vues (views) automatiquement."
              />
              <h4 className="text-sm font-semibold mb-3">
                Paramètre de chemin
              </h4>
              <div className="border border-border bg-card/50 mb-4">
                <ParamRow
                  name=":slug"
                  type="string"
                  required
                  description="Slug unique du site vitrine. Ex: ivoire-palace. Configurable dans Tableau de bord → Site web."
                  badge="public"
                />
              </div>
              <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { field: "hotel", desc: "Nom, contact, logo, ville & pays" },
                  {
                    field: "sections",
                    desc: "Sections enabled:true, triées par order",
                  },
                  {
                    field: "rooms",
                    desc: "Chambres enabled:true avec type & équipements",
                  },
                  { field: "gallery", desc: "Photos triées par order" },
                  { field: "features", desc: "Points forts triés par order" },
                  {
                    field: "reviews",
                    desc: "Avis approved:true, featured en premier",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 border border-border bg-card/50 px-3 py-2.5"
                  >
                    <code className="text-xs font-mono text-accent shrink-0 mt-0.5">
                      {item.field}
                    </code>
                    <span className="text-xs text-muted-foreground">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mb-4 flex items-start gap-3 border border-destructive/20 bg-destructive/5 p-4">
                <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Retourne{" "}
                  <code className="text-xs font-mono bg-muted px-1 border border-border">
                    404
                  </code>{" "}
                  si le slug n'existe pas ou si{" "}
                  <code className="font-mono text-xs bg-muted px-1 border border-border">
                    published: false
                  </code>
                  .
                </p>
              </div>
              <CodeBlock snippet={S.publicWebsite} defaultLang="curl" />
            </section>

            {/* ── Errors ── */}
            <section className="mb-16" id="errors">
              <div className="border-t border-border pt-10">
                <SectionTitle id="errors" icon={AlertCircle}>
                  Codes d'erreur
                </SectionTitle>
                <p className="mt-3 mb-5 text-muted-foreground">
                  Hôtela utilise les codes HTTP standard. Le corps de chaque
                  réponse d'erreur suit le format NestJS natif.
                </p>
                <CodeBlock
                  snippet={{
                    curl: `{\n  "statusCode": 400,\n  "message": "Aucune chambre disponible pour le type \\"Chambre Supérieure\\" sur cette période",\n  "error": "Bad Request"\n}`,
                  }}
                  defaultLang="curl"
                />
                <div className="mt-5 flex flex-col gap-2">
                  {errorCodes.map((err, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 border border-border bg-card/50 p-4"
                    >
                      <div className="flex h-10 w-14 shrink-0 items-center justify-center border border-border bg-muted font-mono text-sm font-bold">
                        {err.code}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{err.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {err.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Permissions ── */}
            <section className="mb-16" id="permissions">
              <div className="border-t border-border pt-10">
                <SectionTitle id="permissions" icon={Key}>
                  Tableau des permissions
                </SectionTitle>
                <p className="mt-3 mb-5 text-muted-foreground">
                  Chaque clé API est créée avec un sous-ensemble de permissions.
                  Gérez-les dans <em>Tableau de bord → Clés API</em>.
                </p>
                <div className="overflow-x-auto overflow-hidden border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border">
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                          Permission
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">
                          Endpoint(s)
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {permissionsTable.map((row, i) => (
                        <tr
                          key={i}
                          className={`border-t border-border ${i % 2 === 0 ? "bg-muted/10" : ""}`}
                        >
                          <td className="px-4 py-3">
                            <code className="text-xs font-mono text-accent">
                              {row.permission}
                            </code>
                          </td>
                          <td className="px-4 py-3 hidden sm:table-cell">
                            {row.endpoints.map((ep, j) => (
                              <code
                                key={j}
                                className="block text-xs font-mono text-muted-foreground"
                              >
                                {ep}
                              </code>
                            ))}
                          </td>
                          <td className="px-4 py-3 text-xs text-muted-foreground">
                            {row.description}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t border-border">
                        <td className="px-4 py-3">
                          <code className="text-xs font-mono text-success">
                            — (public)
                          </code>
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <code className="text-xs font-mono text-muted-foreground">
                            GET /public/website/:slug
                          </code>
                        </td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">
                          Aucune authentification requise
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="border-t border-border pt-10">
              <div className="border border-accent/20 bg-accent/5 p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold">
                      Prêt à connecter votre site ?
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground max-w-md">
                      Générez votre clé API gratuitement avec l'essai 30 jours.
                      Notre équipe vous accompagne dans l'intégration.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
                    <Link href="/register">
                      <button className="flex w-full items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors sm:w-auto">
                        Essai gratuit 30 jours{" "}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                    <a href="mailto:support@hotela.app">
                      <button className="flex w-full items-center justify-center gap-2 border border-border px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors sm:w-auto">
                        Contacter le support
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-center text-xs text-muted-foreground">
                © 2025 Hôtela · Abidjan, Côte d'Ivoire ·{" "}
                <a
                  href="mailto:support@hotela.app"
                  className="hover:text-foreground underline underline-offset-2"
                >
                  support@hotela.app
                </a>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
