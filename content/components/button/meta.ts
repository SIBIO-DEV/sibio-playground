import type { ComponentMeta } from "@/lib/types";

export const meta: ComponentMeta = {
  slug: "button",
  name: "Button",
  description:
    "Botón de acción con variantes visuales, tonos semánticos, tamaños y estado de carga.",
  category: "Acciones",
  status: "stable",
  importStatement: 'import { Button } from "@sibio/ui";',
  notes:
    "Button acepta todas las props nativas del elemento <button> (onClick, form, autofocus…) además de las documentadas aquí. Usa siempre la prop type de forma explícita (type='button' o type='submit') para evitar comportamientos inesperados dentro de formularios. Con loading el botón queda deshabilitado y expone aria-busy, así que no hace falta combinarlo con disabled.",
};
