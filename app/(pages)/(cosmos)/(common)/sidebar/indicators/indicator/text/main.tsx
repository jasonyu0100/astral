export function IndicatorText({ children, active }: { children: React.ReactNode, active: boolean }) {
  return active ? (
    <div className="text-center text-white text-2xl font-bold leading-9">
      {children}
    </div>
  ) : (
    <div className="text-center text-slate-500 text-2xl font-bold leading-9">
      {children}
    </div>
  );
}
