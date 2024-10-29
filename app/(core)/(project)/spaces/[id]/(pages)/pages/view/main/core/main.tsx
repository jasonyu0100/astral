import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesPagesContents } from './contents/main';
import { SpacesPagesHeader } from './header/main';

export function SpacesPagesCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpacesPagesCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesPagesHeader />
        <SpacesPagesContents />
      </GlassWindowFrame>
    </div>
  );
}
