export function VentureHorizonsListLabel({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex flex-shrink-0 flex-row items-center pb-[1rem]'>
      <p className='font-extraBold text-lg text-slate-500'>{children}</p>
    </div>
  );
}
