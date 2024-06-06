import { createContext } from 'react';

export interface ForumPostObj {
  id: string;
  forumId: string;
  userId: string;
  title: string;
  description: string;
  time: string;
}

export const forumPostGql = `
type ForumPostObj {
  id: String!
  forumId: String!
  userId: String!
  title: String!
  description: String!
  time: String!
}
`;

export const ForumPostContext = createContext<ForumPostObj>({} as ForumPostObj);

export const exampleForumPost: ForumPostObj = {
  id: '0',
  forumId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const exampleForumPosts: ForumPostObj[] = [
  {
    id: '0',
    forumId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    forumId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
