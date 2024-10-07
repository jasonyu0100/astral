export function HorizonsPointMainCore() {
  return (
    <div className='absolute h-full w-full divide-y-[1px] divide-slate-300 divide-opacity-30'>
      <div className='grid h-1/2 w-full grid-cols-2 items-center justify-center  divide-x-[1px] divide-slate-300 divide-opacity-30'>
        <div className='flex h-full w-full items-center justify-center'>
          <p className='font-bold text-slate-300'>A</p>
        </div>
        <div className='flex h-full w-full items-center justify-center'>
          <p className='font-bold text-slate-300'>P1</p>
        </div>
      </div>
      <div className='grid h-1/2 w-full grid-cols-2 items-center justify-center divide-x-[1px]  divide-slate-300 divide-opacity-30'>
        <div className='flex h-full w-full items-center justify-center'>
          <p className='font-bold text-slate-300'>P2</p>
        </div>
        <div className='flex h-full w-full items-center justify-center'>
          <p className='font-bold text-slate-300'>B</p>
        </div>
      </div>
    </div>
  );
}
