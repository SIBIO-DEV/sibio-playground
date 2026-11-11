/**
 * ⚠️ STUB TEMPORAL — NO ES PARTE DE LA LIBRERÍA.
 *
 * Este archivo simula el `Button` de `@sibio/ui` mientras el paquete real
 * no está publicado. Cuando `@sibio/ui` esté disponible:
 *
 *   1. Instálalo (`pnpm add @sibio/ui`) o conéctalo como workspace / alias.
 *   2. Cambia el import de los archivos examples.tsx de
 *      content/components/<slug>/  de @/components/ui-stub/button a @sibio/ui.
 *   3. Borra esta carpeta.
 *
 * No lo uses como implementación definitiva: solo es un doble de pruebas
 * para que el playground tenga algo que documentar.
 */
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "solid" | "outline" | "ghost" | "subtle";
export type ButtonTone = "accent" | "neutral" | "danger" | "success";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estilo visual. Por defecto `"solid"`. */
  variant?: ButtonVariant;
  /** Tono semántico. Por defecto `"accent"`. */
  tone?: ButtonTone;
  /** Tamaño. Por defecto `"md"`. */
  size?: ButtonSize;
  /** Muestra un spinner y deshabilita la interacción. */
  loading?: boolean;
  /** Icono que se renderiza antes del contenido. */
  icon?: ReactNode;
}

const baseClasses =
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium " +
  "transition-colors duration-fast ease-standard " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
  "disabled:pointer-events-none disabled:opacity-50";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

const variantToneClasses: Record<ButtonVariant, Record<ButtonTone, string>> = {
  solid: {
    accent: "bg-accent text-accent-fg hover:bg-accent/90",
    neutral: "bg-fg text-bg hover:bg-fg/90",
    danger: "bg-danger text-bg hover:bg-danger/90",
    success: "bg-success text-bg hover:bg-success/90",
  },
  outline: {
    accent: "border border-accent/40 text-accent hover:bg-accent-subtle",
    neutral: "border border-border-strong text-fg hover:bg-bg-subtle",
    danger: "border border-danger/40 text-danger hover:bg-danger-subtle",
    success: "border border-success/40 text-success hover:bg-success-subtle",
  },
  ghost: {
    accent: "text-accent hover:bg-accent-subtle",
    neutral: "text-fg hover:bg-bg-subtle",
    danger: "text-danger hover:bg-danger-subtle",
    success: "text-success hover:bg-success-subtle",
  },
  subtle: {
    accent: "bg-accent-subtle text-accent hover:bg-accent/20",
    neutral: "bg-bg-subtle text-fg hover:bg-bg-elevated",
    danger: "bg-danger-subtle text-danger hover:bg-danger/20",
    success: "bg-success-subtle text-success hover:bg-success/20",
  },
};

export function Button({
  variant = "solid",
  tone = "accent",
  size = "md",
  loading = false,
  icon,
  type = "button",
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantToneClasses[variant][tone],
        className,
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        icon
      )}
      {children}
    </button>
  );
}
