export function IndicatorText({ children, active }: { children: React.ReactNode, active: boolean }) {
  return active ? (
    <div className="text-center text-white text-xl font-bold leading-9">
      {children}
    </div>
  ) : (
    <div className="text-center text-slate-500 text-xl font-bold leading-9">
      {children}
    </div>
  );
}
