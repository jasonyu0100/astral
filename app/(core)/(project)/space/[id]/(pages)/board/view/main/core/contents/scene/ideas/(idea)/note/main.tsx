import { NoteElemVariant } from '@/(server)/(model)/elements/note/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceBoardNotePromptIdea } from './prompt/main';
import { SpaceBoardNoteQuoteIdea } from './quote/main';
import { SpaceBoardNoteStickyIdea } from './sticky/main';

export function SpaceBoardNoteIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.noteElem?.variant === NoteElemVariant.PROMPT && (
        <SpaceBoardNotePromptIdea />
      )}
      {star.noteElem?.variant === NoteElemVariant.QUOTE && (
        <SpaceBoardNoteQuoteIdea />
      )}
      {star.noteElem?.variant === NoteElemVariant.STICKY && (
        <SpaceBoardNoteStickyIdea />
      )}
    </>
  );
}
