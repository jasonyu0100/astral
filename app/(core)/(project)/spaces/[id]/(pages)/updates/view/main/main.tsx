import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesUpdatesCore } from './core/main';
import { SpacesUpdatesNavigation } from './navigation/main';

export function SpacesUpdatesMain() {
  return (
    <GlassAreaContainer
      name={SpacesUpdatesMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesUpdatesCore />
      <SpacesUpdatesNavigation />
    </GlassAreaContainer>
  );
}
