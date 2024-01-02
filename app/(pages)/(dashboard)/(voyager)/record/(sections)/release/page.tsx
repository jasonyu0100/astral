"use client";

import { RecordCollection } from "../../collection-epic/main";
import { RecordAlbum } from "../../collection-epic/shelf/album/main";
import { RecordShelf } from "../../collection-epic/shelf/main";

export default function Page() {
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
