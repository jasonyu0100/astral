import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesViewContents } from './contents/main';
import { SpacesViewHeader } from './header/main';

export function SpacesViewBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpacesViewBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpacesViewHeader />
        <SpacesViewContents />
      </GlassAreaContainer>
    </div>
  );
}
