import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonSessionUpdateMemberObj {
  id: string;
  updateId: string;
  userId: string;
  created: string;
}

export const horizonSessionUpdateMemberGql = `
type HorizonSessionUpdateMemberObj {
  id: String!
  updateId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonSessionUpdateMemberObj =
  createContext<HorizonSessionUpdateMemberObj>(
    {} as HorizonSessionUpdateMemberObj,
  );

export const exampleHorizonSessionUpdateMember: HorizonSessionUpdateMemberObj =
  {
    id: '0',
    updateId: '0',
    userId: '0',
    created: new Date().toISOString(),
  };

export const exampleHorizonSessionUpdateMembers: HorizonSessionUpdateMemberObj[] =
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

export const horizonSessionUpdateMemberModel: ModelInterface<HorizonSessionUpdateMemberObj> =
  {
    name: 'member',
    gql: horizonSessionUpdateMemberGql,
    example: exampleHorizonSessionUpdateMember,
    examples: exampleHorizonSessionUpdateMembers,
    parentKey: 'updateId',
    children: [],
  };
