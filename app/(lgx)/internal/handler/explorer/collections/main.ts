import { FileObj } from '@/(types)/model/resource/file/main';
import { CollectionObj } from '@/(types)/model/gallery/collection/main';
import { ResourceObj } from '@/(types)/model/resource/main';
import { createContext, useMemo, useState } from 'react';
import { collectionsGqlHelper } from '../../../../../(types)/gql/collections/main';
import { resourcesGqlHelper } from '@/(types)/gql/resources/main';
export interface CollectionsHandler {
  collectionId: string;
  collection: CollectionObj | undefined;
  collections: CollectionObj[];
  collectionActions: CollectionActions;
}
export interface CollectionActions {
  listCollections: (galleryId: string) => Promise<CollectionObj[]>;
  listResourcesInside: (collectionId: string) => Promise<ResourceObj[]>;
  createCollection: (
    title: string,
    description: string,
    files: FileObj[],
  ) => Promise<CollectionObj>;
  goToCollection: (collection: CollectionObj) => CollectionObj;
}

export const CollectionsHandlerContext = createContext({} as CollectionsHandler);

export const useCollectionsHandler = (galleryId: string, userId: string): CollectionsHandler => {
  const [collections, changeCollections] = useState<CollectionObj[]>([]);
  const [collectionId, changeCollectionId] = useState<string>('');
  const collection = collections.find(
    (collection) => collection.id === collectionId,
  );

  const collectionActions: CollectionActions = {
    goToCollection: (collection: CollectionObj) => {
      changeCollectionId(collection.id);
      return collection;
    },
    listResourcesInside: async (collectionId: string) => {
      const resources = await resourcesGqlHelper.listFromCollection(collectionId);
      return resources;
    },
    listCollections: async (galleryId: string) => {
      const collections = await collectionsGqlHelper.listFromGallery(galleryId);
      changeCollections(collections);
      changeCollectionId(collections[0]?.id || '');
      return collections;
    },
    createCollection: async (title: string, description: string, files: FileObj[]) => {
      const collection = await collectionsGqlHelper.create(galleryId, title, description);
      changeCollections((prev) => [...prev, collection]);
      changeCollectionId(collection.id);
      const resources = await resourcesGqlHelper.createFromMultipleFiles(
        userId,
        collection.id,
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
    collectionActions.listCollections(galleryId);
  }, [galleryId]);

  return {
    collectionId,
    collection,
    collections,
    collectionActions,
  };
};
