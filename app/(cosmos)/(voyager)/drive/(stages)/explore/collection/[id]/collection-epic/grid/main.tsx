export function CollectionResourceGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='flex flex-row flex-wrap gap-[3rem]'>{children}</div>;
}
