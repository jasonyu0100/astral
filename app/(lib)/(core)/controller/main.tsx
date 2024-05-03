export function DashboardController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className='relative flex w-full flex-row'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {children}
    </div>
  );
}
