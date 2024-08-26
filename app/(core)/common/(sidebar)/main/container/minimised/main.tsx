export function DashboardSidebarMinimisedContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='relative flex h-full w-[4.5rem] flex-shrink-0 flex-col overflow-y-auto border-r border-slate-300 border-opacity-10 bg-slate-800 px-[1rem] py-[1rem]'>
      {children}
    </div>
  );
}
