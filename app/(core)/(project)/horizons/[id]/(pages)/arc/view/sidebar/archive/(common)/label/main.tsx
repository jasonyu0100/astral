export function HorizonsArcSidebarLabel({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='mb-[1rem] flex h-[2rem] flex-shrink-0 items-center'>
      <p className='font-extraBold text-lg text-slate-300'>{children}</p>
    </div>
  );
}
