import { ModelInterface } from '@/server/model/main';
import { createContext } from 'react';

export interface HorizonUserMemberObj {
  id: string;
  horizonId: string;
  userId: string;
  created: string;
}

export const horizonUserMemberGql = `
type HorizonUserMemberObj {
  id: String!
  horizonId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonUserMemberObj =
  createContext<HorizonUserMemberObj>({} as HorizonUserMemberObj);

export const exampleHorizonUserMember: HorizonUserMemberObj = {
  id: '0',
  horizonId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleHorizonUserMembers: HorizonUserMemberObj[] = [
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    userId: '1',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    horizonId: '0',
    userId: '2',
    created: new Date().toISOString(),
  },
];

export const horizonUserMemberModel: ModelInterface<HorizonUserMemberObj> = {
  name: 'userMember',
  gql: horizonUserMemberGql,
  example: exampleHorizonUserMember,
  examples: exampleHorizonUserMembers,
  parentKey: 'horizonId',
  children: [],
};
