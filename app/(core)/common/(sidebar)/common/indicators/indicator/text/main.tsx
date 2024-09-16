export function CommonSidebarIndicatorText({
  children,
  active,
}: {
  children?: React.ReactNode;
  active: boolean;
}) {
  return active ? (
    <div className='text-center text-xl font-bold leading-9 text-white'>
      {children}
    </div>
  ) : (
    <div className='text-center text-xl font-bold leading-9 text-slate-500'>
      {children}
    </div>
  );
}
