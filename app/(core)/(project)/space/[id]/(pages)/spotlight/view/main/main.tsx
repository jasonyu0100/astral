import { GlassAreaContainer } from '@/ui/glass/area/main';

import { SpaceSpotlightCore } from './core/main';
import { SpaceSpotlightChapterNavigation } from './navigation/main';

export function SpaceSpotlightMain() {
  return (
    <GlassAreaContainer
      name={SpaceSpotlightMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceSpotlightCore />
      <SpaceSpotlightChapterNavigation />
    </GlassAreaContainer>
  );
}
