"use client";

import { createContext, useEffect, useState } from "react";
import DriveFolderView from "./view";
import { GalleryObj } from "@/tables/gallery/main";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { collectionTable, galleryTable } from "@/tables/gallery/table";
import insideCosmos from "@/utils/isAuth";
import { ResourceObj } from "@/tables/resource/main";
import { resourceTable } from "@/tables/resource/table";
import {
  getCollectionObj,
  getGalleryObj,
  listResourceObjs,
} from "@/graphql/queries";
import { amplifyClient } from "@/client";

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

function Page({ params }: { params: { id: string } }) {
  const [gallery, changeGallery] = useState(galleryTable.example);
  const [collection, changeCollection] = useState(collectionTable.example);
  const [resources, changeResources] = useState(resourceTable.examples);

  useEffect(() => {
    getCollection(params.id).then((collection) => {
      getGallery(collection.galleryId);
      getResources(collection.id);
    });
  }, []);

  const getGallery = async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getGalleryObj,
      variables: {
        id: id,
      },
    });

    const gallery: CollectionObj = payload?.data.getGalleryObj || {};
    changeGallery(gallery);
    return gallery;
  };

  const getCollection = async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getCollectionObj,
      variables: {
        id: id,
      },
    });

    const collection: CollectionObj = payload?.data.getCollectionObj || {};
    changeCollection(collection);
    return collection;
  };

  const getResources = async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: listResourceObjs,
      variables: {
        filter: {
          collectionId: {
            eq: id,
          },
        },
      },
    });

    const resources: ResourceObj[] =
      payload?.data.listResourceObjs?.items || {};
    changeResources(resources);
    return resources;
  };

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
      <DriveFolderView />
    </ExploreCollectionContext.Provider>
  );
}

export default insideCosmos(Page);
