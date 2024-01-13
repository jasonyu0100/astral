import { useContext } from "react";
import { ExploreGalleryContext } from "../../../page";
import { GalleryCollectionContainer } from "../container/main";
import { CollectionAddCover } from "./cover/main";
import { CollectionAddInfo } from "./info/main";
import { collectionTable } from "@/tables/gallery/table";

export function GalleryCollectionAdd() {
  const { addCollection } = useContext(ExploreGalleryContext);

  return (
    <button
      onClick={() => {
        addCollection(collectionTable.example);
      }}
    >
      <GalleryCollectionContainer>
        <CollectionAddCover />
        <CollectionAddInfo />
      </GalleryCollectionContainer>
    </button>
  );
}
