'use client';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useState } from 'react';
import { QuadrantA } from './quadrant/a/main';
import { PhaseDraw } from './phase/draw/main';
import { PhaseOne } from './phase/one/main';
import { PhaseTwo } from './phase/two/main';
import { PhaseThree } from './phase/three/main';
import { PhaseReveal } from './phase/reveal/main';
import { GameDescription } from './description/main';
import { QuadrantP1 } from './quadrant/p1/main';
import { QuadrantP2 } from './quadrant/p2/main';
import { QuadrantB } from './quadrant/b/main';
import { TwoByTwo } from './types/2x2/main';
import { defaultGameState } from './state/2x2/main';

export default function Page() {
  const [gameState, setGameState] = useState<TwoByTwo>(defaultGameState);

  return (
    <div className='flex flex-row  space-x-[5rem] px-[3rem] pt-[3rem]'>
      <div className='flex flex-col'>
        <p className='mb-[3rem] font-extraBold text-3xl text-slate-300 '>
          Dilemma
        </p>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <QuadrantA gameState={gameState} />
            <QuadrantP1 gameState={gameState} />
          </div>
          <div className='flex flex-row'>
            <QuadrantP2 gameState={gameState} />
            <QuadrantB gameState={gameState} />
          </div>
          <p className="text-slate-500 font-bold mt-[2rem]">Anti=1, Hero=2, H=B</p>
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
