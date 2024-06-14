import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { BoardSceneList } from './list/main';

export function SpaceBoardPanel() {
  return (
    <GlassAreaContainer
      name={SpaceBoardPanel.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
    >
      <BoardSceneList />
    </GlassAreaContainer>
  );
}
