"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getComponentCategories } from "@/lib/components-registry";
import { cn } from "@/lib/utils";

/**
 * Sidebar de navegación con todos los componentes documentados,
 * agrupados por categoría. Resalta la página activa.
 */
export function SiteSidebar() {
  const pathname = usePathname();
  const categories = getComponentCategories();

  return (
    <nav aria-label="Componentes" className="space-y-6">
      {categories.map(({ category, docs }) => (
        <div key={category}>
          <h3 className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
            {category}
          </h3>
          <ul className="mt-2 space-y-0.5">
            {docs.map((doc) => {
              const href = `/components/${doc.slug}`;
              const isActive = pathname === href;
              return (
                <li key={doc.slug}>
                  <Link
                    href={href}
                    prefetch={true}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-2 py-1.5 text-sm transition-colors duration-fast ease-standard",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-accent-subtle font-medium text-accent"
                        : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
                    )}
                  >
                    {doc.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
