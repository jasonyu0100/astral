export function CommonSidebarFriends({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='inline-flex flex-col items-end space-y-[2rem]'>
      {children}
    </div>
  );
}
