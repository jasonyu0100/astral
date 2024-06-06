import { useContext } from 'react';
import { MapHeaderIdeaCenter } from './center/main';
import { MapHeaderIdeaLeft } from './left/main';
import { MapHeaderIdeaRight } from './right/main';
import { SceneIdeaContext, SceneIdeaObj } from '@/(model)/space/chapter/scene/idea/main';
import { IdeasHandlerContext } from '@/(model)/(controller)/(archive)/ideas/main';

export function MapHeaderIdea() {
  const ideasHandler = useContext(IdeasHandlerContext);
  const ideaId = ideasHandler.ideaId;
  const idea = ideasHandler.ideas.find((idea) => idea.id === ideaId) || {};

  return (
    <SceneIdeaContext.Provider value={idea as SceneIdeaObj}>
      <MapHeaderIdeaLeft />
      <MapHeaderIdeaCenter />
      <MapHeaderIdeaRight />
    </SceneIdeaContext.Provider>
  );
}
