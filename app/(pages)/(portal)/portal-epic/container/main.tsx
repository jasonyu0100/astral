export function PortalContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full aspect-[13/16] bg-stone-100 shadow-2xl">
      {children}
    </div>
  );
}
