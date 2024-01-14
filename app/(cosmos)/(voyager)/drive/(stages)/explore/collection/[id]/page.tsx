"use client";

import { createContext, useState } from "react";
import DriveFolderView from "./view";
import { GalleryObj } from "@/tables/gallery/main";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { collectionTable, galleryTable } from "@/tables/gallery/table";
import isAuth from "@/utils/isAuth";
import { ResourceObj } from "@/tables/resource/main";
import { resourceTable } from "@/tables/resource/table";

export interface ExploreCollectionContextObj {
  gallery: GalleryObj;
  collection: CollectionObj;
  resources: ResourceObj[];
  resourceHandler: ResourceHandler | any;
}

export const ExploreCollectionContext =
  createContext<ExploreCollectionContextObj>({
    gallery: {} as GalleryObj,
    collection: {} as CollectionObj,
    resources: [],
    resourceHandler: undefined,
  });
interface ResourceHandler {
  addResource: (resource: ResourceObj) => void;
}

function Page() {
  const [gallery, changeGallery] = useState(galleryTable.example);
  const [collection, changeCollection] = useState(collectionTable.example);
  const [resources, changeResources] = useState(resourceTable.examples);

  const resourceHandler: ResourceHandler = {
    addResource: (resource: ResourceObj) => {
      changeResources((prev) => [resource, ...prev]);
    },
  };

  const context = {
    gallery,
    collection,
    resources,
    resourceHandler,
  };

  return (
    <ExploreCollectionContext.Provider value={context}>
      <DriveFolderView/>
    </ExploreCollectionContext.Provider>
  );
}

export default isAuth(Page);
