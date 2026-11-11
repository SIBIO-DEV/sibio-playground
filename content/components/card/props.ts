import type { PropRow } from "@/lib/types";

export const props: PropRow[] = [
  {
    name: "title",
    type: "string",
    description: "Título principal de la página. Obligatorio.",
    required: true,
  },
  {
    name: "description",
    type: "string",
    description: "Texto descriptivo bajo el título.",
    required: false,
  },
  {
    name: "breadcrumbs",
    type: "BreadcrumbItem[]",
    description:
      "Migas de pan. Cada item: `{ label, onClick?, isCurrent? }`. El último suele marcarse con `isCurrent`.",
    required: false,
  },
  {
    name: "badge",
    type: "ReactNode",
    description: 'Badge opcional junto al título (ej. "beta", "demo").',
    required: false,
  },
  {
    name: "badgeLive",
    type: "boolean",
    default: "false",
    description: "Muestra un punto pulsante dentro del badge (estado «en vivo»).",
    required: false,
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Ícono en un tile con degradado junto al título.",
    required: false,
  },
  {
    name: "actions",
    type: "ReactNode",
    description: "Slot libre a la derecha del header (botones, menús, etc.).",
    required: false,
  },
  {
    name: "stats",
    type: "PageHeaderStat[]",
    description:
      "Métricas bajo el título: `{ label, value, hint? }`. No se muestran en `compact`.",
    required: false,
  },
  {
    name: "onGuideClick",
    type: "() => void",
    description: "Callback del botón de guía.",
    required: false,
  },
  {
    name: "guideLabel",
    type: "string",
    description: "Texto del botón de guía.",
    required: false,
  },
  {
    name: "onExportClick",
    type: "() => void",
    description: "Callback del botón de exportar.",
    required: false,
  },
  {
    name: "exportLabel",
    type: "string",
    description: "Texto del botón de exportar (escritorio).",
    required: false,
  },
  {
    name: "exportLabelShort",
    type: "string",
    description: "Texto corto del botón de exportar (móvil).",
    required: false,
  },
  {
    name: "exportDisabled",
    type: "boolean",
    default: "false",
    description: "Deshabilita el botón de exportar.",
    required: false,
  },
  {
    name: "exportLoading",
    type: "boolean",
    default: "false",
    description: "Muestra estado de carga en el botón de exportar.",
    required: false,
  },
  {
    name: "accent",
    type: "boolean",
    default: "false",
    description: "Línea de acento vertical a la izquierda del título (solo `classic`).",
    required: false,
  },
  {
    name: "variant",
    type: '"classic" | "card" | "compact" | "hero"',
    default: '"classic"',
    description: "Layout del header.",
    required: false,
  },
  {
    name: "tone",
    type: '"success" | "accent" | "primary" | "neutral"',
    default: '"success"',
    description: "Color del header. Todos derivan de tokens del tema.",
    required: false,
  },
  {
    name: "pattern",
    type: '"none" | "dots" | "grid" | "contours"',
    default: '"contours" en hero, "none" en el resto',
    description: "Textura decorativa (solo se aplica en `card` y `hero`).",
    required: false,
  },
  {
    name: "animate",
    type: "boolean",
    default: "true",
    description: "Entrada escalonada al montar.",
    required: false,
  },
];