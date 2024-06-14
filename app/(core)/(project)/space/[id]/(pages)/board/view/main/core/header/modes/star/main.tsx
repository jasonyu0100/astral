import { useContext } from 'react';
import { BoardHeaderIdeaCenter } from './center/main';
import { BoardHeaderIdeaLeft } from './left/main';
import { BoardHeaderIdeaRight } from './right/main';
import {
  ContextForSceneIdeaObj,
  SceneIdeaObj,
} from '@/(server)/(model)/space/chapter/scene/idea/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function BoardHeaderIdea() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <ContextForSceneIdeaObj.Provider
      value={ideaListController.state.currentObj || ({} as SceneIdeaObj)}
    >
      <BoardHeaderIdeaLeft />
      <BoardHeaderIdeaCenter />
      <BoardHeaderIdeaRight />
    </ContextForSceneIdeaObj.Provider>
  );
}
