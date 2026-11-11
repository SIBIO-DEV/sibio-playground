import type { ReactNode } from "react";

export interface DocSectionProps {
  /** Ancla de la sección (se usa en la TOC y en `#hash`). */
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

/** Sección de doc con título, ancla y margen para el header sticky. */
export function DocSection({ id, title, description, children }: DocSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 space-y-5">
      <div className="space-y-1">
        <h2
          id={`${id}-heading`}
          className="text-xl font-semibold tracking-tight scroll-mt-24"
        >
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-relaxed text-fg-muted">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
