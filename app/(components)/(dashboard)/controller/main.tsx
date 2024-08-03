export function DashboardController({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className='relative flex h-full w-full flex-row'>{children}</div>;
}
