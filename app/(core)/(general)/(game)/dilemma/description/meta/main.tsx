export function Meta() {
  return (
    <div className='flex flex-col'>
      <p className='text-lg font-bold text-slate-300'>Meta</p>
      <br />
      <p className='text-md font-bold text-slate-500'>
        Anti - Balance modifier that subtracts from P mult payouts
      </p>
      <p className='text-md font-bold text-slate-500'>
        Hero - Positional modifier that adds onto AB mult payouts
      </p>
      <p className='text-md font-bold text-slate-500'>
        Evermore - Access modifier that temporarily unlocks conditionals
      </p>
      <p className='text-md font-bold text-slate-500'>
        Reverend - Conditional modifier that makes the hero a multiplier
      </p>
      <p className='text-md font-bold text-slate-500'>
        Reins - Conditional modifier that lets the hero call the flip
      </p>
      <p className='text-md font-bold text-slate-500'>
        Destination - Region with max QV
      </p>
      <p className='text-md font-bold text-slate-500'>
        Candidate - Player with max QV in a quad
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
