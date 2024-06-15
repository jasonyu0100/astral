import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceDraftSceneList } from './list/main';

export function SpaceDraftSceneOverlay() {
  return (
    <GlassAreaContainer
      name={SpaceDraftSceneOverlay.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
    >
      <SpaceDraftSceneList />
    </GlassAreaContainer>
  );
}
