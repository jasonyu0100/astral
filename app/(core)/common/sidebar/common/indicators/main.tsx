export function CommonSidebarIndicators({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='inline-flex flex-col items-start space-y-[2.5rem]'>
      {children}
    </div>
  );
}
