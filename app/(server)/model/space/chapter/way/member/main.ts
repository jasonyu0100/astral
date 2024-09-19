import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface WayMemberObj {
  id: string;
  wayId: string;
  userId: string;
  created: string;
}

export const WayMemberGql = `
type WayMemberObj {
  id: String!
  wayId: String!
  userId: String!
  created: String!
}
`;

export const ContextForWayMemberObj = createContext<WayMemberObj>(
  {} as WayMemberObj,
);

export const exampleWayMember: WayMemberObj = {
  id: '0',
  wayId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleWayMembers: WayMemberObj[] = [
  {
    id: '0',
    wayId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    wayId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    wayId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const wayMemberModel: ModelInterface<WayMemberObj> = {
  name: 'member',
  gql: WayMemberGql,
  example: exampleWayMember,
  examples: exampleWayMembers,
  parentKey: 'wayId',
  children: [],
};
