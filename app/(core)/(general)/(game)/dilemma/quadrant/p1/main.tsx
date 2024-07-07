import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext, useState } from 'react';
import { GameStateContext } from '../../contexts/main';

export function QuadrantP1() {
  const { gameState, setGameState } = useContext(GameStateContext);
  const [revealed, setRevealed] = useState(false);
  const anti = gameState.anti;

  return (
    <div onClick={() => setRevealed(!revealed)}>
      <GlassWindowFrame
        name='Quadrant P1'
        className='aspect-square h-[20rem] w-[20rem]'
        borderFx={`${borderFx['border-l']} ${borderFx['border-b']}`}
      >
        <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-700'>
          {revealed ? (
            <>
              <p>P1</p>
              <p>{`{{A, J}, {9, 5}}`}</p>
              <p>{`{{14, 11}, {9, 5}}`}</p>
              <p>{`{sum(14, 11), sum(9, 5)}`}</p>
              <p>{`{25, 14}`}</p>
              <p>{`P1=25, P2=14`}</p>
              <p>{`max(25, 14) = P1`}</p>
              <p>{`Candidate = P1`}</p>
              <p>{`sum(25, 14)`}</p>
              <p>{`QV = 39`}</p>
            </>
          ) : (
            <>
              <p>P1</p>
              <p>
                ({gameState.quadrants.quadrantP1.payoutA - anti},{' '}
                {gameState.quadrants.quadrantP1.payoutB - anti})
              </p>
              <p>+o</p>
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
