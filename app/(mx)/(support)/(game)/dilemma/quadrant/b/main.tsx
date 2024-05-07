import { borderFx, glassFx } from '@/(fx)/data';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { TwoByTwo } from '../../page';
import { useState } from 'react';

export function QuadrantB({ gameState }: { gameState: TwoByTwo }) {
  const [flipped, changeFlipped] = useState(false);
  const anti = gameState.anti;
  const hero = gameState.quadrants.quadrantB.hero;

  return (
    <div onClick={() => changeFlipped(!flipped)}>
      <GlassWindowFrame
        className='aspect-square h-[20rem] w-[20rem]'
        borderFx={`${borderFx['border-l']} ${borderFx['border-t']}`}
      >
        <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
          {flipped ? (
            <>
              <p>B</p>
              <p>
                {gameState.quadrants.quadrantB.payoutA} /{' '}
                {gameState.quadrants.quadrantB.payoutB}
              </p>
              <p>??</p>
            </>
          ) : (
            <>
              <p>B</p>
              <p>
                {gameState.quadrants.quadrantB.payoutA} /{' '}
                {gameState.quadrants.quadrantB.payoutB}
              </p>
              <p>??</p>
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
