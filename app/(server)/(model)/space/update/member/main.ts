import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface SpaceUpdateMemberObj {
  id: string;
  updateId: string;
  userId: string;
  created: string;
}

export const spaceUpdateMemberGql = `
type SpaceUpdateMemberObj {
  id: String!
  updateId: String!
  userId: String!
  created: String!
}
`;

export const ContextForSpaceUpdateMemberObj = createContext<SpaceUpdateMemberObj>(
  {} as SpaceUpdateMemberObj,
);

export const exampleSpaceUpdateMember: SpaceUpdateMemberObj = {
  id: '0',
  updateId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleSpaceUpdateMembers: SpaceUpdateMemberObj[] = [
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

export const spaceUpdateMemberModel : ModelInterface<SpaceUpdateMemberObj> = {
  name: 'update',
  gql: spaceUpdateMemberGql,
  example: exampleSpaceUpdateMember,
  examples: exampleSpaceUpdateMembers,
  parentKey: 'updateId',
  children: [],
}