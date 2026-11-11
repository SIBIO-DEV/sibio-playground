"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const THEME_ORDER = ["light", "dark", "system"] as const;
type ThemeOption = (typeof THEME_ORDER)[number];

const OPTION_LABELS: Record<ThemeOption, string> = {
  light: "claro",
  dark: "oscuro",
  system: "sistema",
};

const OPTION_ICONS: Record<ThemeOption, LucideIcon> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

const emptySubscribe = () => () => {};

/**
 * Devuelve `false` durante SSR e hidratación y `true` después.
 * Patrón canónico de "¿ya estamos en el cliente?" sin efectos con setState
 * (https://react.dev/reference/react/useSyncExternalStore).
 */
function useIsHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/**
 * Toggle de tema de 3 estados: claro → oscuro → sistema → claro.
 * Muestra el ícono del tema actual y cicla al siguiente al hacer clic.
 * El placeholder antes del montaje evita mismatch de hidratación
 * (el tema solo se conoce en el cliente).
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsHydrated();

  const current: ThemeOption = THEME_ORDER.find((option) => option === theme) ?? "system";
  const next = THEME_ORDER[(THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length];
  const Icon = OPTION_ICONS[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={
        mounted
          ? `Cambiar tema (actual: ${OPTION_LABELS[current]}, siguiente: ${OPTION_LABELS[next]})`
          : "Cambiar tema"
      }
      title={
        mounted ? `Tema: ${OPTION_LABELS[current]} (clic para cambiar)` : "Cambiar tema"
      }
      className="inline-flex size-9 items-center justify-center rounded-md text-fg-muted transition-colors duration-fast ease-standard hover:bg-bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {mounted ? (
        <Icon className="size-4" aria-hidden="true" />
      ) : (
        <span className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
