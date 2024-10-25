import { ModelInterface } from '@/server/model/main';
import { createContext } from 'react';

export interface PostLinkObj {
  id: string;
  postId: string;
  userId: string;
  logId: string;
  created: string;
}

export const PostLinkGql = `
type PostLinkObj {
  id: String!
  postId: String!
  userId: String!
  logId: String!
  created: String!
}
`;

export const ContextForPostLinkObj = createContext<PostLinkObj>(
  {} as PostLinkObj,
);

export const examplePostLink: PostLinkObj = {
  id: '0',
  postId: '0',
  userId: '0',
  logId: '0',
  created: new Date().toISOString(),
};

export const examplePostLinks: PostLinkObj[] = [
  {
    id: '0',
    postId: '0',
    userId: '0',
    logId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    postId: '0',
    userId: '0',
    logId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    postId: '0',
    userId: '0',
    logId: '0',
    created: new Date().toISOString(),
  },
];

export const postLinkModel: ModelInterface<PostLinkObj> = {
  name: 'link',
  gql: PostLinkGql,
  example: examplePostLink,
  examples: examplePostLinks,
  parentKey: 'postId',
  children: [],
};
