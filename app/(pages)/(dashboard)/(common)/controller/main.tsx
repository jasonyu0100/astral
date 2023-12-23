export function DashboardController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full relative flex flex-row bg-gradient-to-br from-slate-950 to-[#1F052D] from-50% to-90%" style={{height: "calc(100% - 4rem)"}}>
      {children}
    </div>
  );
}
