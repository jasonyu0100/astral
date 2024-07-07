export function Meta() {
  return (
    <div className='flex flex-col'>
      <p className='text-lg font-bold text-slate-700'>Meta</p>
      <br />
      <p className='text-md font-bold text-slate-700'>
        Anti - Balance modifier that subtracts from P mult payouts
      </p>
      <p className='text-md font-bold text-slate-700'>
        Hero - Positional modifier that adds onto AB mult payouts
      </p>
      <p className='text-md font-bold text-slate-700'>
        Evermore - Access modifier that temporarily unlocks conditionals
      </p>
      <p className='text-md font-bold text-slate-700'>
        Reverend - Conditional modifier that makes the hero a multiplier
      </p>
      <p className='text-md font-bold text-slate-700'>
        Reins - Conditional modifier that lets the hero call the flip
      </p>
      <p className='text-md font-bold text-slate-700'>
        Destination - Region with max QV
      </p>
      <p className='text-md font-bold text-slate-700'>
        Candidate - Player with max QV in a quad
      </p>
      <p className='text-md font-bold text-slate-700'>
        Holder - Player with max QV in winning quad
      </p>
      <p className='text-md font-bold text-slate-700'>
        Mult - The payout multipliers of a quad
      </p>
      <p className='text-md font-bold text-slate-700'>
        Tax - The card value of played cards
      </p>
      <p className='text-md font-bold text-slate-700'>
        Income - The net payout less tax
      </p>
      <p className='text-md font-bold text-slate-700'>
        CV - The number value of a card
      </p>
      <p className='text-md font-bold text-slate-700'>
        QV - The card value of a quadrant
      </p>
      <p className='text-md font-bold text-slate-700'>
        QP - The payout of a quad without anti-hero modifiers
      </p>
      <p className='text-md font-bold text-slate-700'>
        NP - The payout of a quad with anti-hero modifiers
      </p>
    </div>
  );
}
