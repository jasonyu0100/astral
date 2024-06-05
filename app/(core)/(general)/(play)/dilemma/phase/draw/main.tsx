export function PhaseDraw() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='font-extraBold text-xl text-slate-300 '>Draw</p>
      <div className='flex flex-row space-x-[1rem]'>
        <div className='flex aspect-[12/16] h-[5rem] bg-white rounded'>
          <img className='h-full w-full' src='/cards/2♦.png'></img>
        </div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white rounded'>
          <img className='h-full w-full' src='/cards/J♣.png'></img>
        </div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white rounded'>
          <img className='h-full w-full' src='/cards/A♥.png'></img>
        </div>
        <div className='flex aspect-[12/16] h-[5rem] bg-white rounded'>
          <img className='h-full w-full' src='/cards/Back of a card.png'></img>
        </div>
      </div>
    </div>
  );
}
