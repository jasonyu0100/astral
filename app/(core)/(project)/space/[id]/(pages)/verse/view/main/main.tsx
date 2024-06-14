import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceVerseCore } from './core/main';
import { SpaceVerseChapterNavigation } from './navigation/main';

export function SpaceVerseMain() {
  return (
    <GlassAreaContainer
      name={SpaceVerseMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceVerseCore />
      <SpaceVerseChapterNavigation />
    </GlassAreaContainer>
  );
}
