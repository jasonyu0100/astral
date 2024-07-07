export function IndicatorText({
  children,
  active,
}: {
  children?: React.ReactNode;
  active: boolean;
}) {
  return active ? (
    <div className='text-center text-xl font-bold leading-9 text-slate-600'>
      {children}
    </div>
  ) : (
    <div className='text-center text-xl font-bold leading-9 text-slate-400'>
      {children}
    </div>
  );
}
