import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpaceChatChapterScene } from './scene/main';

export function SpaceChatSidebarChapterSceneList() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <>
      {sceneListController.state.objs.map((scene, index) => (
        <ContextForIndexable.Provider value={index} key={scene.id}>
          <ContextForChapterSceneObj.Provider value={scene} key={scene.id}>
            <SpaceChatChapterScene key={scene.id} />
          </ContextForChapterSceneObj.Provider>
        </ContextForIndexable.Provider>
      ))}
    </>
  );
}
