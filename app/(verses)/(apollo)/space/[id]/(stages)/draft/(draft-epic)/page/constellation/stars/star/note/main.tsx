import { useContext } from 'react';
import { StarContext } from '@/(ouros)/(model)/draft/constellation/star/main';
import { NoteVariant } from '@/(ouros)/(model)/resource/note/main';
import { NoteQuestionStar } from './question/main';
import { NoteStickyStar } from './sticky/main';
import { NoteQuoteStar } from './quote/main';

export function NoteStar() {
  const star = useContext(StarContext);

  return (
    <>
      {star.note?.variant === NoteVariant.QUESTION && <NoteQuestionStar />}
      {star.note?.variant === NoteVariant.QUOTE && <NoteQuoteStar />}
      {star.note?.variant === NoteVariant.STICKY && <NoteStickyStar />}
    </>
  );
}




