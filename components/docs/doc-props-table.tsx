import type { PropRow } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export interface DocPropsTableProps {
  rows: PropRow[];
}

/** Tabla responsive de props con tipografía mono y badge "requerido". */
export function DocPropsTable({ rows }: DocPropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-bg-subtle">
            <th scope="col" className="px-4 py-3 font-medium">
              Prop
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Tipo
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Por defecto
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Descripción
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr
              key={row.name}
              className="align-top transition-colors duration-fast ease-standard hover:bg-bg-subtle/60"
            >
              <td className="px-4 py-3 font-mono text-[13px] text-fg">
                <span className="inline-flex flex-wrap items-center gap-2">
                  {row.name}
                  {row.required ? <Badge tone="accent">requerido</Badge> : null}
                </span>
              </td>
              <td className="px-4 py-3 font-mono text-[13px] text-accent">{row.type}</td>
              <td className="px-4 py-3 font-mono text-[13px] text-fg-subtle">
                {row.default ?? "—"}
              </td>
              <td className="max-w-md px-4 py-3 leading-relaxed text-fg-muted">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
