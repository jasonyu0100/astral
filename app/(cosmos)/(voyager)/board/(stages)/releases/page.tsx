'use client';

import insideCosmos from '@/utils/isAuth';
import { RecordCollection } from '../../board-epic/main';
import { RecordAlbum } from '../../board-epic/shelf/album/main';
import { RecordShelf } from '../../board-epic/shelf/main';

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
