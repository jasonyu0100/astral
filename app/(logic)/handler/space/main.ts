import { amplifyClient } from '@/(logic)/aws/graphql/main';
import { getSpaceObj } from '@/graphql/queries';
import { SpaceObj } from '@/(logic)/model/space/main';
import { useState, useMemo } from 'react';

export const useSpace = (spaceId: string) => {
  const [space, changeSpace] = useState({} as SpaceObj);

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

  useMemo(() => {
    if (!spaceId) {
      changeSpace({} as SpaceObj);
      return;
    }
    queryGetSpace(spaceId);
  }, [spaceId]);

  return { space };
};
