import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonGroupMemberObj {
  id: string;
  groupId: string;
  userId: string;
  created: string;
  termsId: string;
}

export const horizonGroupMemberGql = `
type HorizonGroupMemberObj {
  id: String!
  groupId: String!
  userId: String!
  created: String!
  termsId: String!
}
`;

export const ContextForHorizonGroupMemberObj =
  createContext<HorizonGroupMemberObj>({} as HorizonGroupMemberObj);

export const exampleHorizonGroupMember: HorizonGroupMemberObj = {
  id: '0',
  groupId: '0',
  userId: '0',
  created: new Date().toISOString(),
  termsId: '0',
};

export const exampleHorizonGroupMembers: HorizonGroupMemberObj[] = [
  {
    id: '0',
    groupId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
  {
    id: '0',
    groupId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
  {
    id: '0',
    groupId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
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
