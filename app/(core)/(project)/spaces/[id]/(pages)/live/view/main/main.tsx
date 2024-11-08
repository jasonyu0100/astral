import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesLiveCore } from './core/main';

export function SpacesLiveMain() {
  return (
    <GlassAreaContainer
      name={SpacesLiveMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesLiveCore />
      {/* <SpacesLiveNavigation /> */}
    </GlassAreaContainer>
  );
}
