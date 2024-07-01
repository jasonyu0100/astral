import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceDraftsCore } from './core/main';
import { SpaceDraftsChapterNavigation } from './navigation/main';

export function SpaceDraftsMain() {
  return (
    <GlassAreaContainer
      name={SpaceDraftsMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceDraftsCore />
      <SpaceDraftsChapterNavigation />
    </GlassAreaContainer>
  );
}
