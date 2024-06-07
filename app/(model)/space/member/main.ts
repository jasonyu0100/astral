import { createContext } from 'react';

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
  created: new Date('2023-12-19').toISOString(),
};

export const exampleSpaceMembers: SpaceMemberObj[] = [
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date('2023-12-19').toISOString(),
  },
];
