import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { BoardSceneList } from './list/main';

export function BoardPanel() {
  return (
    <GlassAreaContainer
      name={BoardPanel.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
    >
      <BoardSceneList />
    </GlassAreaContainer>
  );
}
