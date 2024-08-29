import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpaceIdeaChapterScene } from './scene/main';

export function SpaceIdeaSidebarChapterSceneList() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <>
      {sceneListController.state.objs.map((scene, index) => (
        <ContextForIndexable.Provider value={index} key={scene.id}>
          <ContextForChapterSceneObj.Provider value={scene} key={scene.id}>
            <SpaceIdeaChapterScene key={scene.id} />
          </ContextForChapterSceneObj.Provider>
        </ContextForIndexable.Provider>
      ))}
    </>
  );
}
