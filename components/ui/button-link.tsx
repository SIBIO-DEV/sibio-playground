import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonLinkSize = "md" | "lg";

export interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  size?: ButtonLinkSize;
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-accent font-medium text-accent-fg " +
  "transition-colors duration-fast ease-standard " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
  "hover:bg-accent/90";

const sizeClasses: Record<ButtonLinkSize, string> = {
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

/** `<Link>` con estilos de botón primario, para CTAs de la doc. */
export function ButtonLink({ href, children, size = "md", className }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(baseClasses, sizeClasses[size], className)}>
      {children}
    </Link>
  );
}
