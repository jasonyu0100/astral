import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesPublicCore } from './core/main';

export function SpacesPublicMain() {
  return (
    <GlassAreaContainer
      name={SpacesPublicMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesPublicCore />
      {/* <SpacesPublicNavigation /> */}
    </GlassAreaContainer>
  );
}
