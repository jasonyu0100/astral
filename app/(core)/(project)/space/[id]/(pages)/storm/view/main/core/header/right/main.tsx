export function SpaceStormHeaderRight({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className='flex w-1/3 flex-row justify-end'>{children}</div>;
}
