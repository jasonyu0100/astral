export function DefaultBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='w-full' style={{ height: 'calc(100vh - 4rem)' }}>
      {children}
    </div>
  );
}
