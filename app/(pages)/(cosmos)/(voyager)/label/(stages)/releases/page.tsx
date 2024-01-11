"use client";

import isAuth from "@/utils/isAuth";
import { RecordCollection } from "../../label-epic/main";
import { RecordAlbum } from "../../label-epic/shelf/album/main";
import { RecordShelf } from "../../label-epic/shelf/main";

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
