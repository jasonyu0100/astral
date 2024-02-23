'use client';

import insideCosmos from '@/(logic)/utils/isAuth';
import { RecordCollection } from '../../(motions-epic)/main';
import { RecordAlbum } from '../../(motions-epic)/shelf/album/main';
import { RecordShelf } from '../../(motions-epic)/shelf/main';

function Page() {
  return (
    <>
      <RecordCollection>
        <RecordShelf>
          <RecordAlbum />
          <RecordAlbum />
          <RecordAlbum />
        </RecordShelf>
        <RecordShelf>
          <RecordAlbum />
          <RecordAlbum />
          <RecordAlbum />
        </RecordShelf>
      </RecordCollection>
    </>
  );
}

export default insideCosmos(Page);
