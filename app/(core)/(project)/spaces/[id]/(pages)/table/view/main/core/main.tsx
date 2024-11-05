import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesTableContents } from './contents/main';
import { SpacesTableHeader } from './header/main';

export function SpacesTableCore() {
  return (
    <div style={{ width: '100%', height: 'calc(100% - 5rem)' }}>
      <GlassWindowFrame
        name={SpacesTableCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesTableHeader />
        <SpacesTableContents />
      </GlassWindowFrame>
    </div>
  );
}
