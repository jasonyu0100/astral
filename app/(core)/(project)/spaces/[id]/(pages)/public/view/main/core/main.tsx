import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesPublicContents } from './contents/main';
import { SpacesPublicHeader } from './header/main';

export function SpacesPublicCore() {
  return (
    <div style={{ width: '100%', height: 'calc(100% - 5rem)' }}>
      <GlassWindowFrame
        name={SpacesPublicCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesPublicHeader />
        <SpacesPublicContents />
      </GlassWindowFrame>
    </div>
  );
}
