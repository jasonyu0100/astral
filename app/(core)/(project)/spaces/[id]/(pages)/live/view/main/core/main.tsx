import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesLiveContents } from './contents/main';
import { SpacesLiveHeader } from './header/main';

export function SpacesLiveCore() {
  return (
    <div style={{ width: '100%', height: 'calc(100% - 5rem)' }}>
      <GlassWindowFrame
        name={SpacesLiveCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesLiveHeader />
        <SpacesLiveContents />
      </GlassWindowFrame>
    </div>
  );
}
