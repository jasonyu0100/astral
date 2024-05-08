import { useContext } from 'react';
import { IdeaContext } from '@/(types)/model/map/part/idea/main';
import { NoteVariant } from '@/(types)/model/resource/note/main';
import { NotePromptStar } from './prompt/main';
import { NoteStickyStar } from './sticky/main';
import { NoteQuoteStar } from './quote/main';

export function NoteStar() {
  const star = useContext(IdeaContext);

  return (
    <>
      {star.note?.variant === NoteVariant.PROMPT && <NotePromptStar />}
      {star.note?.variant === NoteVariant.QUOTE && <NoteQuoteStar />}
      {star.note?.variant === NoteVariant.STICKY && <NoteStickyStar />}
    </>
  );
}




