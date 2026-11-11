import type { ReactNode } from "react";
import { DocCodeBlock } from "@/components/docs/doc-code-block";

export interface DocExampleProps {
  title: string;
  description?: string;
  /** Código del ejemplo (string). */
  code: string;
  /** Preview vivo del ejemplo. */
  children: ReactNode;
}

/** Bloque de ejemplo: preview arriba (`bg-bg-subtle`) y código abajo con copiar. */
export function DocExample({ title, description, code, children }: DocExampleProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-bg">
      <div className="border-b border-border bg-bg-elevated px-4 py-3 sm:px-5">
        <h3 className="text-sm font-semibold">{title}</h3>
        {description ? (
          <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">{description}</p>
        ) : null}
      </div>
      <div className="flex min-h-28 flex-wrap items-center justify-center gap-3 bg-bg-subtle px-4 py-8 sm:px-6">
        {children}
      </div>
      <DocCodeBlock code={code} />
    </div>
  );
}
