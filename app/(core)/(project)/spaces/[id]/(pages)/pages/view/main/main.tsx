import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesPagesCore } from './core/main';
import { SpacesPagesNavigation } from './navigation/main';

export function SpacesPagesMain() {
  return (
    <GlassAreaContainer
      name={SpacesPagesMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesPagesCore />
      <SpacesPagesNavigation />
    </GlassAreaContainer>
  );
}
