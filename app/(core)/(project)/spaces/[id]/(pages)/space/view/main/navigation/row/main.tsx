import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/architecture/model/scene/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpaceSpaceModals } from '../../../../modal/controller/main';
import SpaceSpaceRowAdd from './add/main';
import { SpaceSpaceRowContainer } from './container/main';
import { SpaceSpaceRowElement } from './element/main';

export function SpaceSpaceNavigationRow() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const spaceSpaceModalController = useContext(ContextForSpaceSpaceModals);

  return (
    <SpaceSpaceRowContainer>
      <SpaceSpaceRowAdd
        onClick={() => {
          spaceSpaceModalController.addSceneController.open();
        }}
      />
      {sceneListController.state.objs.map((scene, index) => (
        <ContextForIdeaSceneObj.Provider value={scene} key={scene.id}>
          <ContextForIndexable.Provider value={index} key={scene.id}>
            <SpaceSpaceRowElement key={scene.id} />
          </ContextForIndexable.Provider>
        </ContextForIdeaSceneObj.Provider>
      ))}
    </SpaceSpaceRowContainer>
  );
}
