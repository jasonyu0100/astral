import { CollectionObj } from '@/(logic)/internal/model/gallery/collection/main';
import { useMemo, useState } from 'react';
import { gqlHelper } from '@/(logic)/internal/gql/collections/main';

export const useCollectionHandler = (collectionId: string) => {
  const [collection, changeCollection] = useState({} as CollectionObj);

  const queryGetCollection = async (collectionId: string) => {
    const collection = await gqlHelper.gqlGetCollection(collectionId);
    changeCollection(collection);
    return collection;
  };

  useMemo(() => {
    if (!collectionId) {
      changeCollection({} as CollectionObj);
      return;
    }
    queryGetCollection(collectionId);
  }, [collectionId]);

  return {
    collection,
  };
};
