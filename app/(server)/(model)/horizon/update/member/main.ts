import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonUpdateMemberObj {
  id: string;
  updateId: string;
  userId: string;
  created: string;
}

export const horizonUpdateMemberGql = `
type HorizonUpdateMemberObj {
  id: String!
  updateId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonUpdateMemberObj = createContext<HorizonUpdateMemberObj>(
  {} as HorizonUpdateMemberObj,
);

export const exampleHorizonUpdateMember: HorizonUpdateMemberObj = {
  id: '0',
  updateId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleHorizonUpdateMembers: HorizonUpdateMemberObj[] = [
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

export const horizonUpdateMemberModel: ModelInterface<HorizonUpdateMemberObj> = {
  name: 'member',
  gql: horizonUpdateMemberGql,
  example: exampleHorizonUpdateMember,
  examples: exampleHorizonUpdateMembers,
  parentKey: 'updateId',
  children: [],
}