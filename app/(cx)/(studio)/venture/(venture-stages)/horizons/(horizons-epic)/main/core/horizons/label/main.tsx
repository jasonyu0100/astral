export function HorizonsListLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-[4rem] flex-shrink-0 flex-row items-center px-[2rem]'>
      <p className='ml-[0.5rem] font-extraBold text-lg text-slate-500'>
        {children}
      </p>
    </div>
  );
}
