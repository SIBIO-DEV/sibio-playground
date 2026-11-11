"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * Configuración central del sistema de temas (claro / oscuro / sistema).
 * `attribute="class"` pone `class="dark"` en `<html>`; `disableTransitionOnChange`
 * evita el flash de transiciones al cambiar de tema.
 */
export function ThemeProvider(props: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    />
  );
}
