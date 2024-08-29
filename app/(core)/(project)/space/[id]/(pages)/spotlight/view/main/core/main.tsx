import { GlassWindowFrame } from '@/ui/glass/window/main';
import { SpaceReviewHeader } from './header/main';
import { SpaceReviewReview } from './review/main';

export function SpaceReviewCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpaceReviewCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpaceReviewHeader />
        <SpaceReviewReview />
      </GlassWindowFrame>
    </div>
  );
}
