import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface HorizonMemberObj {
  id: string;
  horizonId: string;
  userId: string;
  created: string;
}

export const horizonMemberGql = `
type HorizonMemberObj {
  id: String!
  horizonId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonMemberObj = createContext<HorizonMemberObj>(
  {} as HorizonMemberObj,
);

export const exampleHorizonMember: HorizonMemberObj = {
  id: '0',
  horizonId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleHorizonMembers: HorizonMemberObj[] = [
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const horizonMemberModel: ModelInterface<HorizonMemberObj> = {
  name: 'member',
  gql: horizonMemberGql,
  example: exampleHorizonMember,
  examples: exampleHorizonMembers,
  parentKey: 'horizonId',
  children: [],
};
