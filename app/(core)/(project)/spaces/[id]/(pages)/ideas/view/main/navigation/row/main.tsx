import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/architecture/model/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpacesIdeasModals } from '../../../../modal/controller/main';
import SpacesIdeasRowAdd from './add/main';
import { SpacesIdeasRowContainer } from './container/main';
import { SpacesIdeasRowElement } from './element/main';

export function SpacesIdeasNavigationRow() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const spacesSpaceModalController = useContext(ContextForSpacesIdeasModals);

  return (
    <SpacesIdeasRowContainer>
      <SpacesIdeasRowAdd
        onClick={() => {
          spacesSpaceModalController.addSceneController.open();
        }}
      />
      {sceneListController.state.objs.map((scene, index) => (
        <ContextForIdeaSceneObj.Provider value={scene} key={scene.id}>
          <ContextForIndexable.Provider value={index} key={scene.id}>
            <SpacesIdeasRowElement key={scene.id} />
          </ContextForIndexable.Provider>
        </ContextForIdeaSceneObj.Provider>
      ))}
    </SpacesIdeasRowContainer>
  );
}
