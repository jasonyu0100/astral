'use client';

import { createContext, useEffect, useState } from 'react';
import DriveFolderView from './view';
import { GalleryObj } from '@/tables/gallery/main';
import { CollectionObj } from '@/tables/gallery/collection/main';
import insideCosmos from '@/utils/isAuth';
import { ResourceObj } from '@/tables/resource/main';
import {
  getCollectionObj,
  getGalleryObj,
  listResourceObjs,
} from '@/graphql/queries';
import { amplifyClient } from '@/client';
import { FileObj } from '@/tables/file/main';
import { createResourceObj } from '@/graphql/mutations';

interface ExploreCollectionContextObj {
  gallery: GalleryObj;
  collection: CollectionObj;
  resources: ResourceObj[];
  resourceHandler: ResourceHandler;
}

export const ExploreCollectionContext =
  createContext<ExploreCollectionContextObj>({} as ExploreCollectionContextObj);
interface ResourceHandler {
  addResource: (
    name: string,
    description: string,
    file: FileObj,
  ) => Promise<void>;
}

function Page({ params }: { params: { id: string } }) {
  const [gallery, changeGallery] = useState({} as GalleryObj);
  const [collection, changeCollection] = useState({} as CollectionObj);
  const [resources, changeResources] = useState<ResourceObj[]>([]);

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
    addResource: async (name: string, description: string, file: FileObj) => {
      const payload = await amplifyClient.graphql({
        query: createResourceObj,
        variables: {
          input: {
            name,
            description,
            collectionId: collection.id,
            file,
          },
        },
      });
      const resource = payload?.data?.createResourceObj as ResourceObj;

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
