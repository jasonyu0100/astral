import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpaceSpaceContents } from './contents/main';
import { SpaceSpaceHeader } from './header/main';

export function SpaceSpaceBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceSpaceBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceSpaceHeader />
        <SpaceSpaceContents />
      </GlassAreaContainer>
    </div>
  );
}
