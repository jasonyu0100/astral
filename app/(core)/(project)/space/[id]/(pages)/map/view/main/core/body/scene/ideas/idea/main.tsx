import { MutableRefObject, useContext } from 'react';
import {
  SceneIdeaContext,
  SceneIdeaVariant,
} from '@/(model)/space/chapter/scene/idea/main';
import { FileIdea } from './file/main';
import { LinkIdea } from './link/main';
import { NoteIdea } from './note/main';
import { IdeaHandlerContext } from '@/(model)/(controller)/(archive)/ideas/idea/main';
import { useIdeaHandler } from '@/(model)/(controller)/(archive)/ideas/idea/main';

export function MapIdea({
  constraintsRef,
}: {
  constraintsRef: MutableRefObject<null>;
}) {
  const idea = useContext(SceneIdeaContext);
  const ideaMotionContext = useIdeaHandler(idea, constraintsRef);

  return (
    <IdeaHandlerContext.Provider value={ideaMotionContext}>
      {idea.variant === SceneIdeaVariant.FILE && <FileIdea />}
      {idea.variant === SceneIdeaVariant.LINK && <LinkIdea />}
      {idea.variant === SceneIdeaVariant.NOTE && <NoteIdea />}
    </IdeaHandlerContext.Provider>
  );
}
