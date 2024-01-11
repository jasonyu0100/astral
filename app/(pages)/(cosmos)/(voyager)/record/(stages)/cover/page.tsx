"use client";

import isAuth from "@/utils/isAuth";
import { RecordCollection } from "../../collection-epic/main";
import { RecordAlbum } from "../../collection-epic/shelf/album/main";
import { RecordShelf } from "../../collection-epic/shelf/main";

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

export default isAuth(Page);
