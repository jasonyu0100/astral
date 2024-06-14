export function Payouts() {
  return (
    <div className='flex flex-col'>
      <p className='text-lg font-bold text-slate-300'>Payouts</p>
      <br />
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
    </div>
  );
}
