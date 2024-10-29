import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesPageCore } from './core/main';
import { SpacesPageNavigation } from './navigation/main';

export function SpacesPageMain() {
  return (
    <GlassAreaContainer
      name={SpacesPageMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesPageCore />
      <SpacesPageNavigation />
    </GlassAreaContainer>
  );
}
