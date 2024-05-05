export function PhaseDraw() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='font-extraBold text-xl text-slate-300 '>Draw</p>
      <div className='flex flex-row space-x-[1rem]'>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>A</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>K</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Q</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>P</div>
      </div>
    </div>
  );
}
