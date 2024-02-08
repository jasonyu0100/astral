import { amplifyClient } from '@/client';
import { getCollectionObj } from '@/graphql/queries';
import { CollectionObj } from '@/tables/gallery/collection/main';
import { useMemo, useState } from 'react';

export const useCollection = (collectionId: string) => {
  const [collection, changeCollection] = useState({} as CollectionObj);

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
