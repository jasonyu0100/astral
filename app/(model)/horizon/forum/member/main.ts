import { createContext } from 'react';

export interface ForumMemberObj {
  id: string;
  forumId: string;
  userId: string;
  created: string;
}

export const forumMemberGql = `
type ForumMemberObj {
  id: String!
  forumId: String!
  userId: String!
  created: String!
}
`;

export const ContextForForumMemberObj = createContext<ForumMemberObj>(
  {} as ForumMemberObj,
);

export const exampleForumMember: ForumMemberObj = {
  id: '0',
  forumId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleForumMembers: ForumMemberObj[] = [
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
