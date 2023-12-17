export function TopbarContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[2rem] h-[5rem] bg-gradient-to-br from-slate-900 to-slate-950 flex flex-row">
      {children}
    </div>
  );
}
