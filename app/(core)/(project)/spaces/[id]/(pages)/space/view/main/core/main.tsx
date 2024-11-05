import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesSpaceContents } from './contents/main';
import { SpacesSpaceHeader } from './header/main';

export function SpacesSpaceBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpacesSpaceBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpacesSpaceHeader />
        <SpacesSpaceContents />
      </GlassAreaContainer>
    </div>
  );
}
