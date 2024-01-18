'use client';
import { createContext, useEffect, useState } from 'react';
import { SpaceTabStages } from '../../tabs/main';
import { SpacesView } from '../../spaces-epic/view';
import { SpaceObj } from '@/tables/space/main';
import insideCosmos from '@/utils/isAuth';
import { amplifyClient } from '@/client';
import { createSpaceObj } from '@/graphql/mutations';
import { useUser } from '@/state/main';
import { listSpaceObjs } from '@/graphql/queries';

export interface SpaceContextObj {
  spaces: SpaceObj[];
  addSpace: (title: string, description: string) => Promise<void>;
}

export const SpaceContext = createContext<SpaceContextObj>({
  spaces: [],
  addSpace: function (title: string, description: string): Promise<void> {
    throw new Error('Function not implemented.');
  },
});
export interface SpaceViewProps {
  type: SpaceTabStages;
}

function Page() {
  const [state, actions] = useUser();
  const [spaces, changeSpaces] = useState<SpaceObj[]>([]);

  useEffect(() => {
    getSpaces();
  }, []);

  const getSpaces = async () => {
    const payload = await amplifyClient.graphql({
      query: listSpaceObjs,
      variables: {
        filter: {
          userId: {
            eq: state.user.id,
          },
        },
      },
    });
    const spaces: SpaceObj[] = payload?.data?.listSpaceObjs?.items || {};
    changeSpaces(spaces);
  };

  const addSpace = async (title: string, description: string) => {
    const payload = await amplifyClient.graphql({
      query: createSpaceObj,
      variables: {
        input: {
          userId: state.user.id,
          title,
          description,
          time: new Date().toISOString(),
        },
      },
    });
    const space = payload?.data?.createSpaceObj || {};
    changeSpaces((prev) => [...prev, space]);
  };

  const context = {
    spaces,
    addSpace,
  };

  return (
    <SpaceContext.Provider value={context}>
      <SpacesView type={SpaceTabStages.Now} />
    </SpaceContext.Provider>
  );
}

export default insideCosmos(Page);
