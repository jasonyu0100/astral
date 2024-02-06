export function DashboardController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className='relative flex w-full flex-row bg-gradient-to-br from-slate-950 from-50% to-[#1F052D] to-90%'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {children}
    </div>
  );
}
