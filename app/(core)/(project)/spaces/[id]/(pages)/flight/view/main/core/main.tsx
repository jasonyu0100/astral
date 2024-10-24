import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesFlightContents } from './contents/main';
import { SpacesFlightHeader } from './header/main';

export function SpacesFlightCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpacesFlightCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesFlightHeader />
        <SpacesFlightContents />
      </GlassWindowFrame>
    </div>
  );
}
