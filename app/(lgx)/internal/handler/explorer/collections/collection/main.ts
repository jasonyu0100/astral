import { CollectionObj } from '@/(lgx)/internal/model/gallery/collection/main';
import { useMemo, useState } from 'react';
import { collectionsGqlHelper } from '@/(lgx)/internal/gql/collections/main';

export const useCollectionHandler = (collectionId: string) => {
  const [collection, changeCollection] = useState({} as CollectionObj);

  const getCollection = async (collectionId: string) => {
    const collection = await collectionsGqlHelper.get(collectionId);
    changeCollection(collection);
    return collection;
  };

  useMemo(() => {
    if (!collectionId) {
      changeCollection({} as CollectionObj);
      return;
    }
    getCollection(collectionId);
  }, [collectionId]);

  return {
    collection,
  };
};
