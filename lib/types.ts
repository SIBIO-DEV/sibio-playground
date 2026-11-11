import type { ReactNode } from "react";

/** Estado de madurez de un componente documentado. */
export type ComponentStatus = "stable" | "beta";

/**
 * Metadatos descriptivos de un componente documentado.
 * Se definen en `content/components/<slug>/meta.ts`.
 */
export interface ComponentMeta {
  /** Slug usado en la URL: `/components/<slug>`. Debe coincidir con la carpeta. */
  slug: string;
  /** Nombre público del componente (ej. "Button"). */
  name: string;
  /** Descripción corta, una línea. */
  description: string;
  /** Categoría para agrupar en la home y el sidebar (ej. "Acciones"). */
  category: string;
  status?: ComponentStatus;
  /** Notas de uso que se renderizan en la sección "Notas" (opcional). */
  notes?: string;
  /** Sentencia de importación que se muestra en la página del componente. */
  importStatement?: string;
}

/** Un ejemplo vivo de un componente: preview + código. */
export interface DocExampleItem {
  title: string;
  description?: string;
  /** Código que se muestra en el bloque ( JSX como string ). */
  code: string;
  /** Preview vivo renderizado con el componente real. */
  preview: ReactNode;
}

/** Fila de la tabla de props. */
export interface PropRow {
  name: string;
  /** Tipo tal y como se escribe en TypeScript (string, no tipo real). */
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

/** Contenido completo de la doc de un componente (los 3 archivos de su carpeta). */
export interface ComponentContent {
  meta: ComponentMeta;
  examples: DocExampleItem[];
  props: PropRow[];
}

/**
 * Entrada del registro central de componentes (`lib/components-registry.ts`).
 * Los campos planos vienen de `meta` para consumirlos fácilmente en la home
 * y el sidebar; `content` tiene todo lo que necesita la página de doc.
 */
export interface ComponentDoc {
  slug: string;
  name: string;
  description: string;
  category: string;
  status?: ComponentStatus;
  notes?: string;
  importStatement?: string;
  content: ComponentContent;
}

/** Item de la tabla de contenidos de una página de doc. */
export interface DocTocItem {
  id: string;
  title: string;
}
