import { useContext } from 'react';
import { MapHeaderIdeaCenter } from './center/main';
import { MapHeaderIdeaLeft } from './left/main';
import { MapHeaderIdeaRight } from './right/main';
import { ContextForSceneIdeaObj, SceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';

export function MapHeaderIdea() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <ContextForSceneIdeaObj.Provider value={ideaListController.state.currentObj}>
      <MapHeaderIdeaLeft />
      <MapHeaderIdeaCenter />
      <MapHeaderIdeaRight />
    </ContextForSceneIdeaObj.Provider>
  );
}
