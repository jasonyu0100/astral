import { useContext } from 'react';
import { StarContext } from '@/(logic)/internal/data/infra/model/draft/constellation/star/main';
import { NoteVariant } from '@/(logic)/internal/data/infra/model/resource/note/main';
import { NotePromptStar } from './prompt/main';
import { NoteStickyStar } from './sticky/main';
import { NoteQuoteStar } from './quote/main';

export function NoteStar() {
  const star = useContext(StarContext);

  return (
    <>
      {star.note?.variant === NoteVariant.PROMPT && <NotePromptStar />}
      {star.note?.variant === NoteVariant.QUOTE && <NoteQuoteStar />}
      {star.note?.variant === NoteVariant.STICKY && <NoteStickyStar />}
    </>
  );
}




