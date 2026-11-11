/** Valores aceptados por `cn`. Los falsy se descartan. */
type ClassValue = string | number | false | null | undefined;

/**
 * Une clases condicionales sin dependencias externas
 * (alternativa mínima a clsx/tailwind-merge).
 *
 * @example cn("base", isActive && "active", variant)
 */
export function cn(...values: ClassValue[]): string {
  return values.filter((value): value is string | number => Boolean(value)).join(" ");
}
