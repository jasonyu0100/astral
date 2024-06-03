import { useContext } from 'react';
import { IdeaContext } from '@/(model)/map/part/idea/main';
import { NoteVariant } from '@/(model)/resource/note/main';
import { NotePromptIdea } from './prompt/main';
import { NoteStickyIdea } from './sticky/main';
import { NoteQuoteIdea } from './quote/main';

export function NoteIdea() {
  const star = useContext(IdeaContext);

  return (
    <>
      {star.note?.variant === NoteVariant.PROMPT && <NotePromptIdea />}
      {star.note?.variant === NoteVariant.QUOTE && <NoteQuoteIdea />}
      {star.note?.variant === NoteVariant.STICKY && <NoteStickyIdea />}
    </>
  );
}




