export function HorizonsPointHemisphere({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='grid h-1/2 w-full grid-cols-2 items-center justify-center  divide-x-[1px] divide-slate-300 divide-opacity-30'>
      {children}
    </div>
  );
}
