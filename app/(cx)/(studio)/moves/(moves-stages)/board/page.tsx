'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { RecordCollection } from '../../(moves-epic)/main';
import { RecordAlbum } from '../../(moves-epic)/shelf/album/main';
import { RecordShelf } from '../../(moves-epic)/shelf/main';

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

export default insideVerses(Page);
