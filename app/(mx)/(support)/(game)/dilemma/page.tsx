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
import { Divider } from '@/(lib)/(line)/divider/main';
import { GameDescription } from './description/main';

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

export const zeroGameState = {
  topLeft: {
    playerA: 5,
    playerB: 5,
  },
  topRight: {
    playerA: 4,
    playerB: -4,
  },
  bottomLeft: {
    playerA: -4,
    playerB: 4,
  },
  bottomRight: {
    playerA: 2,
    playerB: 2,
  },
};

export default function Page() {
  const [gameState, setGameState] = useState<TwoByTwo>(zeroGameState);

  return (
    <div className='flex flex-row  space-x-[3rem] p-[2rem]'>
      <div className='flex flex-col'>
        <p className='mb-[3rem] font-extraBold text-3xl text-slate-300 '>
          Dilemma
        </p>
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
      <div className='flex h-[40rem] w-[60rem] flex-col'>
        <p className='mb-[3rem] font-extraBold text-3xl text-slate-300 '>
          P1 vs P2
        </p>
        <div className='flex  flex-col space-y-[3rem] overflow-auto'>
          <GameDescription />
          <PhaseDraw />
          <PhaseOne cards={['A', 'K', 'Q', 'P']} />
          <PhaseTwo />
          <PhaseThree />
          <PhaseReveal />
        </div>
      </div>
    </div>
  );
}
