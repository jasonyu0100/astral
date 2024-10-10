import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';
export interface CommentKarmaObj {
  id: string;
  userId: string;
  commentId: string;
  created: string;
  neutrality: boolean;
}

export const commentKarmaGql = `
type CommentKarmaObj {
  id: String!
  userId: String
  commentId: String!
  created: String!
  neutrality: Boolean!
}
`;

export const ContextForCommentKarmaObj = createContext<CommentKarmaObj>(
  {} as CommentKarmaObj,
);

export const exampleCommentKarma: CommentKarmaObj = {
  id: '0',
  commentId: '0',
  created: new Date().toISOString(),
  neutrality: false,
  userId: '0',
};

export const exampleCommentKarmas: CommentKarmaObj[] = [
  {
    id: '0',
    commentId: '0',
    created: new Date().toISOString(),
    neutrality: true,
    userId: '0',
  },
  {
    id: '1',
    commentId: '0',
    created: new Date().toISOString(),
    neutrality: true,
    userId: '0',
  },
  {
    id: '2',
    commentId: '0',
    created: new Date().toISOString(),
    neutrality: true,
    userId: '0',
  },
];

export const commentKarmaModel: ModelInterface<CommentKarmaObj> = {
  name: 'karma',
  example: exampleCommentKarma,
  examples: exampleCommentKarmas,
  gql: commentKarmaGql,
  children: [],
  parentKey: 'commentId',
};
