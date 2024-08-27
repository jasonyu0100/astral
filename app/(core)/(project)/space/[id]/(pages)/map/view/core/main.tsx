import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceMapCoreContents } from '../main/core/contents/main';
import { SpaceMapHeader } from '../main/core/header/main';

export function SpaceMapBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceMapBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceMapHeader />
        <SpaceMapCoreContents />
      </GlassAreaContainer>
    </div>
  );
}
