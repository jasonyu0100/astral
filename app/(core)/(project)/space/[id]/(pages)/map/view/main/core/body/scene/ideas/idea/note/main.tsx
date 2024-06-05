import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { NoteElemVariant } from '@/(model)/elements/note/main';
import { NotePromptIdea } from './prompt/main';
import { NoteStickyIdea } from './sticky/main';
import { NoteQuoteIdea } from './quote/main';

export function NoteIdea() {
  const star = useContext(SceneIdeaContext);

  return (
    <>
      {star.note?.variant === NoteElemVariant.PROMPT && <NotePromptIdea />}
      {star.note?.variant === NoteElemVariant.QUOTE && <NoteQuoteIdea />}
      {star.note?.variant === NoteElemVariant.STICKY && <NoteStickyIdea />}
    </>
  );
}




