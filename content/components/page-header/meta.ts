import type { ComponentMeta } from "@/lib/types";

export const meta: ComponentMeta = {
  slug: "page-header",
  name: "PageHeader",
  description:
    "Cabecera de página con breadcrumbs, título, descripción, badge, acciones y métricas. Cuatro layouts y tonos que derivan de los tokens del tema.",
  category: "Layout",
  status: "stable",
  importStatement: 'import { PageHeader } from "@sibio/ui";',
  notes:
    "El layout por defecto es `classic`. El tono por defecto es `success`. La textura solo se aplica en `card` y `hero`; por defecto `hero` usa `contours` y el resto `none`. El slot `actions` es libre: puedes poner botones, menús, etc.",
};