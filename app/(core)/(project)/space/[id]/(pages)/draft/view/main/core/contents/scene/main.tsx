import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceDraftSceneIdeas } from './ideas/main';
import { SpaceDraftSceneLinks } from './links/main';

export function SpaceDraftContentsScene() {
  return (
    <GlassAreaContainer
      name={SpaceDraftContentsScene.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
    >
      <SpaceDraftSceneLinks />
      <SpaceDraftSceneIdeas />
    </GlassAreaContainer>
  );
}
