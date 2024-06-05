import { useContext } from 'react';
import { SceneIdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import { NoteVariant } from '@/(model)/concept/note/main';
import { NotePromptIdea } from './prompt/main';
import { NoteStickyIdea } from './sticky/main';
import { NoteQuoteIdea } from './quote/main';

export function NoteIdea() {
  const star = useContext(SceneIdeaContext);

  return (
    <>
      {star.note?.variant === NoteVariant.PROMPT && <NotePromptIdea />}
      {star.note?.variant === NoteVariant.QUOTE && <NoteQuoteIdea />}
      {star.note?.variant === NoteVariant.STICKY && <NoteStickyIdea />}
    </>
  );
}




