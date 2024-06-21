import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonGroupMemberObj {
  id: string;
  groupId: string;
  userId: string;
  created: string;
}

export const horizonGroupMemberGql = `
type HorizonGroupMemberObj {
  id: String!
  groupId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonGroupMemberObj =
  createContext<HorizonGroupMemberObj>({} as HorizonGroupMemberObj);

export const exampleHorizonGroupMember: HorizonGroupMemberObj = {
  id: '0',
  groupId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleHorizonGroupMembers: HorizonGroupMemberObj[] = [
  {
    id: '0',
    groupId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    groupId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    groupId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const horizonGroupMemberModel: ModelInterface<HorizonGroupMemberObj> = {
  name: 'member',
  gql: horizonGroupMemberGql,
  example: exampleHorizonGroupMember,
  examples: exampleHorizonGroupMembers,
  parentKey: 'groupId',
  children: [],
};
