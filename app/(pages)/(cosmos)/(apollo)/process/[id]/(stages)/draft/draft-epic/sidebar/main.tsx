import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { GalleryObj } from "@/(pages)/(cosmos)/tables/gallery/main";
import { useState } from "react";
import { SidebarView } from "./view";
import { CollectionObj } from "@/(pages)/(cosmos)/tables/collection/main";
import { collectionTable } from "@/(pages)/(cosmos)/tables/collection/table";
import { galleryTable } from "@/(pages)/(cosmos)/tables/gallery/table";

export enum SidebarMode {
  Drive = "Drive",
  Gallery = "Gallery",
  Collection = "Collection",
}

interface FileHandler {
  addFile: (media: FileObj) => void;
}
interface SidebarViewHandler {
  goToDrvieView: () => void;
  goToGalleryView: () => void;
  goToCollectionView: () => void;
  goToGallery: (section: GalleryObj) => void;
  goToCollection: (section: CollectionObj) => void;
}
export interface SidebarViewProps {
  sidebarMode: SidebarMode;
  gallerys: GalleryObj[];
  sectionId: string;
  collections: CollectionObj[];
  collectionId: string;
  files: FileObj[];
  sidebarViewHandler: SidebarViewHandler;
  fileHandler: FileHandler;
}

export function Sidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SidebarMode.Drive);
  const [gallerys, changeSections] = useState<GalleryObj[]>(
    galleryTable.examples
  );
  const [galleryId, changeGalleryId] = useState<string>("");
  const [collections, chnageCollections] = useState<CollectionObj[]>(
    collectionTable.examples
  );
  const [collectionId, changeCollectionId] = useState<string>("");
  const [files, changeFiles] = useState<FileObj[]>(
    collectionTable.file.examples
  );
  const sidebarViewHandler: SidebarViewHandler = {
    goToDrvieView: () => {
      changeSidebarMode(SidebarMode.Drive);
    },
    goToGalleryView: () => {
      changeSidebarMode(SidebarMode.Gallery);
    },
    goToCollectionView: () => {
      changeSidebarMode(SidebarMode.Collection);
    },
    goToGallery: (section: GalleryObj) => {
      changeGalleryId(section.id);
      changeSidebarMode(SidebarMode.Gallery);
    },
    goToCollection: (folder: CollectionObj) => {
      changeCollectionId(folder.id);
      changeSidebarMode(SidebarMode.Collection);
    },
  };

  const fileHandler = {
    addFile: (media: FileObj) => {
      changeFiles((prev) => [...prev, media]);
    },
  };

  return (
    <SidebarView
      sidebarViewHandler={sidebarViewHandler}
      sidebarMode={sidebarMode}
      gallerys={gallerys}
      sectionId={galleryId}
      collections={collections}
      collectionId={collectionId}
      files={files}
      fileHandler={fileHandler}
    />
  );
}
