export function DefaultBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-slate-950 to-purple-950'>
      {children}
    </div>
  );
}
