"use client";

import { useState } from "react";
import DriveFolderView from "./view";
import { GalleryObj } from "@/tables/gallery/main";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { galleryTable } from "@/tables/gallery/table";
import isAuth from "@/utils/isAuth";
import { ResourceObj } from "@/tables/resource/main";
import { resourceTable } from "@/tables/resource/table";

export interface DriveFolderViewProps {
  gallery: GalleryObj;
  collection: CollectionObj;
  resources: ResourceObj[];
  resourceHandler: ResourceHandler;
}
interface ResourceHandler {
  addResource: (resource: ResourceObj) => void;
}

function Page() {
  const [gallery, changeGallery] = useState(
    galleryTable.example
  );
  const [collection, changeCollection] = useState(
    galleryTable.collection.example
  );
  const [resources, changeResources] = useState(
    resourceTable.examples
  );

  const resourceHandler: ResourceHandler = {
    addResource: (resource: ResourceObj) => {
      changeResources((prev) => [resource, ...prev]);
    },
  };

  return (
    <DriveFolderView
      gallery={gallery}
      collection={collection}
      resources={resources}
      resourceHandler={resourceHandler}
    />
  );
}

export default isAuth(Page);