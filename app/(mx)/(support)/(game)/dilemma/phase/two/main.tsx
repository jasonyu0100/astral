export function PhaseTwo() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='font-extraBold text-xl text-slate-300 '>Phase Two</p>
      <div className=' flex flex-row space-x-[1rem]'>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Pass</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Follow</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Deal</div>
      </div>
      <div className=' flex flex-row space-x-[1rem]'>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Back</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place A</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place P</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place B</div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white'>Next</div>
      </div>
      <div className='flex flex-col'>
        <p className='text-md font-bold text-slate-500 '>
          Player 1 placed ? at B (2 / -2 , ??)
        </p>
        <p className='text-md font-bold text-slate-500 '>
          Player 2 placed ? at P2 (0 / 8 , o+)
        </p>
      </div>
    </div>
  );
}
