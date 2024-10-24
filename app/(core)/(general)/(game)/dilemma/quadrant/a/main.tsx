import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForFlippable } from '@/logic/contexts/flippable/main';
import { borderFx, glassFx } from '@/style/data';
import { useContext } from 'react';
import { GameStateContext } from '../../contexts/main';

export function QuadrantA() {
  const { gameState, setGameState } = useContext(GameStateContext);
  const flippableController = useControllerForFlippable();
  const anti = gameState.anti;

  return (
    <div onClick={flippableController.flip}>
      <GlassWindowFrame
        name='Quadrant A'
        className='aspect-square h-[20rem] w-[20rem] cursor-pointer'
        borderFx={`${borderFx['border-r']} ${borderFx['border-b']}`}
      >
        <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
          {flippableController.flipped ? (
            <>
              <p>A</p>
              <p>{`{{A, J}, {9, 5}}`}</p>
              <p>{`{{14, 11}, {9, 5}}`}</p>
              <p>{`{sum(14, 11), sum(9, 5)}`}</p>
              <p>{`{25, 14}`}</p>
              <p>{`P1=25, P2=14`}</p>
              <p>{`max(25, 14) = P1`}</p>
              <p>{`Candidate = P1`}</p>
              {/* <p>{`sum(25, 14)`}</p>
              <p>{`QV = 39`}</p>
              <p>{`A(P1, QV) = 3 x 39`}</p>
              <p>{`QP = 117`}</p>
              <p>{`AH(P1, QV, true) = (3+2) x 39`}</p>
              <p>{`NP = 195`}</p>
              <p>{`sum(A, J, 2, 3)`}</p>
              <p>{`Tax = 30`}</p>
              <p>{`195 - 30 = 165`}</p>
              <p>{`Income = 165`}</p> */}
            </>
          ) : (
            <>
              <p>A</p>
              <p>
                ({gameState.quadrants.quadrantA.payoutA},{' '}
                {gameState.quadrants.quadrantA.payoutB})
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
