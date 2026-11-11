import { cn } from "@/lib/utils";

export interface SeparatorProps {
  className?: string;
}

/** Separador horizontal minimalista. */
export function Separator({ className }: SeparatorProps) {
  return <hr className={cn("border-border", className)} />;
}
