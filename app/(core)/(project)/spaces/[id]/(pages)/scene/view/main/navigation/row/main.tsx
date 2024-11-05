import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/architecture/model/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesSceneModals } from '../../../../modal/controller/main';
import SpacesSceneRowAdd from './add/main';
import { SpacesSceneRowContainer } from './container/main';
import { SpacesSceneRowElement } from './element/main';

export function SpacesSceneNavigationRow() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const spacesSceneModalController = useContext(ContextForSpacesSceneModals);

  return (
    <SpacesSceneRowContainer>
      <SpacesSceneRowAdd
        onClick={() => {
          spacesSceneModalController.addSceneController.open();
        }}
      />
      {sceneListController.state.objs.map((scene, index) => (
        <ContextForIdeaSceneObj.Provider value={scene} key={scene.id}>
          <ContextForIndexable.Provider value={index} key={scene.id}>
            <SpacesSceneRowElement key={scene.id} />
          </ContextForIndexable.Provider>
        </ContextForIdeaSceneObj.Provider>
      ))}
    </SpacesSceneRowContainer>
  );
}
