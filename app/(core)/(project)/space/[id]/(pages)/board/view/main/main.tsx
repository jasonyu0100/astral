import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { BoardCore } from './core/main';
import { BoardScenes } from './scenes/main';

export function BoardMain() {
  return (
    <GlassAreaContainer
      name={BoardMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <BoardCore />
      <BoardScenes />
    </GlassAreaContainer>
  );
}
