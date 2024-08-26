import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceReviewCore } from './core/main';
import { SpaceReviewChapterNavigation } from './navigation/main';

export function SpaceReviewMain() {
  return (
    <GlassAreaContainer
      name={SpaceReviewMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceReviewCore />
      <SpaceReviewChapterNavigation />
    </GlassAreaContainer>
  );
}
