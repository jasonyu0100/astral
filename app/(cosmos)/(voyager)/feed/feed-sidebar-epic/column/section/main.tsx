export function FeedSidebarSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <div className='space-y-[1rem]'>{children}</div>
    </div>
  );
}
