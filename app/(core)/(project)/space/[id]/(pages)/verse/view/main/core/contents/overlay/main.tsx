import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceVerseList } from './list/main';

export function SpaceVerseListOverlay() {
  return (
    <GlassAreaContainer
      name={SpaceVerseListOverlay.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
    >
      <SpaceVerseList />
    </GlassAreaContainer>
  );
}
