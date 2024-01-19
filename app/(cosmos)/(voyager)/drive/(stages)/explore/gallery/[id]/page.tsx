'use client';
import { createContext, useEffect, useState } from 'react';
import { DriveSectionView } from './view';
import { GalleryObj } from '@/tables/gallery/main';
import { CollectionObj } from '@/tables/gallery/collection/main';
import { galleryTable } from '@/tables/gallery/table';
import insideCosmos from '@/utils/isAuth';
import { amplifyClient } from '@/client';
import {
  getGalleryObj,
  listCollectionObjs,
  listResourceObjs,
} from '@/graphql/queries';
import { FileObj } from '@/tables/file/main';
import { createCollectionObj, createResourceObj } from '@/graphql/mutations';
import { ResourceObj } from '@/tables/resource/main';

interface ExploreGalleryContextObj {
  gallery: GalleryObj;
  collections: CollectionObj[];
  addCollection: (name: string, files: FileObj[]) => Promise<void>;
  getResources: (collection: CollectionObj) => Promise<ResourceObj[]>;
}

export const ExploreGalleryContext = createContext<ExploreGalleryContextObj>(
  {} as ExploreGalleryContextObj,
);

function Page({ params }: { params: { id: string } }) {
  const [gallery, changeGallery] = useState<GalleryObj>(galleryTable.example);
  const [collections, changeCollections] = useState<CollectionObj[]>([]);

  useEffect(() => {
    getGallery(params.id).then((gallery) => getCollections(gallery));
  }, []);

  const getGallery = async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getGalleryObj,
      variables: {
        id,
      },
    });
    const gallery: GalleryObj = payload?.data.getGalleryObj || {};
    changeGallery(gallery);
    return gallery;
  };

  const getCollections = async (gallery: GalleryObj) => {
    const payload = await amplifyClient.graphql({
      query: listCollectionObjs,
      variables: {
        filter: {
          galleryId: {
            eq: gallery.id,
          },
        },
      },
    });
    const collections = payload?.data?.listCollectionObjs
      ?.items as CollectionObj[];
    changeCollections(collections);
  };

  const addCollection = async (name: string, files: FileObj[]) => {
    const payload = await amplifyClient.graphql({
      query: createCollectionObj,
      variables: {
        input: {
          name,
          galleryId: gallery.id,
        },
      },
    });
    const collection = payload?.data?.createCollectionObj as CollectionObj;
    changeCollections((prev) => [...prev, collection]);
    addResources(collection, files);
  };

  const addResources = async (collection: CollectionObj, files: FileObj[]) => {
    const resources = [];
    for (let file of files) {
      const payload = await amplifyClient.graphql({
        query: createResourceObj,
        variables: {
          input: {
            name: file.name || '',
            description: file.name || '',
            collectionId: collection.id,
            file: file,
          },
        },
      });
      const resource = payload?.data?.createResourceObj as ResourceObj;
      resources.push(resource);
    }
    return resources;
  };

  const getResources = async (collection: CollectionObj) => {
    const payload = await amplifyClient.graphql({
      query: listResourceObjs,
      variables: {
        filter: {
          collectionId: {
            eq: collection.id,
          },
        },
      },
    });
    const resources = payload?.data?.listResourceObjs?.items as ResourceObj[];
    return resources;
  };

  const context: ExploreGalleryContextObj = {
    gallery,
    collections,
    addCollection,
    getResources,
  };

  return (
    <ExploreGalleryContext.Provider value={context}>
      <DriveSectionView />
    </ExploreGalleryContext.Provider>
  );
}

export default insideCosmos(Page);
