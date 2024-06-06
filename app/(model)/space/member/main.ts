import { createContext } from 'react';

export interface SpaceMemberObj {
  id: string;
  forumId: string;
  userId: string;
}

export const spaceMemberGql = `
type SpaceMemberObj {
  id: String!
  forumId: String!
  userId: String!
}
`;

export const SpaceMemberObjContext = createContext<SpaceMemberObj>(
  {} as SpaceMemberObj,
);

export const exampleSpaceMember: SpaceMemberObj = {
  id: '0',
  forumId: '0',
  userId: '0',
};

export const exampleSpaceMembers: SpaceMemberObj[] = [
  {
    id: '0',
    forumId: '0',
    userId: '0',
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
  },
];
