import Link from "next/link";
import { Hotel } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center bg-accent">
                <Hotel className="h-3.5 w-3.5 text-accent-foreground" />
              </div>
              <span className="font-bold tracking-tight">Hôtela</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Le logiciel de gestion hôtelière complet conçu pour la Côte
              d&apos;Ivoire. Réservations, séjours, facturation, rapports,
              clientèle et API.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Produit</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/fonctionnalites"
                  className="hover:text-foreground transition-colors"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-foreground transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/connecter-site"
                  className="hover:text-foreground transition-colors"
                >
                  API & Intégration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Entreprise</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
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
              <li>Abidjan, Côte d&apos;Ivoire</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hôtela. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
