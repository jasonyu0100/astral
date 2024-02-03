import { useState, useEffect } from 'react';
import { SpaceObj } from '@/tables/space/main';
import { amplifyClient } from '@/client';
import { listSpaceObjs } from '@/graphql/queries';
import { createSpaceObj } from '@/graphql/mutations';
import { FileObj } from '@/tables/file/main';

export interface SpacesHandler {
  queryListSpaces: () => Promise<void>;
  queryCreateSpace: (title: string, description: string, thumbnail: FileObj) => Promise<void>;
}

interface useSpacesInterface {
  space: SpaceObj | undefined;
  spaceId: string;
  spaces: SpaceObj[];
  _spacesHandler: SpacesHandler;
}

export const useSpaces = (userId: string): useSpacesInterface => {
  const [spaces, changeSpaces] = useState<SpaceObj[]>([]);
  const [spaceId, changeSpaceId] = useState('');

  const space = spaces.find((space) => space.id === spaceId);

  useEffect(() => {
    if (!userId) {
      changeSpaces([]);
      return;
    }
    _spacesHandler.queryListSpaces();
  }, [userId]);

  const _spacesHandler: SpacesHandler = {
    queryListSpaces: async () => {
      const payload = await amplifyClient.graphql({
        query: listSpaceObjs,
        variables: {
          filter: {
            userId: {
              eq: userId,
            },
          },
        },
      });
      const spaces = payload?.data?.listSpaceObjs?.items as SpaceObj[];
      changeSpaces(spaces);
      changeSpaceId(spaces[0]?.id || '');
    },
    queryCreateSpace: async (title: string, description: string, thumbnail: FileObj) => {
      const payload = await amplifyClient.graphql({
        query: createSpaceObj,
        variables: {
          input: {
            userId: userId,
            title,
            description,
            time: new Date().toISOString(),
            thumbnail
          },
        },
      });
      const space = payload?.data?.createSpaceObj as SpaceObj;
      changeSpaces((prev) => [...prev, space]);
      changeSpaceId(space.id);
    },
  };

  return {
    space,
    spaceId,
    spaces,
    _spacesHandler,
  };
};
