export function DashboardSidebarMinimisedContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='relative flex h-full w-[4.5rem] flex-shrink-0 flex-col overflow-y-auto bg-slate-900 px-[1rem] py-[1rem]'>
      {children}
    </div>
  );
}
