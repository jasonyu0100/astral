import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonGroupSessionUpdateMemberObj {
  id: string;
  updateId: string;
  userId: string;
  created: string;
}

export const horizonGroupSessionUpdateMemberGql = `
type HorizonGroupSessionUpdateMemberObj {
  id: String!
  updateId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonGroupSessionUpdateMemberObj =
  createContext<HorizonGroupSessionUpdateMemberObj>(
    {} as HorizonGroupSessionUpdateMemberObj,
  );

export const exampleHorizonGroupSessionUpdateMember: HorizonGroupSessionUpdateMemberObj =
  {
    id: '0',
    updateId: '0',
    userId: '0',
    created: new Date().toISOString(),
  };

export const exampleHorizonGroupSessionUpdateMembers: HorizonGroupSessionUpdateMemberObj[] =
  [
    {
      id: '0',
      updateId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
    {
      id: '0',
      updateId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
    {
      id: '0',
      updateId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
  ];

export const horizonGroupSessionUpdateMemberModel: ModelInterface<HorizonGroupSessionUpdateMemberObj> =
  {
    name: 'member',
    gql: horizonGroupSessionUpdateMemberGql,
    example: exampleHorizonGroupSessionUpdateMember,
    examples: exampleHorizonGroupSessionUpdateMembers,
    parentKey: 'updateId',
    children: [],
  };
