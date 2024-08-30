import { GlassWindowFrame } from '@/ui/glass/window/main';
import { SpaceSpotlightHeader } from './header/main';
import { SpaceSpotlightReview } from './review/main';

export function SpaceSpotlightCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpaceSpotlightCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpaceSpotlightHeader />
        <SpaceSpotlightReview />
      </GlassWindowFrame>
    </div>
  );
}
