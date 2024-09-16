export function CommonSidebarFriends({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex w-full flex-col items-end space-y-[2rem] overflow-hidden rounded-full'>
      {children}
    </div>
  );
}
