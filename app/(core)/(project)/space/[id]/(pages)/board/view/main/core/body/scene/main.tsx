import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { BoardLinks } from './links/main';
import { BoardSceneIdeas } from './ideas/main';

export function BoardScene() {
  return (
    <GlassAreaContainer
      name={BoardScene.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
    >
      <BoardLinks />
      <BoardSceneIdeas />
    </GlassAreaContainer>
  );
}
