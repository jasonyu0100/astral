import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/server/model/scene/main';
import { useContext } from 'react';
import { ContextForSpacesViewModals } from '../../../../modal/controller/main';
import SpacesViewRowAdd from './add/main';
import { SpacesViewRowContainer } from './container/main';
import { SpacesViewRowElement } from './element/main';

export function SpacesViewNavigationRow() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const spacesMapModalController = useContext(ContextForSpacesViewModals);

  return (
    <SpacesViewRowContainer>
      {sceneListController.state.objs.map((scene, index) => (
        <ContextForIdeaSceneObj.Provider value={scene} key={scene.id}>
          <ContextForIndexable.Provider value={index} key={scene.id}>
            <SpacesViewRowElement key={scene.id} />
          </ContextForIndexable.Provider>
        </ContextForIdeaSceneObj.Provider>
      ))}
      <SpacesViewRowAdd
        onClick={() => {
          spacesMapModalController.addSceneController.open();
        }}
      />
    </SpacesViewRowContainer>
  );
}
