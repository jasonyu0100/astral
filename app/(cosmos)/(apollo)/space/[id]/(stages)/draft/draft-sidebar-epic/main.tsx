import { GalleryObj } from "@/tables/gallery/main";
import { createContext, useState } from "react";
import { DraftSidebarView } from "./view";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { collectionTable, galleryTable } from "@/tables/gallery/table";
import { ResourceObj } from "@/tables/resource/main";
import { resourceTable } from "@/tables/resource/table";

export enum SidebarMode {
  Home = "Home",
  Gallery = "Gallery",
  Collection = "Collection",
}

interface ResourceHandler {
  addResource: (resource: ResourceObj) => void;
  queryResources: (query: string) => ResourceObj[];
}
interface SidebarHandler {
  goToHomeView: () => void;
  goToGalleryView: () => void;
  goToCollectionView: () => void;
  goToGallery: (section: GalleryObj) => void;
  goToCollection: (section: CollectionObj) => void;
}
export interface DraftSidebarContextObject {
  gallery?: GalleryObj;
  collection?: CollectionObj;
  sidebarMode: SidebarMode;
  gallerys: GalleryObj[];
  galleryId: string;
  collections: CollectionObj[];
  collectionId: string;
  resources: ResourceObj[];
  searchResults: ResourceObj[];
  sidebarHandler: SidebarHandler | any;
  resourceHandler: ResourceHandler | any;
}

export const DraftSidebarContext = createContext<DraftSidebarContextObject>({
  sidebarMode: SidebarMode.Home,
  gallerys: [],
  galleryId: "",
  collections: [],
  collectionId: "",
  searchResults: [],
  resources: [],
  sidebarHandler: undefined,
  resourceHandler: undefined,
});

export function DraftSidebar() {
  const [sidebarMode, changeSidebarMode] = useState(SidebarMode.Home);
  const [gallerys, changeSections] = useState<GalleryObj[]>(
    galleryTable.examples
  );
  const [galleryId, changeGalleryId] = useState<string>("");
  const [collections, chnageCollections] = useState<CollectionObj[]>(
    collectionTable.examples
  );
  const [collectionId, changeCollectionId] = useState<string>("");
  const [resources, changeResources] = useState<ResourceObj[]>(
    resourceTable.examples
  );


  const gallery = gallerys.find((gallery) => gallery.id === galleryId);
  const collection = collections.find(
    (collection) => collection.id === collectionId
  );

  const [searchResults, changeSearchResults] = useState(resources)

  const sidebarHandler: SidebarHandler = {
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

  const resourceHandler: ResourceHandler = {
    addResource: (resource: ResourceObj) => {
      changeResources((prev) => [...prev, resource]);
    },
    queryResources: (query: string) => {
      if (query === "") {
        changeSearchResults(resources)
        return resources
      }
      const results = resources.filter((resource) => {
        const regex = new RegExp(query, "i");
        return regex.test(resource.name);
      });
      changeSearchResults(results);
      return results
    }
  };

  const context: DraftSidebarContextObject = {
    gallery, 
    collection,
    sidebarMode,
    gallerys,
    galleryId,
    collections,
    collectionId,
    resources,
    searchResults,
    sidebarHandler,
    resourceHandler,
  };

  return (
    <DraftSidebarContext.Provider value={context}>
      <DraftSidebarView/>
    </DraftSidebarContext.Provider>
  );
}
