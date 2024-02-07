import { amplifyClient } from '@/client';
import { getCollectionObj } from '@/graphql/queries';
import { CollectionObj } from '@/tables/gallery/collection/main';
import { useEffect, useState } from 'react';

export const useCollection = (collectionId: string) => {
  const [collection, changeCollection] = useState({} as CollectionObj);

  useEffect(() => {
    if (!collectionId) {
      changeCollection({} as CollectionObj);
      return;
    }
    queryGetCollection(collectionId);
  }, [collectionId]);

  const queryGetCollection = async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getCollectionObj,
      variables: {
        id: id,
      },
    });

    const collection = payload?.data?.getCollectionObj as CollectionObj;
    changeCollection(collection);
    return collection;
  };

  return {
    collection,
  };
};
