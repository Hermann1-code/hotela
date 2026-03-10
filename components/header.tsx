"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hotel, ArrowRight, ChevronRight, X, Menu } from "lucide-react";
import { useState } from "react";

const APP_URL = "https://app.hotela.app";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-accent">
            <Hotel className="h-4 w-4 text-accent-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">Hôtela</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/fonctionnalites"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Fonctionnalités
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Tarifs
          </Link>
          <Link
            href="/integration"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            API & Intégration
          </Link>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a target="_blank" href={`${APP_URL}`} rel="noreferrer">
            <Button variant="ghost">Connexion</Button>
          </a>
          <a target="_blank" href={`${APP_URL}/register`} rel="noreferrer">
            <Button>
              Essai gratuit
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
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
              { href: "/fonctionnalites", label: "Fonctionnalités" },
              { href: "/pricing", label: "Tarifs" },
              { href: "/integration", label: "API & Intégration" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
                <ChevronRight className="h-3.5 w-3.5 opacity-40" />
              </Link>
            ))}
            <div className="flex flex-col gap-2 py-4">
              <a target="_blank" href={`${APP_URL}`} rel="noreferrer">
                <Button variant="outline" className="w-full">
                  Connexion
                </Button>
              </a>
              <a target="_blank" href={`${APP_URL}/register`} rel="noreferrer">
                <Button className="w-full">
                  Essai gratuit 30 jours
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
