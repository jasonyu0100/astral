export function HorizonsSidebarLabel({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex h-[2rem] mb-[1rem] flex-shrink-0 items-center'>
      <p className='font-extraBold text-lg text-slate-500'>{children}</p>
    </div>
  );
}
