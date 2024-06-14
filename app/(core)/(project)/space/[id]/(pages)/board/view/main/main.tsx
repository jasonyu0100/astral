import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceBoardBodyCore } from './core/main';
import { BoardBoardBodyScenes } from './scenes/main';

export function SpaceBoardMain() {
  return (
    <GlassAreaContainer
      name={SpaceBoardMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceBoardBodyCore />
      <BoardBoardBodyScenes />
    </GlassAreaContainer>
  );
}
