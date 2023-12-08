export function DashboardBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="pl-[3rem] pt-[2.5rem] pr-[2rem] h-full bg-gradient-to-br from-slate-950 to-[#1F052D] from-50% to-90%" style={{width:"calc(100% - 15rem)"}}>
      {children}
      </div>
  );
}
