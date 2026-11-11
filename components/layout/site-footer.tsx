import { SITE } from "@/lib/site";

/** Footer global minimalista. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-6 text-sm text-fg-subtle sm:px-6">
        <p>Hecho con Next.js</p>
        <p className="font-mono text-xs">
          {SITE.libraryName} · v{SITE.version}
        </p>
      </div>
    </footer>
  );
}
