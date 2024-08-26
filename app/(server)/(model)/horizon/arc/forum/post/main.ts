import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ForumPostObj {
  id: string;
  forumId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
}

export const forumPostGql = `
type ForumPostObj {
  id: String!
  forumId: String!
  userId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForForumPostObj = createContext<ForumPostObj>(
  {} as ForumPostObj,
);

export const exampleForumPost: ForumPostObj = {
  id: '0',
  forumId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleForumPosts: ForumPostObj[] = [
  {
    id: '0',
    forumId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Review Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    forumId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Review Description',
    created: new Date().toISOString(),
  },
];

export const forumPostModel: ModelInterface<ForumPostObj> = {
  name: 'forumPost',
  gql: forumPostGql,
  example: exampleForumPost,
  examples: exampleForumPosts,
  children: ['comment'],
  parentKey: 'forumId',
};
