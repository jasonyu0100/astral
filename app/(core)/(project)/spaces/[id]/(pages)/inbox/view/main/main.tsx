import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpaceInboxCore } from './core/main';
import { SpaceInboxNavigation } from './navigation/main';

export function SpaceInboxMain() {
  return (
    <GlassAreaContainer
      name={SpaceInboxMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceInboxCore />
      <SpaceInboxNavigation />
    </GlassAreaContainer>
  );
}
