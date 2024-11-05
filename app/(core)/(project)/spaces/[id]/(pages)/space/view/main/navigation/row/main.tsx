import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/architecture/model/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesSpaceModals } from '../../../../modal/controller/main';
import SpacesSpaceRowAdd from './add/main';
import { SpacesSpaceRowContainer } from './container/main';
import { SpacesSpaceRowElement } from './element/main';

export function SpacesSpaceNavigationRow() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const spacesSpaceModalController = useContext(ContextForSpacesSpaceModals);

  return (
    <SpacesSpaceRowContainer>
      <SpacesSpaceRowAdd
        onClick={() => {
          spacesSpaceModalController.addSceneController.open();
        }}
      />
      {sceneListController.state.objs.map((scene, index) => (
        <ContextForIdeaSceneObj.Provider value={scene} key={scene.id}>
          <ContextForIndexable.Provider value={index} key={scene.id}>
            <SpacesSpaceRowElement key={scene.id} />
          </ContextForIndexable.Provider>
        </ContextForIdeaSceneObj.Provider>
      ))}
    </SpacesSpaceRowContainer>
  );
}
