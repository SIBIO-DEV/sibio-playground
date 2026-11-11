import type { ReactNode } from "react";
import { SiteSidebar } from "@/components/layout/site-sidebar";
import { DocToc } from "@/components/docs/doc-toc";
import type { DocTocItem } from "@/lib/types";

export interface DocLayoutProps {
  /** Secciones de la página actual para la TOC. */
  toc: DocTocItem[];
  children: ReactNode;
}

/**
 * Layout de página de doc (solo componentes):
 * - Sidebar izquier (≥lg): navegación de componentes.
 * - Contenido al centro.
 * - TOC derecho (≥xl) con las secciones; en móvil/ tablet se colapsa
 *   en un `<details>` encima del contenido.
 */
export function DocLayout({ toc, children }: DocLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[210px_minmax(0,1fr)_190px]">
      <aside className="hidden lg:block">
        <div className="sticky top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto py-10 pr-2">
          <SiteSidebar />
        </div>
      </aside>

      <div className="min-w-0 py-10">
        {toc.length > 0 ? (
          <details className="mb-8 rounded-lg border border-border bg-bg-subtle xl:hidden">
            <summary className="cursor-pointer select-none px-4 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              En esta página
            </summary>
            <div className="px-4 pb-3">
              <DocToc items={toc} />
            </div>
          </details>
        ) : null}
        {children}
      </div>

      {toc.length > 0 ? (
        <aside className="hidden xl:block">
          <div className="sticky top-20 py-10">
            <h2 className="mb-2 text-xs font-medium uppercase tracking-wider text-fg-subtle">
              En esta página
            </h2>
            <DocToc items={toc} />
          </div>
        </aside>
      ) : null}
    </div>
  );
}
