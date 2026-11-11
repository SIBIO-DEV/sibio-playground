import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { componentsRegistry, getComponentCategories } from "@/lib/components-registry";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { SITE } from "@/lib/site";

/** Home: hero minimalista + índice de componentes agrupados por categoría. */
export default function HomePage() {
  const categories = getComponentCategories();
  const totalComponents = componentsRegistry.length;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-16 text-center sm:py-24">
        <Badge tone="accent" className="font-mono">
          {SITE.libraryName} · v{SITE.version}
        </Badge>
        <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Playground de componentes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
          Documentación viva de {SITE.libraryName}: ejemplos interactivos,
          tabla de props y notas de uso para cada componente.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="#componentes" size="lg">
            Explorar componentes
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <Badge tone="neutral">
            {totalComponents} {totalComponents === 1 ? "componente" : "componentes"}
          </Badge>
        </div>
      </section>

      {/* Índice de componentes por categoría */}
      <section id="componentes" aria-labelledby="componentes-heading" className="scroll-mt-24 space-y-12 pb-24">
        <h2 id="componentes-heading" className="sr-only">
          Componentes
        </h2>

        {categories.map(({ category, docs }) => (
          <div key={category} className="space-y-4">
            <div className="flex items-baseline gap-3">
              <h3 className="text-lg font-semibold tracking-tight">{category}</h3>
              <span className="text-sm text-fg-subtle">
                {docs.length} {docs.length === 1 ? "componente" : "componentes"}
              </span>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {docs.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    href={`/components/${doc.slug}`}
                    prefetch={true}
                    className="group flex h-full flex-col gap-2 rounded-lg border border-border bg-bg p-5 transition-colors duration-fast ease-standard hover:border-border-strong hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-sm font-semibold tracking-tight">
                        {doc.name}
                      </span>
                      {doc.status ? <StatusBadge status={doc.status} /> : null}
                    </div>
                    <p className="text-sm leading-relaxed text-fg-muted">{doc.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity duration-fast ease-standard group-hover:opacity-100 group-focus-visible:opacity-100">
                      Ver documentación
                      <ArrowRight
                        className="size-3.5 transition-transform duration-fast ease-standard group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
