"use client";
import { useState } from "react";
import { DriveSectionView } from "./view";
import { GalleryObj } from "@/(pages)/(cosmos)/tables/gallery/main";
import { CollectionObj } from "@/(pages)/(cosmos)/tables/collection/main";
import { galleryTable } from "@/(pages)/(cosmos)/tables/gallery/table";
import { collectionTable } from "@/(pages)/(cosmos)/tables/collection/table";
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