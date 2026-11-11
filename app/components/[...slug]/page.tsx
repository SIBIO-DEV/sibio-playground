import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { componentsRegistry, getComponentDoc } from "@/lib/components-registry";
import { DocLayout } from "@/components/docs/doc-layout";
import { DocPage } from "@/components/docs/doc-page";
import { DocSection } from "@/components/docs/doc-section";
import { DocExample } from "@/components/docs/doc-example";
import { DocPropsTable } from "@/components/docs/doc-props-table";
import { DocCodeBlock } from "@/components/docs/doc-code-block";
import { StatusBadge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { DocTocItem } from "@/lib/types";

type ComponentDocPageProps = PageProps<"/components/[...slug]">;
type ComponentDocParams = ComponentDocPageProps["params"];

export function generateStaticParams(): Array<{ slug: string[] }> {
  return componentsRegistry.map((doc) => ({ slug: [doc.slug] }));
}

export async function generateMetadata({
  params,
}: Pick<ComponentDocPageProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const doc = getComponentDoc(slug.join("/"));
  if (!doc) {
    return { title: "Componente no encontrado" };
  }
  return { title: doc.name, description: doc.description };
}

/**
 * Página de doc de un componente: breadcrumb, ejemplos, props y notas.
 *
 * El acceso a `params` está dentro de un `<Suspense>` (patrón requerido por
 * Cache Components / Partial Prefetching): el shell de la ruta queda estático
 * y la navegación es instantánea; el contenido dependiente de la URL se
 * resuelve en la siguiente etapa (streaming o RSC cacheado).
 */
export default function ComponentDocPage({ params }: ComponentDocPageProps) {
  return (
    <Suspense fallback={<ComponentDocFallback />}>
      <ComponentDocContent params={params} />
    </Suspense>
  );
}

/**
 * Skeleton del fallback. Solo se ve en navegaciones no prefetcheadas;
 * las rutas de `generateStaticParams` se prerenderan con contenido completo.
 */
function ComponentDocFallback() {
  return (
    <div className="space-y-10 py-10" aria-busy="true" aria-live="polite">
      <div className="h-4 w-44 animate-pulse rounded-full bg-bg-subtle" />
      <div className="space-y-3">
        <div className="h-9 w-52 animate-pulse rounded-md bg-bg-subtle" />
        <div className="h-4 max-w-xl animate-pulse rounded-md bg-bg-subtle" />
      </div>
      <div className="h-44 animate-pulse rounded-lg bg-bg-subtle" />
      <div className="h-64 animate-pulse rounded-lg bg-bg-subtle" />
    </div>
  );
}

/** Contenido real de la doc: depende de `params`, por eso va tras el Suspense. */
async function ComponentDocContent({ params }: { params: ComponentDocParams }) {
  const { slug } = await params;
  const doc = getComponentDoc(slug.join("/"));
  if (!doc) {
    notFound();
  }

  const toc: DocTocItem[] = [
    { id: "ejemplos", title: "Ejemplos" },
    { id: "props", title: "Props" },
    ...(doc.notes ? [{ id: "notas", title: "Notas" }] : []),
  ];

  const breadcrumbLinkClasses =
    "rounded-sm transition-colors duration-fast ease-standard hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <DocLayout toc={toc}>
      <nav
        aria-label="Miga de pan"
        className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-fg-muted"
      >
        <Link href="/" className={breadcrumbLinkClasses}>
          Inicio
        </Link>
        <ChevronRight className="size-3.5 text-fg-subtle" aria-hidden="true" />
        <Link href="/#componentes" className={breadcrumbLinkClasses}>
          Componentes
        </Link>
        <ChevronRight className="size-3.5 text-fg-subtle" aria-hidden="true" />
        <span aria-current="page" className="font-medium text-fg">
          {doc.name}
        </span>
      </nav>

      <DocPage
        title={doc.name}
        description={doc.description}
        badge={doc.status ? <StatusBadge status={doc.status} /> : undefined}
      >
        {doc.importStatement ? (
          <DocCodeBlock code={doc.importStatement} language="tsx" />
        ) : null}

        <DocSection
          id="ejemplos"
          title="Ejemplos"
          description="Ejemplos vivos renderizados con el componente real. El código de cada uno está debajo del preview."
        >
          <div className="space-y-6">
            {doc.content.examples.map((example) => (
              <DocExample
                key={example.title}
                title={example.title}
                description={example.description}
                code={example.code}
              >
                {example.preview}
              </DocExample>
            ))}
          </div>
        </DocSection>

        <DocSection
          id="props"
          title="Props"
          description="API del componente. Las props nativas heredadas se agrupan en la última fila."
        >
          <DocPropsTable rows={doc.content.props} />
        </DocSection>

        {doc.notes ? (
          <DocSection id="notas" title="Notas">
            <div className="rounded-lg border border-border bg-bg-subtle p-4 sm:p-5">
              <p className="max-w-none text-sm leading-relaxed text-fg-muted">{doc.notes}</p>
            </div>
          </DocSection>
        ) : null}

        <Separator className="mt-4" />
        <p className="text-sm text-fg-subtle">
          ¿Encontraste un problema? Revisa el resto de componentes en{" "}
          <Link
            href="/#componentes"
            className="rounded-sm font-medium text-accent transition-colors duration-fast ease-standard hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            el índice
          </Link>
          .
        </p>
      </DocPage>
    </DocLayout>
  );
}
