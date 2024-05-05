'use client';
import { borderFx, glassFx } from '@/(fx)/data';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { useState } from 'react';
import { Quadrant } from './quadrant/a/main';
import { PhaseDraw } from './phase/draw/main';
import { PhaseOne } from './phase/one/main';
import { PhaseTwo } from './phase/two/main';
import { PhaseThree } from './phase/three/main';
import { PhaseReveal } from './phase/reveal/main';

export interface TwoByTwo {
  topLeft: PlayerOutcome;
  topRight: PlayerOutcome;
  bottomLeft: PlayerOutcome;
  bottomRight: PlayerOutcome;
}
export interface PlayerOutcome {
  playerA: number;
  playerB: number;
}

export const defaultGameState = {
  topLeft: {
    playerA: 5,
    playerB: 5,
  },
  topRight: {
    playerA: 8,
    playerB: 0,
  },
  bottomLeft: {
    playerA: 0,
    playerB: 8,
  },
  bottomRight: {
    playerA: 2,
    playerB: 2,
  },
};

export default function Page() {
  const [gameState, setGameState] = useState<TwoByTwo>(defaultGameState);

  return (
    <div className='flex flex-row  space-x-[3rem] p-[3rem]'>
      <div className='flex flex-col'>
        <p className='mb-[3rem] font-extraBold text-xl text-slate-300 '>Dual</p>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <Quadrant board={gameState} />
            <GlassWindowFrame
              className='aspect-square h-[20rem] w-[20rem]'
              borderFx={`${borderFx['border-l']} ${borderFx['border-b']}`}
            >
              <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
                <p>P1</p>
                <p>
                  {gameState.topRight.playerA} / {gameState.topRight.playerB}
                </p>
                <p>(1.0 , +0)</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </div>
          <div className='flex flex-row'>
            <GlassWindowFrame
              className='aspect-square h-[20rem] w-[20rem]'
              borderFx={`${borderFx['border-r']} ${borderFx['border-t']}`}
            >
              <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
                <p>P2</p>
                <p>
                  {gameState.bottomLeft.playerA} /{' '}
                  {gameState.bottomLeft.playerB}
                </p>
                <p>(1.0 , 0+)</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
            <GlassWindowFrame
              className='aspect-square h-[20rem] w-[20rem]'
              borderFx={`${borderFx['border-l']} ${borderFx['border-t']}`}
            >
              <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
                <p>B</p>
                <p>
                  {gameState.bottomRight.playerA} /{' '}
                  {gameState.bottomRight.playerB}
                </p>
                <p>(1.0 , ??)</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </div>
        </div>
      </div>
      <div className='flex h-[40rem] flex-grow flex-col space-y-[3rem] overflow-auto'>
        <div className='flex flex-col'>
          <p className='mb-[2rem] font-extraBold text-xl text-slate-300 '>
            P1 vs P2
          </p>
          <p className='text-md font-bold text-slate-500'>
            Dual is a 1v1 game where players place cards in a 2x2 grid to score
            points for your side
          </p>
          <p className='text-md font-bold text-slate-500'>
            Dilemma is a 2v2 game where players place cards in a 2x2 grid to
            score points for your side and yourself
          </p>
        </div>
        <PhaseDraw />
        <PhaseOne cards={['A', 'K', 'Q', 'P']} />
        <PhaseTwo />
        <PhaseThree />
        <PhaseReveal />
      </div>
    </div>
  );
}
