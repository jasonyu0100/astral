'use client';

import insideCosmos from '@/utils/isAuth';
import { RecordCollection } from '../../(tracks-epic)/main';
import { RecordAlbum } from '../../(tracks-epic)/shelf/album/main';
import { RecordShelf } from '../../(tracks-epic)/shelf/main';

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
