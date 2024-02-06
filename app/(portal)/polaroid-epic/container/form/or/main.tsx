export function PortalFormOrDivider() {
  return (
    <div className='mb-[1rem] flex h-[60px] w-full flex-shrink-0 flex-row items-center gap-[3rem]'>
      <div className='w-full border-b-[3px] border-slate-300' />
      <p className='text-xl font-bold leading-9 text-slate-400'>OR</p>
      <div className='w-full border-b-[3px] border-slate-300' />
    </div>
  );
}
