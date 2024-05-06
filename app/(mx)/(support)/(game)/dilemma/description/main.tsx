export function GameDescription() {
  return (
    <div className='flex flex-col'>
      <p className='font-extraBold text-xl text-slate-300 '>Abstract</p>
      <p className='text-md font-bold text-slate-500'>
        Dual is a 1v1 game where players place cards in a 2x2 grid to score
        points for your side or yourself
      </p>
      <p className='text-md font-bold text-slate-500'>
        Dilemma is a 2v2 game where players place cards in a 2x2 grid to score
        points for your side and yourself
      </p>
      <p className='text-md font-bold text-slate-500'>
        Both can be played in tournaments or casual games
      </p>
      <br/>
      <p className='font-extraBold text-xl text-slate-300 '>Terminology</p>
      <p className='text-md font-bold text-slate-500'>
        Follow - Following the preceding Player
      </p>
      <p className='text-md font-bold text-slate-500'>
        Play - Play a card in a Region
      </p>
      <p className='text-md font-bold text-slate-500'>
        Pass - Passing the current Phase
      </p>
      <p className='text-md font-bold text-slate-500'>
        Fold - Forfeiting the Draw Phase
      </p>
      <p className='text-md font-bold text-slate-500'>
        Deal - Trade cards with a Partner
      </p>
      <p className='text-md font-bold text-slate-500'>
        Draw - Drawing cards from the Deck
      </p>
      <p className='text-md font-bold text-slate-500'>
        Reveal - Revealing the cards in the Region
      </p>
      <p className='text-md font-bold text-slate-500'>
        Phase - A turn in the game
      </p>
      <p className='text-md font-bold text-slate-500'>
        Region - A 2x2 grid in the game
        </p>
      <p className='text-md font-bold text-slate-500'>
        Side - A team in the game
      </p>
      <p className='text-md font-bold text-slate-500'>
        Value - The score of a card 
      </p>
    </div>
  );
}
