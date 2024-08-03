export function DefaultBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className='h-screen w-full bg-slate-950'>{children}</div>;
}
