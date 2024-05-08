import { useContext } from 'react';
import { MapHeaderIdeaCenter } from './center/main';
import { MapHeaderIdeaLeft } from './left/main';
import { MapHeaderIdeaRight } from './right/main';
import { IdeaContext, IdeaObj } from '@/(types)/model/map/part/idea/main';
import { IdeasHandlerContext } from '@/(types)/handler/ideas/main';

export function MapHeaderIdea() {
  const ideasHandler = useContext(IdeasHandlerContext);
  const ideaId = ideasHandler.ideaId;
  const idea = ideasHandler.ideas.find((idea) => idea.id === ideaId) || {};

  return (
    <IdeaContext.Provider value={idea as IdeaObj}>
      <MapHeaderIdeaLeft />
      <MapHeaderIdeaCenter />
      <MapHeaderIdeaRight />
    </IdeaContext.Provider>
  );
}
