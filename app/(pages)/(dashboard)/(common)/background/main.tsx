export function DashboardBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="pl-[3rem] pt-[2.5rem] pr-[2rem] h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900" style={{width:"calc(100% - 15rem)"}}>
      {children}
      </div>
  );
}
