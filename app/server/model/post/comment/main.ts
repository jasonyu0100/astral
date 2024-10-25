import { ModelInterface } from '@/server/model/main';
import { createContext } from 'react';
export interface PostCommentObj {
  id: string;
  userId: string;
  postId: string;
  created: string;
  message: string;
}

export const postCommentGql = `
type PostCommentObj {
  id: String!
  userId: String
  postId: String!
  created: String!
  message: String!
}
`;

export const ContextForPostCommentObj = createContext<PostCommentObj>(
  {} as PostCommentObj,
);

export const examplePostComment: PostCommentObj = {
  id: '0',
  postId: '0',
  created: new Date().toISOString(),
  message: 'This is pretty good actually',
  userId: '0',
};

export const examplePostComments: PostCommentObj[] = [
  {
    id: '0',
    postId: '0',
    created: new Date().toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    postId: '0',
    created: new Date().toISOString(),
    message: 'Hello World',
    userId: '0',
  },
  {
    id: '2',
    postId: '0',
    created: new Date().toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];

export const postCommentModel: ModelInterface<PostCommentObj> = {
  name: 'comment',
  example: examplePostComment,
  examples: examplePostComments,
  gql: postCommentGql,
  children: [],
  parentKey: 'postId',
};
