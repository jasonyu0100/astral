import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceFlowCore } from './core/main';
import { SpaceFlowChapterNavigation } from './navigation/main';

export function SpaceFlowMain() {
  return (
    <GlassAreaContainer
      name={SpaceFlowMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceFlowCore />
      <SpaceFlowChapterNavigation />
    </GlassAreaContainer>
  );
}
