export function PortalFormOrDivider() {
  return (
    <div className='flex flex-row w-full h-[60px] flex-shrink-0 gap-[3rem] items-center mb-[1rem]'>
      <div className='w-full border-b-[3px] border-slate-300' />
      <p className='text-slate-400 text-xl font-bold leading-9'>OR</p>
      <div className='w-full border-b-[3px] border-slate-300' />
    </div>
  );
}
