import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { SpaceReviewHeader } from './header/main';
import { SpaceReviewContentsVerse } from './verse/main';

export function SpaceReviewCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpaceReviewCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpaceReviewHeader />
        <SpaceReviewContentsVerse />
      </GlassWindowFrame>
    </div>
  );
}
