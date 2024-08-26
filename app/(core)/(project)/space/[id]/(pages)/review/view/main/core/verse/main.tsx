import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceReviewContentComments } from './comments/main';
import { SpaceReviewVerseMain } from './main/main';

export function SpaceReviewContentsVerse() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceReviewContentsVerse.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto px-[2rem]`}
      >
        <div className='flex flex-grow flex-col space-y-[4rem] pt-[2rem]'>
          <SpaceReviewVerseMain />
          <SpaceReviewContentComments />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
