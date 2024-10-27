import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesSceneContents } from './contents/main';
import { SpacesSceneHeader } from './header/main';

export function SpacesSceneBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpacesSceneBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpacesSceneHeader />
        <SpacesSceneContents />
      </GlassAreaContainer>
    </div>
  );
}
