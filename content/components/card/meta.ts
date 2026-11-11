import type { ComponentMeta } from "@/lib/types";

export const meta: ComponentMeta = {
  slug: "card",
  name: "Card",
  description:
    "Card libre de uso",
  category: "XS",
  status: "stable",
  importStatement: 'import { PageHeader } from "@sibio/ui";',
  notes:
    "El layout por defecto es `classic`. El tono por defecto es `success`. La textura solo se aplica en `card` y `hero`; por defecto `hero` usa `contours` y el resto `none`. El slot `actions` es libre: puedes poner botones, menús, etc.",
};