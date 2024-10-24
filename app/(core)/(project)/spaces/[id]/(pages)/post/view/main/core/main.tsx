import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesPostContents } from './contents/main';
import { SpacesPostHeader } from './header/main';

export function SpacesPostCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpacesPostCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesPostHeader />
        <SpacesPostContents />
      </GlassWindowFrame>
    </div>
  );
}
