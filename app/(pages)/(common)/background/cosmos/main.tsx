export function CosmosBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-violet-950 to-slate-950">
      {children}
    </div>
  );
}
