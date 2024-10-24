import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/(server)/model/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesMapModals } from '../../../../modal/controller/main';
import SpacesMapRowAdd from './add/main';
import { SpacesMapRowContainer } from './container/main';
import { SpacesMapRowElement } from './element/main';

export function SpacesMapNavigationRow() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const spacesMapModalController = useContext(ContextForSpacesMapModals);

  return (
    <SpacesMapRowContainer>
      {sceneListController.state.objs.map((scene, index) => (
        <ContextForIdeaSceneObj.Provider value={scene} key={scene.id}>
          <ContextForIndexable.Provider value={index} key={scene.id}>
            <SpacesMapRowElement key={scene.id} />
          </ContextForIndexable.Provider>
        </ContextForIdeaSceneObj.Provider>
      ))}
      <SpacesMapRowAdd
        onClick={() => {
          spacesMapModalController.addSceneController.open();
        }}
      />
    </SpacesMapRowContainer>
  );
}
