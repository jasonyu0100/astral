export function VentureHorizonsListLabel({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex flex-shrink-0 flex-row items-center'>
      <p className='animate-pulse text-lg font-bold text-slate-500'>
        {children}
      </p>
    </div>
  );
}
