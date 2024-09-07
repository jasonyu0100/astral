import { GlassAreaContainer } from '@/ui/glass/area/main';

import { SpaceFlightCore } from './core/main';
import { SpaceFlightChapterNavigation } from './navigation/main';

export function SpaceFlightMain() {
  return (
    <GlassAreaContainer
      name={SpaceFlightMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceFlightCore />
      <SpaceFlightChapterNavigation />
    </GlassAreaContainer>
  );
}
