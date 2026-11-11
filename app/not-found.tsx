import Link from "next/link";

/** 404 minimalista. */
export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-sm text-fg-subtle">404</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">Página no encontrada</h1>
      <p className="mt-2 max-w-md text-fg-muted">
        La página que buscas no existe o el componente no está en el registro.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg transition-colors duration-fast ease-standard hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
