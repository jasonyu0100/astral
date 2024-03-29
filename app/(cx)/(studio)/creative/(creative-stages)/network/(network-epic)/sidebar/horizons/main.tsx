export function CreativeNetworkSidebarHorizons({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-full w-full flex-col overflow-auto pr-[1rem]'>
      <div className='flex w-full flex-col space-y-[1rem]'>{children}</div>
    </div>
  );
}
