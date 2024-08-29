import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceReviewComments } from './comments/main';
import { SpaceReviewMain } from './main/main';

export function SpaceReviewReview() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceReviewReview.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex flex-grow flex-col'>
          <SpaceReviewMain />
          <SpaceReviewComments />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
