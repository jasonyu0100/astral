export function NetworkSidebarList({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className='flex flex-col space-y-[1rem]'>{children}</div>;
}
