import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/server/model/scene/main';
import { useContext } from 'react';
import { ContextForSpacesSceneModals } from '../../../../modal/controller/main';
import SpacesSceneRowAdd from './add/main';
import { SpacesSceneRowContainer } from './container/main';
import { SpacesSceneRowElement } from './element/main';

export function SpacesSceneNavigationRow() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const spacesMapModalController = useContext(ContextForSpacesSceneModals);

  return (
    <SpacesSceneRowContainer>
      {sceneListController.state.objs.map((scene, index) => (
        <ContextForIdeaSceneObj.Provider value={scene} key={scene.id}>
          <ContextForIndexable.Provider value={index} key={scene.id}>
            <SpacesSceneRowElement key={scene.id} />
          </ContextForIndexable.Provider>
        </ContextForIdeaSceneObj.Provider>
      ))}
      <SpacesSceneRowAdd
        onClick={() => {
          spacesMapModalController.addSceneController.open();
        }}
      />
    </SpacesSceneRowContainer>
  );
}
