import { FileElem } from '@/(model)/elements/file/main';
import { GalleryCollectionObj } from '@/(model)/gallery/collection/main';
import { CollectionResourceObj } from '@/(model)/gallery/collection/resource/main';
import { createContext, useMemo, useState } from 'react';
import { collectionsGqlHelper } from '../../../(db)/(archive-db)/collections/main';
import { resourcesGqlHelper } from '@/(db)/(archive-db)/resources/main';
export interface CollectionsHandler {
  collectionId: string;
  collection: GalleryCollectionObj | undefined;
  collections: GalleryCollectionObj[];
  collectionActions: CollectionActions;
}
export interface CollectionActions {
  listCollections: (galleryId: string) => Promise<GalleryCollectionObj[]>;
  listResourcesInside: (collectionId: string) => Promise<CollectionResourceObj[]>;
  createCollection: (
    title: string,
    description: string,
    files: FileElem[],
  ) => Promise<GalleryCollectionObj>;
  goToCollection: (collection: GalleryCollectionObj) => GalleryCollectionObj;
}

export const CollectionsHandlerContext = createContext({} as CollectionsHandler);

export const useCollectionsHandler = (galleryId: string, userId: string): CollectionsHandler => {
  const [collections, changeCollections] = useState<GalleryCollectionObj[]>([]);
  const [collectionId, changeCollectionId] = useState<string>('');
  const collection = collections.find(
    (collection) => collection.id === collectionId,
  );

  const collectionActions: CollectionActions = {
    goToCollection: (collection: GalleryCollectionObj) => {
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
    createCollection: async (title: string, description: string, files: FileElem[]) => {
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
