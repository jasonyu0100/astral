'use client';
import { useState } from 'react';
import { GameStateContext } from './contexts/main';
import { defaultGameState } from './presets/2x2/main';
import { TwoByTwo } from './types/2x2/main';
import { DilemmaUi } from './view/view';

export default function Page() {
  const [gameState, setGameState] = useState<TwoByTwo>(defaultGameState);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      <DilemmaUi />
    </GameStateContext.Provider>
  );
}
