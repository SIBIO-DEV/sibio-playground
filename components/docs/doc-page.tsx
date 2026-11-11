import type { ReactNode } from "react";

export interface DocPageProps {
  title: string;
  description?: string;
  /** Badge de estado / categoría que se muestra junto al título. */
  badge?: ReactNode;
  children: ReactNode;
}

/** Wrapper de página de doc: título, descripción, badge y secciones. */
export function DocPage({ title, description, badge, children }: DocPageProps) {
  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          {badge}
        </div>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-fg-muted">
            {description}
          </p>
        ) : null}
      </header>
      <div className="space-y-12">{children}</div>
    </article>
  );
}
