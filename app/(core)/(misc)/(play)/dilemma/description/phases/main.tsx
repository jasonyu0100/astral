export function Phases() {
  return (
    <div className='flex flex-col'>
      <p className='text-lg font-bold text-slate-300'>Phases</p>
      <br />
      <p className='text-md font-bold text-slate-500'>
        Draw - Deal four cards to each player from the deck
      </p>
      <p className='text-md font-bold text-slate-500'>
        Phase One - Fold or play two cards in quadrants
      </p>
      <p className='text-md font-bold text-slate-500'>
        Phase Two - Pass or play one card in a quadrant
      </p>
      <p className='text-md font-bold text-slate-500'>
        Phase Three - Pass or play final card in a quadrant
      </p>
      <p className='text-md font-bold text-slate-500'>
        The Reveal - Reveal the quadrants and calculate the results
      </p>
      <p className='text-md font-bold text-slate-500'>
        Balance - Holder adjusts Anti or moves Hero
      </p>
    </div>
  );
}
