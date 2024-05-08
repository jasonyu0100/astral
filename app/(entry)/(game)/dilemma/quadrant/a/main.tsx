import React, { useState } from 'react';
import { borderFx, glassFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { TwoByTwo } from '@/(entry)/(game)/dilemma/page';

export function QuadrantA({ gameState }: { gameState: TwoByTwo }) {
  const [flipped, changeFlipped] = useState(false);
  const anti = gameState.anti;

  return (
    <div onClick={() => changeFlipped(!flipped)}>
      <GlassWindowFrame
        name="Quadrant A"
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
              <p>++</p>
            </>
          ) : (
            <>
              <p>A</p>
              <p>
                {gameState.quadrants.quadrantA.payoutA} /{' '}
                {gameState.quadrants.quadrantA.payoutB}
              </p>
              <p>++</p>
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
