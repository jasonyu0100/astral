import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesMapContents } from './contents/main';
import { SpacesMapHeader } from './header/main';

export function SpacesMapBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpacesMapBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpacesMapHeader />
        <SpacesMapContents />
      </GlassAreaContainer>
    </div>
  );
}
