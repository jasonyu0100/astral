import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpaceChatInactiveContainer } from '../list/chapter/container/inactive/main';
import { SpaceChatSceneChatAdd } from './chat/add/main';
import { SpaceChatChapterScene } from './chat/main';
import { SpaceChatActiveContainer } from './header/container/active/main';
import { SpaceChatChapterHeader } from './header/main';

export function SpaceChatSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const sceneListController = useContext(ContextForChapterSceneList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <SpaceChatActiveContainer>
          <SpaceChatChapterHeader />
          {sceneListController.state.objs.map((scene, index) => (
            <ContextForIndexable.Provider value={index} key={scene.id}>
              <ContextForChapterSceneObj.Provider value={scene} key={scene.id}>
                <SpaceChatChapterScene key={scene.id} />
              </ContextForChapterSceneObj.Provider>
            </ContextForIndexable.Provider>
          ))}
          <SpaceChatSceneChatAdd />
        </SpaceChatActiveContainer>
      ) : (
        <SpaceChatInactiveContainer>
          <SpaceChatChapterHeader />
        </SpaceChatInactiveContainer>
      )}
    </>
  );
}
