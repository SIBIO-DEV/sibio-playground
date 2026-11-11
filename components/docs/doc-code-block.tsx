"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DocCodeBlockProps {
  code: string;
  /** Etiqueta del lenguaje (solo visual). */
  language?: string;
}

/**
 * Bloque de código con botón copiar. Sin syntax highlighting externo:
 * solo `font-mono` y colores por CSS vars (se puede añadir Prism/Shiki
 * más adelante sin cambiar la API).
 */
export function DocCodeBlock({ code, language = "tsx" }: DocCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard no disponible (contexto inseguro o permiso denegado): no-op.
    }
  }

  return (
    <div className="border-t border-border bg-bg-elevated">
      <div className="flex items-center justify-between gap-2 px-4 py-2">
        <span className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
          {language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Código copiado" : "Copiar código"}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-colors duration-fast ease-standard",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            copied ? "text-success" : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
          )}
        >
          {copied ? (
            <Check className="size-3.5" aria-hidden="true" />
          ) : (
            <Copy className="size-3.5" aria-hidden="true" />
          )}
          <span aria-hidden="true">{copied ? "Copiado" : "Copiar"}</span>
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-fg">
        <code>{code}</code>
      </pre>
    </div>
  );
}
