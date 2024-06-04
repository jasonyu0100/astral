import { MutableRefObject, useContext } from 'react';
import {
  IdeaContext,
  IdeaVariant,
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
  const idea = useContext(IdeaContext);
  const ideaMotionContext = useIdeaHandler(idea, constraintsRef);

  return (
    <IdeaHandlerContext.Provider value={ideaMotionContext}>
      {idea.variant === IdeaVariant.FILE && <FileIdea />}
      {idea.variant === IdeaVariant.LOG && <LogIdea />}
      {idea.variant === IdeaVariant.LINK && <LinkIdea />}
      {idea.variant === IdeaVariant.NOTE && <NoteIdea />}
    </IdeaHandlerContext.Provider>
  );
}
