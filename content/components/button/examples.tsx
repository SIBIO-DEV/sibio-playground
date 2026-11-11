import { ArrowRight, Plus, Trash2 } from "lucide-react";
// ⚠️ STUB TEMPORAL: cambia este import a `@sibio/ui` cuando la librería esté
// disponible y borra `components/ui-stub/`. Ver README.
import { Button } from "@/components/ui-stub/button";
import type { DocExampleItem } from "@/lib/types";

export const examples: DocExampleItem[] = [
  {
    title: "Variantes",
    description:
      "Cuatro estilos para distintas jerarquías: sólido para la acción principal, contorno y sutil para acciones secundarias, fantasma para el resto.",
    code: `import { Button } from "@sibio/ui";

export function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="solid">Sólido</Button>
      <Button variant="outline">Contorno</Button>
      <Button variant="ghost">Fantasma</Button>
      <Button variant="subtle">Sutil</Button>
    </div>
  );
}`,
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="solid">Sólido</Button>
        <Button variant="outline">Contorno</Button>
        <Button variant="ghost">Fantasma</Button>
        <Button variant="subtle">Sutil</Button>
      </div>
    ),
  },
  {
    title: "Tonos",
    description:
      "El tono marca la intención semántica: acento (por defecto), neutro, peligro y éxito.",
    code: `import { Button } from "@sibio/ui";

export function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button tone="accent">Guardar</Button>
      <Button tone="neutral">Cancelar</Button>
      <Button tone="danger">Eliminar</Button>
      <Button tone="success">Aprobar</Button>
    </div>
  );
}`,
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button tone="accent">Guardar</Button>
        <Button tone="neutral">Cancelar</Button>
        <Button tone="danger">Eliminar</Button>
        <Button tone="success">Aprobar</Button>
      </div>
    ),
  },
  {
    title: "Tamaños",
    description: "Tres alturas para adaptarse a barras de herramientas, formularios y héroes.",
    code: `import { Button } from "@sibio/ui";

export function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Compacto</Button>
      <Button size="md">Normal</Button>
      <Button size="lg">Grande</Button>
    </div>
  );
}`,
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="sm">Compacto</Button>
        <Button size="md">Normal</Button>
        <Button size="lg">Grande</Button>
      </div>
    ),
  },
  {
    title: "Ícono, carga y deshabilitado",
    description:
      "Combinación de ícono, estado de carga (con spinner y aria-busy) y estado deshabilitado.",
    code: `import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { Button } from "@sibio/ui";

export function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button icon={<Plus size={16} />}>Añadir</Button>
      <Button tone="danger" variant="outline" icon={<Trash2 size={16} />}>
        Eliminar
      </Button>
      <Button loading>Guardando…</Button>
      <Button variant="ghost" disabled>
        Deshabilitado
      </Button>
      <Button variant="subtle">
        Continuar <ArrowRight size={16} />
      </Button>
    </div>
  );
}`,
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button icon={<Plus className="size-4" aria-hidden="true" />}>Añadir</Button>
        <Button tone="danger" variant="outline" icon={<Trash2 className="size-4" aria-hidden="true" />}>
          Eliminar
        </Button>
        <Button loading>Guardando…</Button>
        <Button variant="ghost" disabled>
          Deshabilitado
        </Button>
        <Button variant="subtle">
          Continuar <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    ),
  },
];
