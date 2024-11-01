import { GlassWindowFrame } from '@/components/glass/window/main';
import { SpacesPreviewContents } from './contents/main';
import { SpacesPreviewHeader } from './header/main';

export function SpacesPreviewCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpacesPreviewCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpacesPreviewHeader />
        <SpacesPreviewContents />
      </GlassWindowFrame>
    </div>
  );
}
