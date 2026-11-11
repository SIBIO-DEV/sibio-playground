import type { DocTocItem } from "@/lib/types";

export interface DocTocProps {
  items: DocTocItem[];
}

/**
 * Tabla de contenidos de una página de doc.
 * Lista de anclas a las secciones (`#id`).
 */
export function DocToc({ items }: DocTocProps) {
  return (
    <ul className="space-y-1 text-sm">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block rounded-md px-2 py-1 text-fg-muted transition-colors duration-fast ease-standard hover:bg-bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
