import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import React, { useContext } from 'react';
import { SpaceIdeaActiveContainer } from './header/container/active/main';
import { SpaceIdeaInactiveContainer } from './header/container/inactive/main';
import { SpaceIdeaChapterHeader } from './header/main';
import { SpaceIdeaSceneChatAdd } from './scene/add/main';
import { SpaceIdeaChapterScene } from './scene/main';

export function SpaceIdeaSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const sceneListController = useContext(ContextForChapterSceneList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <SpaceIdeaActiveContainer>
          <SpaceIdeaChapterHeader />
          {sceneListController.state.objs.map((scene, index) => (
            <ContextForIndexable.Provider value={index} key={scene.id}>
              <ContextForChapterSceneObj.Provider value={scene} key={scene.id}>
                <SpaceIdeaChapterScene key={scene.id} />
              </ContextForChapterSceneObj.Provider>
            </ContextForIndexable.Provider>
          ))}
          <SpaceIdeaSceneChatAdd />
        </SpaceIdeaActiveContainer>
      ) : (
        <SpaceIdeaInactiveContainer>
          <SpaceIdeaChapterHeader />
        </SpaceIdeaInactiveContainer>
      )}
    </>
  );
}
