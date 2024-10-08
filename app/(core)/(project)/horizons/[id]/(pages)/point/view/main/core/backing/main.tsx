export function HorizonQuadrantBacking({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex w-full flex-row flex-wrap space-x-[0.5rem]'>
      {children}
    </div>
  );
}
