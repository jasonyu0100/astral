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
import { defaultGameState } from './presets/2x2/main';
import { GameStateContext } from './contexts/main';
import { DilemmaUi } from './view/view';

export default function Page() {
  const [gameState, setGameState] = useState<TwoByTwo>(defaultGameState);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      <DilemmaUi/>
    </GameStateContext.Provider>
  );
}
