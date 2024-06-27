import { TextElemVariant } from '@/(server)/(model)/elements/text/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapNotePromptIdea } from './prompt/main';
import { SpaceMapNoteQuoteIdea } from './quote/main';
import { SpaceMapNoteStickyIdea } from './sticky/main';

export function SpaceMapTextIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.textElem?.variant === TextElemVariant.LINE && (
        <SpaceMapNotePromptIdea />
      )}
      {star.textElem?.variant === TextElemVariant.BLOCK && (
        <SpaceMapNoteQuoteIdea />
      )}
      {star.textElem?.variant === TextElemVariant.STICKY && (
        <SpaceMapNoteStickyIdea />
      )}
    </>
  );
}
