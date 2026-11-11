
import { Button } from "@/components/ui-stub/button";
import type { DocExampleItem } from "@/lib/types";
import { PageHeader } from "@sibio-dev/ui";

export const examples: DocExampleItem[] = [
  {
    title: "Básico",
    description:
      "Layout `classic` con título, descripción y breadcrumbs. Es el diseño original.",
    code: `import { PageHeader } from "@sibio/ui";

export function Demo() {
  return (
    <PageHeader
      title="Usuarios"
      description="Gestiona los usuarios de tu organización."
      breadcrumbs={[
        { label: "Inicio", onClick: () => {} },
        { label: "Usuarios", isCurrent: true },
      ]}
    />
  );
}`,
    preview: (
      <PageHeader
        title="Usuarios"
        description="Gestiona los usuarios de tu organización."
        breadcrumbs={[
          //{ label: "Inicio", onClick: () => {} },
          { label: "Usuarios", isCurrent: true },
        ]}
      />
    ),
  },
  {
    title: "Con ícono, badge y acciones",
    description:
      "Tile con ícono junto al título, badge opcional y botones en el slot `actions`.",
    code: `import { PageHeader } from "@sibio/ui";
import { Button } from "@sibio/ui";
import { Users } from "lucide-react";

export function Demo() {
  return (
    <PageHeader
      title="Equipo"
      description="Miembros activos de tu espacio de trabajo."
      icon={<Users />}
      badge="beta"
      badgeLive
      actions={
        <>
          <Button variant="outline">Invitar</Button>
          <Button>Nuevo miembro</Button>
        </>
      }
    />
  );
}`,
    preview: (
      <PageHeader
        title="Equipo"
        description="Miembros activos de tu espacio de trabajo."
        icon={<span aria-hidden>👥</span>}
        badge="beta"
        badgeLive
        actions={
          <>
            <Button variant="outline">Invitar</Button>
            <Button>Nuevo miembro</Button>
          </>
        }
      />
    ),
  },
  {
    title: "Con estadísticas",
    description:
      "Métricas bajo el título mediante `stats`. No se muestran en el layout `compact`.",
    code: `import { PageHeader } from "@sibio/ui";

export function Demo() {
  return (
    <PageHeader
      title="Panel"
      description="Resumen de la actividad reciente."
      stats={[
        { label: "Usuarios", value: "1,284", hint: "+12%" },
        { label: "Activos", value: "932", hint: "72%" },
        { label: "Pendientes", value: "48" },
      ]}
    />
  );
}`,
    preview: (
      <PageHeader
        title="Panel"
        description="Resumen de la actividad reciente."
        stats={[
          { label: "Usuarios", value: "1,284", hint: "+12%" },
          { label: "Activos", value: "932", hint: "72%" },
          { label: "Pendientes", value: "48" },
        ]}
      />
    ),
  },
  {
    title: "Variante hero con textura",
    description:
      "Layout `hero` con patrón `contours`, tono `accent` y acciones de guía/exportación.",
    code: `import { PageHeader } from "@sibio/ui";

export function Demo() {
  return (
    <PageHeader
      variant="hero"
      tone="accent"
      pattern="contours"
      title="Bienvenido"
      description="Explora los componentes de Sibio UI."
      badge="demo"
      onGuideClick={() => {}}
      guideLabel="Ver guía"
      onExportClick={() => {}}
      exportLabel="Exportar"
    />
  );
}`,
    preview: (
      <PageHeader
        variant="hero"
        tone="accent"
        pattern="contours"
        title="Bienvenido"
        description="Explora los componentes de Sibio UI."
        badge="demo"
        //onGuideClick={() => {}}
        guideLabel="Ver guía"
        //onExportClick={() => {}}
        exportLabel="Exportar"
      />
    ),
  },
  {
    title: "Variante card",
    description:
      "Layout `card` con tono `neutral` y patrón `grid`. Útil para secciones destacadas.",
    code: `import { PageHeader } from "@sibio/ui";

export function Demo() {
  return (
    <PageHeader
      variant="card"
      tone="neutral"
      pattern="grid"
      title="Configuración"
      description="Ajusta las preferencias de tu cuenta."
      accent
    />
  );
}`,
    preview: (
      <PageHeader
        variant="card"
        tone="neutral"
        pattern="grid"
        title="Configuración"
        description="Ajusta las preferencias de tu cuenta."
        accent
      />
    ),
  },
];