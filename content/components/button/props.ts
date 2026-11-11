import type { PropRow } from "@/lib/types";

export const props: PropRow[] = [
  {
    name: "variant",
    type: '"solid" | "outline" | "ghost" | "subtle"',
    default: '"solid"',
    description: "Estilo visual del botón.",
  },
  {
    name: "tone",
    type: '"accent" | "neutral" | "danger" | "success"',
    default: '"accent"',
    description: "Tono semántico del color.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Tamaño del botón (altura, padding y tipografía).",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description:
      "Muestra un spinner, deshabilita la interacción y expone `aria-busy`.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Icono (ej. de lucide-react) que se renderiza a la izquierda del contenido.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Deshabilita el botón y reduce su opacidad.",
  },
  {
    name: "type",
    type: '"button" | "submit" | "reset"',
    default: '"button"',
    description: "Tipo del botón nativo. Decláralo siempre de forma explícita.",
  },
  {
    name: "...rest",
    type: "ButtonHTMLAttributes<HTMLButtonElement>",
    description: "Cualquier prop nativa de `<button>` (`onClick`, `form`, `aria-*`, …).",
  },
];
