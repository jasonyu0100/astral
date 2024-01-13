import { GalleryObj } from "@/tables/gallery/main";
import { useState } from "react";
import { SidebarView } from "./view";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { galleryTable } from "@/tables/gallery/table";
import { ResourceObj } from "@/tables/resource/main";
import { resourceTable } from "@/tables/resource/table";

export enum SidebarMode {
  Home = "Home",
  Gallery = "Gallery",
  Collection = "Collection",
}

interface ResourceHandler {
  addResource: (resource: ResourceObj) => void;
}
interface SidebarViewHandler {
  goToHomeView: () => void;
  goToGalleryView: () => void;
  goToCollectionView: () => void;
  goToGallery: (section: GalleryObj) => void;
  goToCollection: (section: CollectionObj) => void;
}
export interface SidebarViewProps {
  sidebarMode: SidebarMode;
  gallerys: GalleryObj[];
  galleryId: string;
  collections: CollectionObj[];
  collectionId: string;
  resources: ResourceObj[];
  sidebarViewHandler: SidebarViewHandler;
  fileHandler: ResourceHandler;
}

export function DraftSidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SidebarMode.Home);
  const [gallerys, changeSections] = useState<GalleryObj[]>(
    galleryTable.examples
  );
  const [galleryId, changeGalleryId] = useState<string>("");
  const [collections, chnageCollections] = useState<CollectionObj[]>(
    galleryTable.collection.examples
  );
  const [collectionId, changeCollectionId] = useState<string>("");
  const [resources, changeResources] = useState<ResourceObj[]>(
    resourceTable.examples
  );
  const sidebarViewHandler: SidebarViewHandler = {
    goToHomeView: () => {
      changeSidebarMode(SidebarMode.Home);
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

  const fileHandler : ResourceHandler = {
    addResource: (resource: ResourceObj) => {
      changeResources((prev) => [...prev, resource]);
    },
  };

  return (
    <SidebarView
      sidebarViewHandler={sidebarViewHandler}
      sidebarMode={sidebarMode}
      gallerys={gallerys}
      galleryId={galleryId}
      collections={collections}
      collectionId={collectionId}
      resources={resources}
      fileHandler={fileHandler}
    />
  );
}
