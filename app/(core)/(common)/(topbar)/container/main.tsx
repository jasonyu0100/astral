export function DashboardTopbarContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex h-[4rem] flex-row border-b-[1px] border-slate-800 border-opacity-30 bg-gradient-to-br from-slate-900 to-slate-950 px-[1rem]'>
      {children}
    </div>
  );
}
