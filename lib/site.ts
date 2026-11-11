import pkg from "../package.json";

/**
 * Configuración del sitio en un solo lugar.
 * Cambia aquí el nombre, descripción o librería documentada.
 */
export const SITE = {
  /** Nombre mostrado en header, hero y metadata. */
  name: "Sibio UI Playground",
  /** Descripción corta del sitio (meta description). */
  description:
    "Playground y documentación viva de los componentes de la librería @sibio/ui: ejemplos interactivos, tabla de props y notas de uso.",
  /** Nombre del paquete de la librería que se documenta. */
  libraryName: "@sibio/ui",
  /** Versión (leída de package.json para no desincronizarse). */
  version: pkg.version,
} as const;

export type SiteConfig = typeof SITE;
