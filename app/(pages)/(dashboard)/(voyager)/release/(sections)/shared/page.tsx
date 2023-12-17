"use client";

import ReleaseController from "../../common/controller/main";
import ReleaseAlbum from "../../common/controller/shelf/album/main";
import ReleaseShelf from "../../common/controller/shelf/main";

export default function ReleaseSharedPage() {
  return (
    <>
      <ReleaseController>
        <ReleaseShelf>
          <ReleaseAlbum />
          <ReleaseAlbum />
          <ReleaseAlbum />
        </ReleaseShelf>
        <ReleaseShelf>
          <ReleaseAlbum />
          <ReleaseAlbum />
          <ReleaseAlbum />
        </ReleaseShelf>
      </ReleaseController>
    </>
  );
}

