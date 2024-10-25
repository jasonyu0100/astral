import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/server/model/scene/main';
import { useContext } from 'react';
import { SpacesViewSidebarScenesListActiveItem } from './item/active/main';
import { SpacesViewSidebarScenesListInactiveItem } from './item/inactive/main';

export function SpacesViewSidebarScenesList() {
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
                <SpacesViewSidebarScenesListActiveItem />
              ) : (
                <SpacesViewSidebarScenesListInactiveItem />
              )}
            </>
          </ContextForIdeaSceneObj.Provider>
        ))}
      </div>
    </div>
  );
}
