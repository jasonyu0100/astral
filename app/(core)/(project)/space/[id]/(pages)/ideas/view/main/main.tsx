import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceIdeasCore } from './core/main';
import { SpaceIdeasChapterNavigation } from './navigation/main';

export function SpaceIdeasMain() {
  return (
    <GlassAreaContainer
      name={SpaceIdeasMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceIdeasCore />
      <SpaceIdeasChapterNavigation />
    </GlassAreaContainer>
  );
}
