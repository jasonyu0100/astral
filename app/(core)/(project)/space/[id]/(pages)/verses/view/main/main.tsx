import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceVersesCore } from './core/main';
import { SpaceVersesChapterNavigation } from './navigation/main';

export function SpaceVersesMain() {
  return (
    <GlassAreaContainer
      name={SpaceVersesMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceVersesCore />
      <SpaceVersesChapterNavigation />
    </GlassAreaContainer>
  );
}
