import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesUpdatesContents } from './contents/main';
import { SpacesUpdatesHeader } from './header/main';

export function SpacesUpdatesCore() {
  return (
    <div style={{ width: '100%', height: 'calc(100% - 5rem)' }}>
      <GlassWindowFrame
        name={SpacesUpdatesCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesUpdatesHeader />
        <SpacesUpdatesContents />
      </GlassWindowFrame>
    </div>
  );
}
