import { createContext } from 'react';

export interface ForumPostObj {
  id: string;
  forumId: string;
  title: string;
  description: string;
  time: string;
}

export const ForumPostContext = createContext<ForumPostObj>({} as ForumPostObj);

export const exampleForumPost: ForumPostObj = {
  id: '0',
  forumId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const exampleForumPosts: ForumPostObj[] = [
  {
    id: '0',
    forumId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    forumId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
