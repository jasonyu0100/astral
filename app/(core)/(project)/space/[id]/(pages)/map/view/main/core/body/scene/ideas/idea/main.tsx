import { MutableRefObject, useContext } from 'react';
import {
  SceneIdeaContext,
  SceneIdeaVariant,
} from '@/(model)/space/chapter/scene/idea/main';
import { FileIdea } from './file/main';
import { LogIdea } from './log/main';
import { LinkIdea } from './link/main';
import { NoteIdea } from './note/main';
import { IdeaHandlerContext } from '@/(controller)/ideas/idea/main';
import { useIdeaHandler } from '@/(controller)/ideas/idea/main';

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
      {idea.variant === SceneIdeaVariant.LOG && <LogIdea />}
      {idea.variant === SceneIdeaVariant.LINK && <LinkIdea />}
      {idea.variant === SceneIdeaVariant.NOTE && <NoteIdea />}
    </IdeaHandlerContext.Provider>
  );
}
