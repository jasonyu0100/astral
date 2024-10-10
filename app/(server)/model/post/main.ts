import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export enum UserPostStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export interface UserPostObj {
  id: string;
  userId: string;
  chapterId: string;
  title: string;
  description: string;
  summary: string;
  created: string;
  postStatus: string;
}

export const UserPostGql = `
type UserPostObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  summary: String!
  created: String!
  postStatus: String!
`;

export const ContextForUserPostObj = createContext<UserPostObj>(
  {} as UserPostObj,
);

export const exampleUserPost: UserPostObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Post Example',
  description: 'Post Description',
  summary: 'Post Summary',
  postStatus: UserPostStatus.PENDING,
  created: new Date().toISOString(),
};

export const exampleUserPosts: UserPostObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Post Example',
    summary: 'Post Summary',
    postStatus: UserPostStatus.PENDING,
    description: 'Postwww Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Post Example',
    summary: 'Post Summary',
    postStatus: UserPostStatus.PENDING,
    description: 'Post Description',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Post Example',
    summary: 'Post Summary',
    postStatus: UserPostStatus.PENDING,
    description: 'Post Description',
    created: new Date().toISOString(),
  },
];

export const userPostModel: ModelInterface<UserPostObj> = {
  name: 'post',
  parentKey: 'chapterId',
  example: exampleUserPost,
  examples: exampleUserPosts,
  gql: UserPostGql,
  children: ['comment', 'member', 'attachment', 'link'],
};
