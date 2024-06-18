import { TextElemVariant } from '@/(server)/(model)/elements/text/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceDraftNotePromptIdea } from './prompt/main';
import { SpaceDraftNoteQuoteIdea } from './quote/main';
import { SpaceDraftNoteStickyIdea } from './sticky/main';

export function SpaceDraftTextIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.textElem?.variant === TextElemVariant.PROMPT && (
        <SpaceDraftNotePromptIdea />
      )}
      {star.textElem?.variant === TextElemVariant.QUOTE && (
        <SpaceDraftNoteQuoteIdea />
      )}
      {star.textElem?.variant === TextElemVariant.STICKY && (
        <SpaceDraftNoteStickyIdea />
      )}
    </>
  );
}
