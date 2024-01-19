import { amplifyClient } from '@/client';
import { getSpaceObj } from '@/graphql/queries';
import { SpaceObj } from '@/tables/space/main';
import { useState, useEffect } from 'react';

export const useSpace = (spaceId: string) => {
  const [space, changeSpace] = useState({} as SpaceObj);

  useEffect(() => {
    if (!spaceId) {
      changeSpace({} as SpaceObj);
      return;
    }
    queryGetSpace(spaceId);
  }, [spaceId]);

  const queryGetSpace = async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getSpaceObj,
      variables: {
        id: id,
      },
    });

    const space: SpaceObj = payload?.data.getSpaceObj as SpaceObj;
    changeSpace(space);
    return space;
  };


  return { space };
};

