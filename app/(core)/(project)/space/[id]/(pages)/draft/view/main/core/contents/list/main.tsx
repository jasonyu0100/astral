import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceDraftSceneList } from './list/main';

export function SpaceDraftContentsList() {
  return (
    <GlassAreaContainer
      name={SpaceDraftContentsList.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
    >
      <SpaceDraftSceneList />
    </GlassAreaContainer>
  );
}
