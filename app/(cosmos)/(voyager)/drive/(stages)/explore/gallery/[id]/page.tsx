"use client";
import { createContext, useState } from "react";
import { DriveSectionView } from "./view";
import { GalleryObj } from "@/tables/gallery/main";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { collectionTable, galleryTable } from "@/tables/gallery/table";
import insideCosmos from "@/utils/isAuth";

export interface ExploreGalleryContextObj {
  gallery: GalleryObj;
  collections: CollectionObj[];
  addCollection: (folder: CollectionObj) => void;
}

export const ExploreGalleryContext = createContext<ExploreGalleryContextObj>({
  gallery: {} as GalleryObj,
  collections: [],
  addCollection: () => {},
});

function Page() {
  const [gallery, changeGallery] = useState<GalleryObj>(galleryTable.example);
  const [collections, changeCollections] = useState<CollectionObj[]>(
    collectionTable.examples
  );

  const addCollection = (collection: CollectionObj) => {
    changeCollections((prev) => [...prev, collection]);
    changeGallery((prev) => {
      return {
        ...prev,
        collections: [...prev.collectionIds, collection.id],
      };
    });
  };

  const context: ExploreGalleryContextObj = {
    gallery,
    collections,
    addCollection,
  };

  return (
    <ExploreGalleryContext.Provider value={context}>
      <DriveSectionView />
    </ExploreGalleryContext.Provider>
  );
}

export default insideCosmos(Page);
