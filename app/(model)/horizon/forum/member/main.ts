import { createContext } from 'react';

export interface ForumMemberObj {
  id: string;
  forumId: string;
  userId: string;
}

export const forumMemberGql = `
type ForumMemberObj {
  id: String!
  forumId: String!
  userId: String!
}
`;

export const ForumMemberObjContext = createContext<ForumMemberObj>(
  {} as ForumMemberObj,
);

export const exampleForumMember: ForumMemberObj = {
  id: '0',
  forumId: '0',
  userId: '0',
};

export const exampleForumMembers: ForumMemberObj[] = [
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
