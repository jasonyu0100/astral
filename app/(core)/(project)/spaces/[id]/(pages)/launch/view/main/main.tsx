import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesLaunchCore } from './core/main';
import { SpacesLaunchNavigation } from './navigation/main';

export function SpacesLaunchMain() {
  return (
    <GlassAreaContainer
      name={SpacesLaunchMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesLaunchCore />
      <SpacesLaunchNavigation />
    </GlassAreaContainer>
  );
}
