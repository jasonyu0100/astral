export function DashboardController({
  fullHeight = false,
  children,
}: {
  fullHeight?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className='relative flex w-full flex-row'
      style={{ height: fullHeight ? '100%' : 'calc(100% - 4rem)' }}
    >
      {children}
    </div>
  );
}
