import { GlassWindowFrame } from '@/ui/glass/window/main';
import { SpaceFlightContents } from './contents/main';
import { SpaceFlightHeader } from './header/main';

export function SpaceFlightCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpaceFlightCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpaceFlightHeader />
        <SpaceFlightContents />
      </GlassWindowFrame>
    </div>
  );
}
