export function DefaultBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-slate-900 to-[#2c0441] '>
      {children}
    </div>
  );
}
