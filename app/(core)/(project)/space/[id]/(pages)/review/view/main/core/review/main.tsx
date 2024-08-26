import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceReviewContentComments } from './comments/main';
import { SpaceReviewReviewMain } from './main/main';

export function SpaceReviewContentsReview() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceReviewContentsReview.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto px-[2rem]`}
      >
        <div className='flex flex-grow flex-col space-y-[4rem] pt-[2rem]'>
          <SpaceReviewReviewMain />
          <SpaceReviewContentComments />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
