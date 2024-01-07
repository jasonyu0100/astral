export function PortalContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-3/4 max-h-[1000px] aspect-[13/16] bg-stone-100 shadow-2xl">
      {children}
    </div>
  );
}
