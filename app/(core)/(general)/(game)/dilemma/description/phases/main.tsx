export function Phases() {
  return (
    <div className='flex flex-col'>
      <p className='text-lg font-bold text-slate-700'>Phases</p>
      <br />
      <p className='text-md font-bold text-slate-700'>
        Draw - Deal five cards to each player from the deck
      </p>
      <p className='text-md font-bold text-slate-700'>
        Set - Play two cards in quadrants
      </p>
      <p className='text-md font-bold text-slate-700'>
        Wager - Place a point bet on the outcome of the game
      </p>
      <p className='text-md font-bold text-slate-700'>
        Play 1 - Play a card in a quadrant
      </p>
      <p className='text-md font-bold text-slate-700'>
        Play 2 - Play a card in a quadrant
      </p>
      <p className='text-md font-bold text-slate-700'>
        Play 3 - Play final card in a quadrant
      </p>
      <p className='text-md font-bold text-slate-700'></p>
      <p className='text-md font-bold text-slate-700'>
        Reveal - Reveal cards one by one the quadrants
      </p>
      <p className='text-md font-bold text-slate-700'>
        Score - Calculate the outcome and redistribute the points
      </p>
      <p className='text-md font-bold text-slate-700'>
        Balance - Holder adjusts Anti or moves the Hero Blind
      </p>
    </div>
  );
}
