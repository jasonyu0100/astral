import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesLaunchContents } from './contents/main';
import { SpacesLaunchHeader } from './header/main';

export function SpacesLaunchCore() {
  return (
    <div style={{ width: '100%', height: 'calc(100% - 5rem)' }}>
      <GlassWindowFrame
        name={SpacesLaunchCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesLaunchHeader />
        <SpacesLaunchContents />
      </GlassWindowFrame>
    </div>
  );
}
