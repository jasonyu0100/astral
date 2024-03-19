import { SpaceObj } from '@/(logic)/internal/model/space/main';
import { useState, useMemo } from 'react';
import { gqlHelper } from '../../../gql/spaces/main';

export const useSpaceHandler = (spaceId: string) => {
  const [space, changeSpace] = useState({} as SpaceObj);

  const queryGetSpace = async (spaceId: string) => {
    const space: SpaceObj = await gqlHelper.queryGetSpace(spaceId);
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
