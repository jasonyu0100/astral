import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpaceInboxContents } from './contents/main';
import { SpaceInboxHeader } from './header/main';

export function SpaceInboxCore() {
  return (
    <div style={{ width: '100%', height: 'calc(100% - 5rem)' }}>
      <GlassWindowFrame
        name={SpaceInboxCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpaceInboxHeader />
        <SpaceInboxContents />
      </GlassWindowFrame>
    </div>
  );
}
