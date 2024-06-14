import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceBoardSceneIdeas } from './ideas/main';
import { SpaceBoardSceneLinks } from './links/main';

export function SpaceBoardScene() {
  return (
    <GlassAreaContainer
      name={SpaceBoardScene.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
    >
      <SpaceBoardSceneLinks />
      <SpaceBoardSceneIdeas />
    </GlassAreaContainer>
  );
}
