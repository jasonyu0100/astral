import React, { useState } from 'react';
import { borderFx, glassFx } from '@/(fx)/data';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { TwoByTwo } from '@/(mx)/(support)/(game)/dilemma/page';

export function QuadrantA({ gameState }: { gameState: TwoByTwo }) {
  const [flipped, changeFlipped] = useState(false);
  const anti = gameState.anti;

  return (
    <div onClick={() => changeFlipped(!flipped)}>
      <GlassWindowFrame
        className='aspect-square h-[20rem] w-[20rem] cursor-pointer'
        borderFx={`${borderFx['border-r']} ${borderFx['border-b']}`}
      >
        <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
          {flipped ? (
            <>
              <p>A</p>
              <p>
                {gameState.quadrants.quadrantA.payoutA} /{' '}
                {gameState.quadrants.quadrantA.payoutB}
              </p>
              <p>(1x , ++)</p>
            </>
          ) : (
            <>
              <p>A</p>
              <p>
                {gameState.quadrants.quadrantA.payoutA} /{' '}
                {gameState.quadrants.quadrantA.payoutB}
              </p>
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
