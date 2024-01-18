export function DraftSidebarButtonRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-row space-x-[1rem] items-center'>{children}</div>
  );
}
