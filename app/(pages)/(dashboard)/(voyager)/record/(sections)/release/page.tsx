"use client";

import RecordCollection from "../../collection/main";
import RecordAlbum from "../../collection/shelf/album/main";
import RecordShelf from "../../collection/shelf/main";

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
