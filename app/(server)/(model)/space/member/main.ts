import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface SpaceMemberObj {
  id: string;
  forumId: string;
  userId: string;
  created: string;
}

export const spaceMemberGql = `
type SpaceMemberObj {
  id: String!
  forumId: String!
  userId: String!
  created: String!
}
`;

export const ContextForSpaceMemberObj = createContext<SpaceMemberObj>(
  {} as SpaceMemberObj,
);

export const exampleSpaceMember: SpaceMemberObj = {
  id: '0',
  forumId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleSpaceMembers: SpaceMemberObj[] = [
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const spaceMemberModel: ModelInterface<SpaceMemberObj> = {
  name: 'member',
  gql: spaceMemberGql,
  example: exampleSpaceMember,
  examples: exampleSpaceMembers,
  parentKey: 'spaceId',
  children: [],
};
