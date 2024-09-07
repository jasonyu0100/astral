export function VentureHorizonsListLabel({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex flex-shrink-0 flex-row items-center pb-[1rem]'>
      <p className='animate-pulse-slow text-xl font-bold text-slate-300'>
        {children}
      </p>
    </div>
  );
}
