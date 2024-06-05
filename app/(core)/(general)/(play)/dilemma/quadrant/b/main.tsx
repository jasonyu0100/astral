import { borderFx, glassFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useContext, useState } from 'react';
import { GameStateContext } from '../../contexts/main';

export function QuadrantB() {
  const { gameState, setGameState } = useContext(GameStateContext);
  const [flipped, changeFlipped] = useState(false);
  const anti = gameState.anti;

  return (
    <div onClick={() => changeFlipped(!flipped)}>
      <GlassWindowFrame
      name="Quadrant B"
        className='aspect-square h-[20rem] w-[20rem]'
        borderFx={`${borderFx['border-l']} ${borderFx['border-t']}`}
      >
        <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
          {flipped ? (
            <>
              <p>B</p>
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
              <p>B</p>
              <p>
                ({gameState.quadrants.quadrantB.payoutA}, {gameState.quadrants.quadrantB.payoutB})
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
