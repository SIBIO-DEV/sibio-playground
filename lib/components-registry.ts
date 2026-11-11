import type { ComponentContent, ComponentDoc } from "@/lib/types";
import { meta as buttonMeta } from "@/content/components/button/meta";
import { examples as buttonExamples } from "@/content/components/button/examples";
import { props as buttonProps } from "@/content/components/button/props";

/**
 * Registro central de componentes documentados.
 *
 * ── Cómo añadir un componente nuevo ──────────────────────────────────────
 * 1. Crea `content/components/<slug>/` con tres archivos:
 *    `meta.ts` (metadatos), `examples.tsx` (ejemplos vivos) y
 *    `props.ts` (filas para la tabla de props).
 * 2. Añádelo aquí con una llamada a `defineComponentDoc`.
 *
 * Nada más: la home, el sidebar y la página `/components/<slug>` se
 * actualizan solos. Ver README para el paso a paso.
 */

function defineComponentDoc(content: ComponentContent): ComponentDoc {
  const { meta } = content;
  return {
    slug: meta.slug,
    name: meta.name,
    description: meta.description,
    category: meta.category,
    status: meta.status,
    notes: meta.notes,
    importStatement: meta.importStatement,
    content,
  };
}

export const componentsRegistry: ComponentDoc[] = [
  defineComponentDoc({
    meta: buttonMeta,
    examples: buttonExamples,
    props: buttonProps,
  }),
];

/** Busca un componente por su slug (`undefined` si no existe). */
export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return componentsRegistry.find((doc) => doc.slug === slug);
}

/** Componentes agrupados por categoría y ordenados alfabéticamente. */
export interface ComponentCategory {
  category: string;
  docs: ComponentDoc[];
}

export function getComponentCategories(): ComponentCategory[] {
  const categories = new Map<string, ComponentDoc[]>();
  for (const doc of componentsRegistry) {
    const docs = categories.get(doc.category);
    if (docs) {
      docs.push(doc);
    } else {
      categories.set(doc.category, [doc]);
    }
  }
  return [...categories.entries()]
    .map(([category, docs]) => ({
      category,
      docs: [...docs].sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => a.category.localeCompare(b.category));
}
