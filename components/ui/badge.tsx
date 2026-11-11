import type { ReactNode } from "react";
import type { ComponentStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

export type BadgeTone = "neutral" | "accent" | "success" | "warning" | "danger";

export interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: "border-border bg-bg-subtle text-fg-muted",
  accent: "border-accent/30 bg-accent-subtle text-accent",
  success: "border-success/30 bg-success-subtle text-success",
  warning: "border-warning/30 bg-warning-subtle text-warning",
  danger: "border-danger/30 bg-danger-subtle text-danger",
};

export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Badge de estado de un componente ("Estable" / "Beta"). */
export function StatusBadge({ status }: { status: ComponentStatus }) {
  if (status === "beta") {
    return <Badge tone="warning">Beta</Badge>;
  }
  return <Badge tone="success">Estable</Badge>;
}
