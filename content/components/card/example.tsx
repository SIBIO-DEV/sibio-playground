
import { ChipSb } from '@sibio-dev/ui'
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
      <ChipSb
        label='dscsd'
      />
    ),
  },
];