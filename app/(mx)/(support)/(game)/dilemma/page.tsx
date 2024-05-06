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
import { GameDescription } from './description/main';

export interface Player {
  name: string;
  cards: string[];
  score: number;
  memory?: any[];
}
export interface TwoByTwo {
  quadrantA: QuadrantState;
  quadrantP1: QuadrantState;
  quadrantP2: QuadrantState;
  quadrantB: QuadrantState;
  players: Player[];
  anti: number; // 0, 1, 2, 3, 5 etc.
  goal: number; // 1000, 2000, 3000, 5000 etc.
  floor: number; // 0
  history?: any[];
}
export interface QuadrantState {
  payoutA: number;
  payoutB: number;
  hero: number; // 1.0, 1.5, 2.0, 2.5 etc.
}

export const zerothGameState: TwoByTwo = {
  quadrantA: {
    payoutA: 5,
    payoutB: 5,
    hero: 1,
  },
  quadrantP1: {
    payoutA: 8,
    payoutB: 0,
    hero: 1,
  },
  quadrantP2: {
    payoutA: 0,
    payoutB: 8,
    hero: 1,
  },
  quadrantB: {
    payoutA: 2,
    payoutB: 2,
    hero: 1,
  },
  players: [
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
  ],
  anti: 0,
  goal: 1000,
  floor: 0,
  history: [],
};

export const defaultGameState: TwoByTwo = {
  quadrantA: {
    payoutA: 3,
    payoutB: 3,
    hero: 1,
  },
  quadrantP1: {
    payoutA: 5,
    payoutB: 1,
    hero: 1,
  },
  quadrantP2: {
    payoutA: 1,
    payoutB: 5,
    hero: 1,
  },
  quadrantB: {
    payoutA: 2,
    payoutB: 2,
    hero: 1,
  },
  players: [
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
  ],
  anti: 0,
  goal: 1000,
  floor: 0,
  history: [],
};

export default function Page() {
  const [gameState, setGameState] = useState<TwoByTwo>(defaultGameState);

  return (
    <div className='flex flex-row  space-x-[5rem] pt-[3rem] px-[3rem]'>
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
                  {gameState.quadrantP1.payoutA} /{' '}
                  {gameState.quadrantP1.payoutB}
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
                  {gameState.quadrantB.payoutA} / {gameState.quadrantB.payoutB}
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
        <GlassWindowFrame className='h-full w-full p-[2rem]'>
          <GlassWindowContents className='flex  flex-col space-y-[3rem] overflow-auto'>
            <GameDescription />
            <PhaseDraw />
            <PhaseOne cards={['A', 'K', 'Q', 'P']} />
            <PhaseTwo />
            <PhaseThree />
            <PhaseReveal />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </div>
  );
}
