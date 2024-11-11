export function HorizonsClusterLabel({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex flex-shrink-0 flex-row items-center'>
      <p className='animate-pulse text-lg font-bold text-slate-400'>
        {children}
      </p>
    </div>
  );
}
