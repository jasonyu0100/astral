"use client";
import { useState } from "react";
import { DriveSectionView } from "./view";
import { GalleryObj } from "@/tables/gallery/main";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { collectionTable, galleryTable } from "@/tables/gallery/table";
import isAuth from "@/utils/isAuth";

export interface DriveSectionViewProps {
  gallery: GalleryObj;
  collections: CollectionObj[];
  addCollection: (folder: CollectionObj) => void;

}

function Page() {
  const [gallery, changeGallery] = useState<GalleryObj>(
    galleryTable.example
  );
  const [collections, changeCollections] = useState<CollectionObj[]>(collectionTable.examples)

  const addCollection = (collection: CollectionObj) => {
    changeCollections((prev) => [...prev, collection])
    changeGallery((prev) => {
      return {
        ...prev,
        collections: [...prev.collectionIds, collection.id],
      };
    });
  };

  return <DriveSectionView gallery={gallery} collections={collections} addCollection={addCollection} />;
}

export default isAuth(Page);