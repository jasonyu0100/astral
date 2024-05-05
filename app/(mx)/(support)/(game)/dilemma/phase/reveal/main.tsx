import { useState } from 'react';

export function PhaseReveal() {
  const [fullLog, changeFullLog] = useState(false);
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='font-extraBold text-xl text-slate-300 '>Reveal</p>
      {fullLog && (
        <>
          <p className='text-md font-bold text-slate-500 '>Start Draw</p>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>
              Dealer shuffles and deals 4 cards to each player
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 received A, K, Q, P with a value of 50
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 received 2, 3, 4, 5 with a value of 14
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Hero is now at A with 1.5x
            </p>
            <p className='text-md font-bold text-slate-500 '>P1 -= 50</p>
            <p className='text-md font-bold text-slate-500 '>P2 -= 14</p>
          </div>
          <p className='text-md font-bold text-slate-500 '>Phase 1</p>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed Q at A (5 / 5 , ++)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed P at P (8 / 0 , +0)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed 5 at A (5 / 5 , ++)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed 4 at B (2 / -2 , ??)
            </p>
          </div>
          <p className='text-md font-bold text-slate-500 '>Phase 2</p>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed A at B (2 / -2 , ??)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed 3 at P (0 / 8 , 0+)
            </p>
          </div>
          <p className='text-md font-bold text-slate-500 '>Phase 3</p>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>Player 1 passed</p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed 2 at P (0 / 8 , 0+)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed K at B (2 / -2 , ??)
            </p>
          </div>
          <p className='text-md font-bold text-slate-500 '>The Reveal</p>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <p className='text-md font-bold text-slate-500'>
                A - (Q) and (5)
              </p>
              <p className='text-md font-bold text-slate-500'>
                sum(12, 5) = 17, max(12, 5) = P1
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-md font-bold text-slate-500 '>
                P - (P) and (3,2)
              </p>
              <p className='text-md font-bold text-slate-500 '>
                sum(11, 5) = 16, max(11, 5) = P1
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-md font-bold text-slate-500'>
                B - (A, K) and (4)
              </p>
              <p className='text-md font-bold text-slate-500'>
                sum(27, 4) = 31, max(27, 4) = P1
              </p>
            </div>
          </div>
        </>
      )}
      {!fullLog && (
        <div className='flex flex-col'>
          <p className='text-md font-bold text-slate-500 '>...</p>
          <br />
          <p className='text-md font-bold text-slate-500 '>P1 -= 50</p>
          <p className='text-md font-bold text-slate-500 '>P2 -= 14</p>
          <br />
          <p className='text-md font-bold text-slate-500 '>...</p>
        </div>
      )}
      <p className='text-md font-bold text-slate-300 '>Final Results</p>
      <div className='flex flex-col'>
        <p className='text-md font-bold text-slate-500'>P1 wins</p>
        <p className='text-md font-bold text-slate-500'>P1 += 54</p>
        <p className='text-md font-bold text-slate-500'>P2 -= 8</p>
        <br />
        <p className='text-md font-bold text-slate-500'>Region B wins</p>
        <p className='text-md font-bold text-slate-500'>B31 vs A17 vs P16</p>
        <br />
        <p className='text-md font-bold text-slate-500 '>NEXT DRAW</p>
      </div>
    </div>
  );
}

function ExtraSettings() {
  return (
    <div className='flex flex-col'>
      <p className='text-md font-bold text-slate-500 '>
        (optional 1a) Dealer always reveals cards
      </p>
      <p className='text-md font-bold text-slate-500 '>
        (optional 2a) P1 chooses whether to reveal cards
      </p>
      <p className='text-md font-bold text-slate-500 '>
        (optional 2b) Dealer shuffles region cards then reveals
      </p>
      <p className='text-md font-bold text-slate-500 '>
        (optional 3a) Deduction is dealt at the beginning
      </p>
      <p className='text-md font-bold text-slate-500 '>
        (optional 3b) Deduction is dealt at the end privately
      </p>
      <p className='text-md font-bold text-slate-500 '>
        (optional 3c) Deduction is dealt at the end publicly
      </p>
      <p className='text-md font-bold text-slate-500 '>
        (optional 4a) Dealer reveals only the winning region
      </p>
      <p className='text-md font-bold text-slate-500 '>
        (optional 4b) Dealer reveals only the winning side
      </p>
      <p className='text-md font-bold text-slate-500 '>
        (optional 5a) Players are the dealers and handle the reveal themselves
      </p>
    </div>
  );
}
