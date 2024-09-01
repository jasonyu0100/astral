import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { useContext } from 'react';
import { SpaceJourneySidebarScenesListItemActive } from './item/active/main';
import { SpaceJourneySidebarScenesListItemInactive } from './item/inactive/main';

export function SpaceJourneySidebarScenesList() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div className='flex flex-col space-y-[1rem] p-[1rem]'>
        {sceneListController.state.more.queryResults.map((scene) => (
          <ContextForChapterSceneObj.Provider value={scene}>
            {sceneListController.actions.stateActions.checkActive(scene) ? (
              <SpaceJourneySidebarScenesListItemActive />
            ) : (
              <SpaceJourneySidebarScenesListItemInactive />
            )}
          </ContextForChapterSceneObj.Provider>
        ))}
      </div>
    </div>
  );
}
