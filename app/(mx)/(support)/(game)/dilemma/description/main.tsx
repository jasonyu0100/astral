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
      <br />
      <p className='font-extraBold text-xl text-slate-300 '>Terminology</p>
      <br />
      <p className='text-lg font-bold text-slate-300'>Actions</p>
      <p className='text-md font-bold text-slate-500'>
        Play - Playing a card in a quadrant
      </p>
      <p className='text-md font-bold text-slate-500'>
        Pass - Passing the play at hand
      </p>
      <p className='text-md font-bold text-slate-500'>
        Follow - Following the previous play
      </p>
      <p className='text-md font-bold text-slate-500'>
        Fold - Folding the draw hand
      </p>
      <br />
      <p className='text-lg font-bold text-slate-300'>Payouts</p>
      <p className='text-md font-bold text-slate-500'>
        + - A positive payout that is resolved
      </p>
      <p className='text-md font-bold text-slate-500'>
        o - A neutral payout that is resolved
      </p>
      <p className='text-md font-bold text-slate-500'>
        ? - A hidden payout yet to be resolved
      </p>
      <p className='text-md font-bold text-slate-500'>
        ++ - Holder receives positive, the rest receive positive
      </p>
      <p className='text-md font-bold text-slate-500'>
        +o - Holder receives positive, the rest receive neutral
      </p>
      <p className='text-md font-bold text-slate-500'>
        ?? - Holder receives positive, the rest receive hidden
      </p>
      <p className='text-md font-bold text-slate-500'>
        Flip - Resolves ? into a positive or negative payout
      </p>
      <br />
      <p className='text-lg font-bold text-slate-300'>Phases</p>
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
      <br />
      <p className='text-lg font-bold text-slate-300'>Misc</p>
      <p className='text-md font-bold text-slate-500'>
        Board - A 2x2 grid in the game
      </p>
      <p className='text-md font-bold text-slate-500'>
        Quadrant - A region on the board
      </p>
      <p className='text-md font-bold text-slate-500'>
        Side - A side in the game
      </p>
      <br />
      <p className='text-lg font-bold text-slate-300'>Meta</p>
      <p className='text-md font-bold text-slate-500'>
        Anti - Balance modifier that subtracts from P payouts
      </p>
      <p className='text-md font-bold text-slate-500'>
        Hero - Blind modifier that adds onto AB payouts
      </p>
      <p className='text-md font-bold text-slate-500'>
        Destination - Region with max QV
      </p>
      <p className='text-md font-bold text-slate-500'>
        Holder - Player with max QV in winning quad
      </p>
      <p className='text-md font-bold text-slate-500'>
        Mult - The payout multipliers of a quad
      </p>
      <p className='text-md font-bold text-slate-500'>
        Tax - The card value of played cards
      </p>
      <p className='text-md font-bold text-slate-500'>
        Income - The net payout less tax
      </p>
      <p className='text-md font-bold text-slate-500'>
        CV - The number value of a card
      </p>
      <p className='text-md font-bold text-slate-500'>
        QV - The card value of a quadrant
      </p>
      <p className='text-md font-bold text-slate-500'>
        QP - The payout of a quad without anti-hero modifiers
      </p>
      <p className='text-md font-bold text-slate-500'>
        NP - The payout of a quad with anti-hero modifiers
      </p>
    </div>
  );
}
