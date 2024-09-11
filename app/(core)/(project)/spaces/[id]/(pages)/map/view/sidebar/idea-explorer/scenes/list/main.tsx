import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { useContext } from 'react';
import { SpacesMapSidebarScenesListActiveItem } from './item/active/main';
import { SpacesMapSidebarScenesListInactiveItem } from './item/inactive/main';

export function SpacesMapSidebarScenesList() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div
      className='flex flex-col overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        {sceneListController.state.objs.map((scene) => (
          <ContextForChapterSceneObj.Provider value={scene}>
            <>
              {sceneListController.actions.stateActions.checkActive(scene) ? (
                <SpacesMapSidebarScenesListActiveItem />
              ) : (
                <SpacesMapSidebarScenesListInactiveItem />
              )}
            </>
          </ContextForChapterSceneObj.Provider>
        ))}
      </div>
    </div>
  );
}
