import { amplifyClient } from '@/client';
import { createCollectionObj, createResourceObj } from '@/graphql/mutations';
import { listCollectionObjs, listResourceObjs } from '@/graphql/queries';
import { useGlobalUser } from '@/state/main';
import { FileObj } from '@/tables/resource/file/main';
import { CollectionObj } from '@/tables/gallery/collection/main';
import { ResourceObj, ResourceVariant } from '@/tables/resource/main';
import { useMemo, useState } from 'react';
export interface useCOllectionsInterface {
  collectionId: string;
  collection: CollectionObj | undefined;
  collections: CollectionObj[];
  _collectionHandler: CollectionHandler;
}
export interface CollectionHandler {
  queryCollectionResources: (collectionId: string) => Promise<ResourceObj[]>;
  queryListCollections: (galleryId: string) => Promise<CollectionObj[]>;
  queryCreateCollection: (
    name: string,
    files: FileObj[],
  ) => Promise<CollectionObj>;
  goToCollection: (collection: CollectionObj) => CollectionObj;
}

export const useCollections = (galleryId: string) => {
    const user = useGlobalUser((state) => state.user);
  const [collections, changeCollections] = useState<CollectionObj[]>([]);
  const [collectionId, changeCollectionId] = useState<string>('');
  const collection = collections.find(
    (collection) => collection.id === collectionId,
  );


  const gqlHelper = {
    queryCollectionResources: async (collectionId: string) => {
      const payload = await amplifyClient.graphql({
        query: listResourceObjs,
        variables: {
          filter: {
            userId: {
              eq: collectionId,
            },
          },
        },
      });
      const resources = payload?.data?.listResourceObjs?.items as ResourceObj[];
      return resources;
    },
    queryListCollections: async (galleryId: string) => {
      const payload = await amplifyClient.graphql({
        query: listCollectionObjs,
        variables: {
          filter: {
            galleryId: {
              eq: galleryId,
            },
          },
        },
      });
      const collections = payload?.data?.listCollectionObjs
        ?.items as CollectionObj[] || [];
      return collections;
    },
    queryCreateCollection: async (title: string, files: FileObj[]) => {
      const payload = await amplifyClient.graphql({
        query: createCollectionObj,
        variables: {
          input: {
            title: title,
            galleryId: galleryId,
          },
        },
      });
      const collection = payload?.data?.createCollectionObj as CollectionObj;
      return collection;
    },
    queryCreateCollectionResources: async (
      collection: CollectionObj,
      files: FileObj[],
    ) => {
      const resources = [];
      for (let file of files) {
        const payload = await amplifyClient.graphql({
          query: createResourceObj,
          variables: {
            input: {
              title: file.title || '',
              description: file.title || '',
              collectionId: collection.id,
              file: file,
              variant: ResourceVariant.FILE,
              userId: user?.id,
            },
          },
        });
        const resource = payload?.data?.createResourceObj as ResourceObj;
        resources.push(resource);
      }
      return resources;
    },
  };

  const _collectionHandler: CollectionHandler = {
    goToCollection: (collection: CollectionObj) => {
      changeCollectionId(collection.id);
      return collection;
    },
    queryCollectionResources: async (collectionId: string) => {
      const resources = await gqlHelper.queryCollectionResources(collectionId);
      return resources;
    },
    queryListCollections: async (galleryId: string) => {
      const collections = await gqlHelper.queryListCollections(galleryId);
      changeCollections(collections);
      changeCollectionId(collections[0]?.id || '');
      return collections;
    },
    queryCreateCollection: async (name: string, files: FileObj[]) => {
      const collection = await gqlHelper.queryCreateCollection(name, files);
      changeCollections((prev) => [...prev, collection]);
      changeCollectionId(collection.id);
      const resources = await gqlHelper.queryCreateCollectionResources(
        collection,
        files,
      );
      return collection;
    },
  };
  
  useMemo(() => {
    if (!galleryId) {
      changeCollections([]);
      return;
    }
    _collectionHandler.queryListCollections(galleryId);
  }, [galleryId]);

  return {
    collectionId,
    collection,
    collections,
    _collectionHandler,
  };
};
