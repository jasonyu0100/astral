import { GalleryCollectionObj } from '@/(model)/archive/collection/main';
import { useMemo, useState } from 'react';
import { collectionsGqlHelper } from '@/(db)/(archive-db)/collections/main';

export const useCollectionHandler = (collectionId: string) => {
  const [collection, changeCollection] = useState({} as GalleryCollectionObj);

  const getCollection = async (collectionId: string) => {
    const collection = await collectionsGqlHelper.get(collectionId);
    changeCollection(collection);
    return collection;
  };

  useMemo(() => {
    if (!collectionId) {
      changeCollection({} as GalleryCollectionObj);
      return;
    }
    getCollection(collectionId);
  }, [collectionId]);

  return {
    collection,
  };
};
