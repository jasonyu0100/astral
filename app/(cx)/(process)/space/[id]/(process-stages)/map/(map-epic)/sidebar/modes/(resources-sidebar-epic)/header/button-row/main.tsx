export function MapSidebarButtonRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-row items-center space-x-[1rem]'>{children}</div>
  );
}
