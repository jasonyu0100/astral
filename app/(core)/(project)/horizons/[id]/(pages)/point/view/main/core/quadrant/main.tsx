export function HorizonsPointQuadrant({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
      {children}
    </div>
  );
}
