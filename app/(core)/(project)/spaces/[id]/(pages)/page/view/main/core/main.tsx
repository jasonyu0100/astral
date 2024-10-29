import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesPageContents } from './contents/main';
import { SpacesPageHeader } from './header/main';

export function SpacesPageCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpacesPageCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesPageHeader />
        <SpacesPageContents />
      </GlassWindowFrame>
    </div>
  );
}
