"use client";

import { useState } from "react";
import DriveFolderView from "./view";
import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { GalleryObj } from "@/(pages)/(cosmos)/tables/gallery/main";
import { CollectionObj } from "@/(pages)/(cosmos)/tables/collection/main";
import { galleryTable } from "@/(pages)/(cosmos)/tables/gallery/table";
import { collectionTable } from "@/(pages)/(cosmos)/tables/collection/table";

export interface DriveFolderViewProps {
  gallery: GalleryObj;
  collection: CollectionObj;
  files: FileObj[];
  fileHandler: FileHandler;
}
interface FileHandler {
  addFile: (file: FileObj) => void;
}

export default function Page() {
  const [gallery, changeGallery] = useState(
    galleryTable.example
  );
  const [collection, changeCollection] = useState(
    collectionTable.example
  );
  const [files, changeFiles] = useState(
    collectionTable.file.examples
  );

  const fileHandler = {
    addFile: (file: FileObj) => {
      changeFiles((prev) => [file, ...prev]);
    },
  };

  return (
    <DriveFolderView
      gallery={gallery}
      collection={collection}
      files={files}
      fileHandler={fileHandler}
    />
  );
}
