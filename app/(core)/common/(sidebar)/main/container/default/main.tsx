export function DashboardSidebarDefaultContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='relative flex h-full w-[15rem] flex-shrink-0 flex-col overflow-y-auto  border-r border-slate-300 border-opacity-5 bg-gradient-to-br from-[#1E293B] from-0% to-[#0F172A] to-80% px-[1rem] py-[1rem]'>
      {children}
    </div>
  );
}
