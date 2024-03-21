import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { CollectionObj } from '@/(logic)/internal/model/gallery/collection/main';
import { ResourceObj } from '@/(logic)/internal/model/resource/main';
import { createContext, useMemo, useState } from 'react';
import { gqlHelper } from '../../../gql/collections/main';
export interface CollectionsHandler {
  collectionId: string;
  collection: CollectionObj | undefined;
  collections: CollectionObj[];
  collectionActions: CollectionActions;
}
export interface CollectionActions {
  queryCollectionResources: (collectionId: string) => Promise<ResourceObj[]>;
  queryListCollections: (galleryId: string) => Promise<CollectionObj[]>;
  queryCreateCollection: (
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
    queryCollectionResources: async (collectionId: string) => {
      const resources = await gqlHelper.gqlListCollectionResources(collectionId);
      return resources;
    },
    queryListCollections: async (galleryId: string) => {
      const collections = await gqlHelper.gqlListCollections(galleryId);
      changeCollections(collections);
      changeCollectionId(collections[0]?.id || '');
      return collections;
    },
    queryCreateCollection: async (title: string, description: string, files: FileObj[]) => {
      const collection = await gqlHelper.gqlCreateCollection(galleryId, title, description);
      changeCollections((prev) => [...prev, collection]);
      changeCollectionId(collection.id);
      const resources = await gqlHelper.gqlCreateCollectionResources(
        userId,
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
    collectionActions.queryListCollections(galleryId);
  }, [galleryId]);

  return {
    collectionId,
    collection,
    collections,
    collectionActions,
  };
};
