import { SpaceObj } from '@/(types)/model/space/main';
import { useState, useMemo } from 'react';
import { spacesGqlHelper } from '../../../gql/spaces/main';

export const useSpaceHandler = (spaceId: string) => {
  const [space, changeSpace] = useState({} as SpaceObj);

  const queryGetSpace = async (spaceId: string) => {
    const space: SpaceObj = await spacesGqlHelper.get(spaceId);
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
