"use client";

import { useState } from "react";
import DriveFolderView from "./view";
import { FileObj } from "@/tables/collection/file/main";
import { GalleryObj } from "@/tables/gallery/main";
import { CollectionObj } from "@/tables/collection/main";
import { galleryTable } from "@/tables/gallery/table";
import { collectionTable } from "@/tables/collection/table";
import isAuth from "@/utils/isAuth";

export interface DriveFolderViewProps {
  gallery: GalleryObj;
  collection: CollectionObj;
  files: FileObj[];
  fileHandler: FileHandler;
}
interface FileHandler {
  addFile: (file: FileObj) => void;
}

function Page() {
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

export default isAuth(Page);