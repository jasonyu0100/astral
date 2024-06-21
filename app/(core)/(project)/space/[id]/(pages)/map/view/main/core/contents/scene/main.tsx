import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceMapSceneIdeas } from './ideas/main';
import { SpaceMapSceneLinks } from './links/main';

export function SpaceMapContentsScene() {
  return (
    <GlassAreaContainer
      name={SpaceMapContentsScene.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
    >
      <SpaceMapSceneLinks />
      <SpaceMapSceneIdeas />
    </GlassAreaContainer>
  );
}
