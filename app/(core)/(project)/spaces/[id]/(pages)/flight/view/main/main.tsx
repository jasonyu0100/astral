import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesFlightCore } from './core/main';
import { SpacesFlightNavigation } from './navigation/main';

export function SpacesFlightMain() {
  return (
    <GlassAreaContainer
      name={SpacesFlightMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesFlightCore />
      <SpacesFlightNavigation />
    </GlassAreaContainer>
  );
}
