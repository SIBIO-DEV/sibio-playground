# Sibio UI Playground

Playground y sitio de documentación para la librería de componentes **`@sibio/ui`**.

Es una app **Next.js (App Router, TypeScript)** que **no implementa la librería**:
solo la consume y la documenta. Cada componente documentado tiene ejemplos vivos
(renderizados con el componente real), tabla de props y notas de uso, con tema
claro/oscuro/sistema y un diseño minimalista.

## Requisitos

- **Node.js ≥ 20.9** (requisito de Next.js 16; el proyecto se creó con Next 16.4.6)
- **pnpm ≥ 8** (único gestor de paquetes permitido: nada de `npm`/`yarn`/`bun`)

## Stack

- Next.js 16 (App Router) + TypeScript estricto
- Tailwind CSS v4 (tokens vía CSS vars, sin `tailwind.config`)
- `next-themes` (tema claro/oscuro/sistema sin flash)
- `lucide-react` (íconos)
- Sin librerías de UI ni fuentes externas: Tailwind puro + fuente del sistema

## Instalación y uso

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Otros comandos:

```bash
pnpm build      # build de producción (typecheck incluido)
pnpm lint       # ESLint (eslint-config-next)
pnpm start      # sirve el build de producción
```

## Estructura de carpetas

```
playground/
├── app/
│   ├── layout.tsx                  # Layout raíz: ThemeProvider, header, main, footer
│   ├── page.tsx                    # Home: hero + índice por categorías
│   ├── globals.css                 # Tailwind v4 + tokens de temas (CSS vars)
│   ├── not-found.tsx               # 404
│   └── components/
│       └── [...slug]/page.tsx      # Página dinámica de doc de cada componente
├── components/
│   ├── docs/                       # Componentes PARA la doc (reutilizables)
│   │   ├── doc-page.tsx            # Wrapper: título + descripción + badge
│   │   ├── doc-section.tsx         # Sección con ancla (#id para la TOC)
│   │   ├── doc-props-table.tsx     # Tabla de props tipada
│   │   ├── doc-example.tsx         # Preview vivo + código
│   │   ├── doc-code-block.tsx      # <pre><code> con botón copiar
│   │   ├── doc-toc.tsx             # Lista de anclas de la página
│   │   └── doc-layout.tsx          # Sidebar + contenido + TOC (details en mobile)
│   ├── layout/
│   │   ├── site-header.tsx         # Header sticky: logo, nav, toggle de tema
│   │   ├── site-sidebar.tsx        # Navegación de componentes (activa por ruta)
│   │   ├── site-footer.tsx         # Footer "Hecho con Next.js"
│   │   ├── theme-provider.tsx     # Config central de next-themes
│   │   └── theme-toggle.tsx        # Botón light/dark/system (Sun/Moon/Monitor)
│   ├── ui/                         # UI interna del playground (no de la librería)
│   │   ├── badge.tsx
│   │   ├── button-link.tsx
│   │   └── separator.tsx
│   └── ui-stub/                    # ⚠️ STUB TEMPORAL (ver "Conexión con @sibio/ui")
│       └── button.tsx
├── lib/
│   ├── components-registry.ts      # Registro central de componentes documentados
│   ├── types.ts                    # Tipos compartidos de la doc
│   ├── utils.ts                    # cn() y helpers
│   └── site.ts                     # Nombre/desc/versión del sitio (config)
├── content/
│   └── components/                 # Una carpeta por componente documentado
│       └── button/
│           ├── meta.ts             # Metadatos: nombre, descripción, categoría…
│           ├── examples.tsx        # Ejemplos vivos (JSX real + código)
│           └── props.ts            # Filas de la tabla de props
├── next.config.ts                  # (create-next-app genera .ts; equivale a .mjs)
└── package.json
```

> Nota: `create-next-app` genera `next.config.ts` en lugar de `next.config.mjs`.
> Es equivalente y preferible en un proyecto TypeScript.

## Cómo añadir un componente a la documentación

**Solo 2 pasos** (una carpeta + una línea en el registro). Nada de tocar código
infraestructural: la home, el sidebar, la ruta `/components/<slug>`, la TOC y
la metadata se generan solos.

### 1. Crea `content/components/<slug>/` con 3 archivos

Siguiendo el patrón de `content/components/button/`:

**`meta.ts`** — metadatos del componente:

```ts
import type { ComponentMeta } from "@/lib/types";

export const meta: ComponentMeta = {
  slug: "button",            // debe coincidir con el nombre de la carpeta
  name: "Button",
  description: "Botón de acción con variantes, tonos y estado de carga.",
  category: "Acciones",      // agrupa en la home y el sidebar
  status: "stable",          // "stable" | "beta" (opcional)
  importStatement: 'import { Button } from "@sibio/ui";',
  notes: "Notas de uso opcionales (sección «Notas»).",
};
```

**`examples.tsx`** — ejemplos vivos (el `preview` es JSX real; el `code` es el
string que se muestra):

```tsx
import { Button } from "@/components/ui-stub/button"; // → "@sibio/ui" cuando exista
import type { DocExampleItem } from "@/lib/types";

export const examples: DocExampleItem[] = [
  {
    title: "Variantes",
    description: "Descripción corta del ejemplo.",
    code: `import { Button } from "@sibio/ui";

export function Demo() {
  return <Button variant="outline">Contorno</Button>;
}`,
    preview: <Button variant="outline">Contorno</Button>,
  },
];
```

**`props.ts`** — filas de la tabla de props:

```ts
import type { PropRow } from "@/lib/types";

export const props: PropRow[] = [
  {
    name: "variant",
    type: '"solid" | "outline" | "ghost"',
    default: '"solid"',
    description: "Estilo visual del botón.",
    required: false, // opcional: muestra el badge «requerido»
  },
];
```

### 2. Añádelo al registro

En `lib/components-registry.ts`, importa los 3 archivos y añade una entrada:

```ts
import { meta as buttonMeta } from "@/content/components/button/meta";
import { examples as buttonExamples } from "@/content/components/button/examples";
import { props as buttonProps } from "@/content/components/button/props";

export const componentsRegistry: ComponentDoc[] = [
  defineComponentDoc({ meta: buttonMeta, examples: buttonExamples, props: buttonProps }),
  // 👇 tu nuevo componente
  defineComponentDoc({ meta: inputMeta, examples: inputExamples, props: inputProps }),
];
```

Listo. Con `pnpm dev` verás el componente en la home (bajo su categoría), en el
sidebar y en `http://localhost:3000/components/<slug>`.

## Sistema de temas

- **Configuración**: `components/layout/theme-provider.tsx` (next-themes con
  `attribute="class"`, `defaultTheme="system"`). El toggle de 3 estados
  (claro → oscuro → sistema) está en `components/layout/theme-toggle.tsx` y
  persiste en `localStorage` (gestionado por next-themes).
- **Tokens**: todos los CSS vars están en `app/globals.css` bajo `:root`
  (claro) y `.dark` (oscuro): `--color-bg`, `--color-fg`, `--color-accent`,
  `--radius-*`, `--shadow-*`, `--duration-*`, `--ease-*`, etc.
- Tailwind v4 los mapea a utilitarias vía `@theme inline`: `bg-bg`,
  `text-fg-muted`, `border-border`, `bg-accent-subtle`, `rounded-lg`,
  `shadow-sm`, `duration-fast`, `ease-standard`, …
- Para cambiar el acento (esmeralda por defecto), edita `--color-accent`,
  `--color-accent-fg`, `--color-accent-subtle` y `--color-ring` en ambos bloques.
- El `<html>` usa `suppressHydrationWarning` para evitar el flash al cargar.

## Conexión con la librería real (`@sibio/ui`)

Hoy los ejemplos importan un **stub local** (`components/ui-stub/button.tsx`)
que simula el `Button` de la librería. Está claramente marcado como temporal.

Cuando `@sibio/ui` esté disponible:

1. Instálalo como workspace o paquete:
   - Workspace: añade en el `pnpm-workspace.yaml` raíz el paquete de la
     librería y ejecuta `pnpm add "@sibio/ui" --workspace`.
   - O alias en `tsconfig.json` + `next.config.ts` si está en una ruta local.
2. Cambia el import en `content/components/*/examples.tsx`:
   ```diff
   - import { Button } from "@/components/ui-stub/button";
   + import { Button } from "@sibio/ui";
   ```
3. Borra la carpeta `components/ui-stub/`.

La doc (meta, props, código mostrado) ya está escrita contra la API de
`@sibio/ui`, así que no hay que cambiar nada más.

## Accesibilidad

- Landmarks correctos (`header`, `nav`, `main`, `aside`, `footer`).
- Foco visible (`focus-visible:ring-2`) en todos los interactivos.
- `aria-label` en botones de solo ícono (toggle de tema, copiar código).
- `prefers-reduced-motion` respetado (ver `app/globals.css`).
- Contraste AA en ambos temas (neutros puros + esmeralda).

## Notas sobre dependencias

Solo las especificadas: `next-themes` y `lucide-react` además del set de
`create-next-app`. La utilidad `cn()` de `lib/utils.ts` es una alternativa
mínima a `clsx`/`tailwind-merge` para no añadir dependencias.
