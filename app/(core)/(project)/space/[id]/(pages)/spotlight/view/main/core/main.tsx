import { GlassWindowFrame } from '@/ui/glass/window/main';
import { SpaceSpotlightContents } from './contents/main';
import { SpaceSpotlightHeader } from './header/main';

export function SpaceSpotlightCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpaceSpotlightCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpaceSpotlightHeader />
        <SpaceSpotlightContents />
      </GlassWindowFrame>
    </div>
  );
}
