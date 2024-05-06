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

export interface Player {
  name: string;
  cards: string[];
  score: number;
}
export interface TwoByTwo {
  quadrantA: QuadrantState;
  quadrantP1: QuadrantState;
  quadrantP2: QuadrantState;
  quadrantB: QuadrantState;
  players: Player[];
  anti: number; // 1, 2, 3, 5 etc.
  goal: number; // 1000, 2000, 3000, 5000 etc.
  floor: number; // 0
}
export interface QuadrantState {
  payoutA: number;
  payoutB: number;
  hero: number; // 1.0, 1.5, 2.0, 2.5 etc.
}

export const zerothGameStatee = {
  topLeft: {
    playerA: 5,
    playerB: 5,
    hero: 1,
  },
  topRight: {
    playerA: 8,
    playerB: 0,
    hero: 1,
  },
  bottomLeft: {
    playerA: 0,
    playerB: 8,
    hero: 1,
  },
  bottomRight: {
    playerA: 2,
    playerB: 2,
    hero: 1,
  },
};

export const defaultGameState = {
  topLeft: {
    playerA: 3,
    playerB: 3,
    hero: 1,
  },
  topRight: {
    playerA: 5,
    playerB: 1,
    hero: 1,
    anti: 1,
  },
  bottomLeft: {
    playerA: 1,
    playerB: 5,
    hero: 1,
    anti: 1,
  },
  bottomRight: {
    playerA: 2,
    playerB: 2,
    hero: 1,
    anti: 1,
  },
};

export default function Page() {
  const [gameState, setGameState] = useState<TwoByTwo>(defaultGameState);

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
                  {gameState.quadrantP1.payoutA} / {gameState.quadrantP1.payoutB}
                </p>
                <p>(1.0 , +o)</p>
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
                  {gameState.quadrantP2.payoutA} /{' '}
                  {gameState.quadrantP2.payoutB}
                </p>
                <p>(1.0 , o+)</p>
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
                  {gameState.quadrantB.payoutA} /{' '}
                  {gameState.quadrantB.payoutB}
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
