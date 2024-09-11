import { GlassAreaContainer } from '@/ui/glass/area/main';

import { SpacesFlightCore } from './core/main';
import { SpacesFlightChapterNavigation } from './navigation/main';

export function SpacesFlightMain() {
  return (
    <GlassAreaContainer
      name={SpacesFlightMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesFlightCore />
      <SpacesFlightChapterNavigation />
    </GlassAreaContainer>
  );
}
