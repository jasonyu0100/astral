import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceBoardSceneList } from './list/main';

export function SpaceBoardSceneOverlay() {
  return (
    <GlassAreaContainer
      name={SpaceBoardSceneOverlay.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
    >
      <SpaceBoardSceneList />
    </GlassAreaContainer>
  );
}
