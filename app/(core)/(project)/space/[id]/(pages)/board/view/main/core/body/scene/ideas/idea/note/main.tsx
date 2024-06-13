import { useContext } from 'react';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { NoteElemVariant } from '@/(server)/(model)/elements/note/main';
import { NotePromptIdea } from './prompt/main';
import { NoteStickyIdea } from './sticky/main';
import { NoteQuoteIdea } from './quote/main';

export function NoteIdea() {
  const star = useContext(ContextForSceneIdeaObj);

  return (
    <>
      {star.noteElem?.variant === NoteElemVariant.PROMPT && <NotePromptIdea />}
      {star.noteElem?.variant === NoteElemVariant.QUOTE && <NoteQuoteIdea />}
      {star.noteElem?.variant === NoteElemVariant.STICKY && <NoteStickyIdea />}
    </>
  );
}




