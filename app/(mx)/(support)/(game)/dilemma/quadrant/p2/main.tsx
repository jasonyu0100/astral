import { borderFx, glassFx } from '@/(fx)/data';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { TwoByTwo } from '../../page';
import { useState } from 'react';

export function QuadrantP2({ gameState }: { gameState: TwoByTwo }) {
  const [flipped, changeFlipped] = useState(false);
  const anti = gameState.anti;

  return (
    <div onClick={() => changeFlipped(!flipped)}>
      <GlassWindowFrame
        className='aspect-square h-[20rem] w-[20rem]'
        borderFx={`${borderFx['border-r']} ${borderFx['border-t']}`}
      >
        <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
          {flipped ? (
            <>
              <p>P2</p>
              <p>
                {gameState.quadrants.quadrantP2.payoutA - anti} /{' '}
                {gameState.quadrants.quadrantP2.payoutB - anti}
              </p>
              <p>(1x , o+)</p>
            </>
          ) : (
            <>
              <p>P2</p>
              <p>
                {gameState.quadrants.quadrantP2.payoutA - anti} /{' '}
                {gameState.quadrants.quadrantP2.payoutB - anti}
              </p>
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
