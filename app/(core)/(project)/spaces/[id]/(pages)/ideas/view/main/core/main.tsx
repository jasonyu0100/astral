import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesIdeasContents } from './contents/main';
import { SpacesIdeasHeader } from './header/main';

export function SpacesIdeasBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpacesIdeasBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpacesIdeasHeader />
        <SpacesIdeasContents />
      </GlassAreaContainer>
    </div>
  );
}
