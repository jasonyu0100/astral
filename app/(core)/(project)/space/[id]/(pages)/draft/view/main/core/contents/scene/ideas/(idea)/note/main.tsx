import { NoteElemVariant } from '@/(server)/(model)/elements/note/main';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceDraftNotePromptIdea } from './prompt/main';
import { SpaceDraftNoteQuoteIdea } from './quote/main';
import { SpaceDraftNoteStickyIdea } from './sticky/main';

export function SpaceDraftNoteIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.noteElem?.variant === NoteElemVariant.PROMPT && (
        <SpaceDraftNotePromptIdea />
      )}
      {star.noteElem?.variant === NoteElemVariant.QUOTE && (
        <SpaceDraftNoteQuoteIdea />
      )}
      {star.noteElem?.variant === NoteElemVariant.STICKY && (
        <SpaceDraftNoteStickyIdea />
      )}
    </>
  );
}
