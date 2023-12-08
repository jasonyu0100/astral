"use client";
import GeminiCollectionShelf from "./common/controller/shelf/main";
import GeminiCollectionController from "./common/controller/main";
import GeminiCollectionAlbum from "./common/controller/shelf/album/main";

export default function GeminiCollectionPage() {
  const brands = [];

  return (
    <GeminiCollectionController>
      <GeminiCollectionShelf>
        <GeminiCollectionAlbum />
        <GeminiCollectionAlbum />
        <GeminiCollectionAlbum />
      </GeminiCollectionShelf>
      <GeminiCollectionShelf>
        <GeminiCollectionAlbum />
        <GeminiCollectionAlbum />
        <GeminiCollectionAlbum />
      </GeminiCollectionShelf>
    </GeminiCollectionController>
  );
}
