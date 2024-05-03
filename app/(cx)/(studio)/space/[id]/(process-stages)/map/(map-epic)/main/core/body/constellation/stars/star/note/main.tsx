import { useContext } from 'react';
import { StarContext } from '@/(lgx)/internal/model/map/constellation/star/main';
import { NoteVariant } from '@/(lgx)/internal/model/resource/note/main';
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




