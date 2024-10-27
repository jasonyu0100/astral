import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/server/model/scene/main';
import { useContext } from 'react';
import { SpacesSceneSidebarScenesListActiveItem } from './item/active/main';
import { SpacesSceneSidebarScenesListInactiveItem } from './item/inactive/main';

export function SpacesSceneSidebarScenesList() {
  const sceneListController = useContext(ContextForIdeaSceneList);

  return (
    <div
      className='flex flex-col overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        {sceneListController.state.objs.map((scene) => (
          <ContextForIdeaSceneObj.Provider value={scene}>
            <>
              {sceneListController.actions.stateActions.checkActive(scene) ? (
                <SpacesSceneSidebarScenesListActiveItem />
              ) : (
                <SpacesSceneSidebarScenesListInactiveItem />
              )}
            </>
          </ContextForIdeaSceneObj.Provider>
        ))}
      </div>
    </div>
  );
}
