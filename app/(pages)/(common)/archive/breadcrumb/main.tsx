export function Breadcrumb({ children }: { children: React.ReactNode }) {
  return (
    <nav
      className="justify-between px-4 py-2 text-white rounded-lg sm:flex bg-slate-900 bg-opacity-50"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center mb-3 space-x-2 sm:mb-0">
        {children}
      </ol>
    </nav>
  );
}
