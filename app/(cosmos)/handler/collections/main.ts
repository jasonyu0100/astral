import { amplifyClient } from '@/client';
import { createCollectionObj, createResourceObj } from '@/graphql/mutations';
import { listCollectionObjs, listResourceObjs } from '@/graphql/queries';
import { useGlobalUser } from '@/state/main';
import { FileObj } from '@/tables/file/main';
import { CollectionObj } from '@/tables/gallery/collection/main';
import { ResourceObj, ResourceType } from '@/tables/resource/main';
import { useEffect, useState } from 'react';
export interface useCOllectionsInterface {
    collectionId: string;
    collection: CollectionObj | undefined;
    collections: CollectionObj[];
    _collectionHandler: CollectionHandler;
}
export interface CollectionHandler {
  queryCollectionResources: (collectionId: string) => Promise<ResourceObj[]>;
  queryListCollections: (galleryId: string) => Promise<void>;
  queryCreateCollection: (name: string, files: FileObj[]) => Promise<void>;
  goToCollection: (collection: CollectionObj) => void;
}

export const useCollections = (galleryId: string) => {
  const [state, actions] = useGlobalUser()
  const [collections, changeCollections] = useState<CollectionObj[]>([]);
  const [collectionId, changeCollectionId] = useState<string>('');
  const collection = collections.find((collection) => collection.id === collectionId);

  useEffect(() => {
    if (!galleryId) {
      changeCollections([])
      return
    }
    _collectionHandler.queryListCollections(galleryId);
  }, [galleryId]);

  const _collectionHandler: CollectionHandler = {
    goToCollection: (collection: CollectionObj) => {
      changeCollectionId(collection.id);
    },
    queryCollectionResources: async (collectionId: string) => {
      const payload = await amplifyClient.graphql({
        query: listResourceObjs,
        variables: {
          filter: {
            collectionId: {
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
        ?.items as CollectionObj[];
      changeCollections(collections);
      changeCollectionId(collections[0]?.id || '');
    },

    queryCreateCollection: async (name: string, files: FileObj[]) => {
      const payload = await amplifyClient.graphql({
        query: createCollectionObj,
        variables: {
          input: {
            name,
            galleryId: galleryId,
          },
        },
      });
      const collection = payload?.data?.createCollectionObj as CollectionObj;
      changeCollections((prev) => [...prev, collection]);
      changeCollectionId(collection.id);
      await queryCreateCollectionResources(collection, files);
    },
  };

  const queryCreateCollectionResources = async (
    collection: CollectionObj,
    files: FileObj[],
  ) => {
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
            resourceType: ResourceType.FILE
          },
        },
      });
      const resource = payload?.data?.createResourceObj as unknown as ResourceObj;
      resources.push(resource);
    }
    return resources;
  };

  return {
    collectionId,
    collection,
    collections,
    _collectionHandler,
  };
};
