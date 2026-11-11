import Link from "next/link";
import { Component } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SITE } from "@/lib/site";

/** Header global: logo, navegación principal y toggle de tema. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="grid size-6 place-items-center rounded-md bg-accent text-accent-fg">
            <Component className="size-3.5" aria-hidden="true" />
          </span>
          <span className="font-semibold tracking-tight">{SITE.name}</span>
        </Link>

        <div className="flex items-center gap-1">
          <nav aria-label="Navegación principal">
            <Link
              href="/#componentes"
              className="inline-flex h-9 items-center rounded-md px-3 text-sm text-fg-muted transition-colors duration-fast ease-standard hover:bg-bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Componentes
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
