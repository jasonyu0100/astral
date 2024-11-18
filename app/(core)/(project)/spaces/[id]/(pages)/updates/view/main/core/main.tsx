import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesPostsContents } from './contents/main';
import { SpacesPostsHeader } from './header/main';

export function SpacesPostsCore() {
  return (
    <div style={{ width: '100%', height: 'calc(100% - 5rem)' }}>
      <GlassWindowFrame
        name={SpacesPostsCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesPostsHeader />
        <SpacesPostsContents />
      </GlassWindowFrame>
    </div>
  );
}
