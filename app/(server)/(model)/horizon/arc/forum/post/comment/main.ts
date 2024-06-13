import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface PostCommentObj {
  id: string;
  postId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
}

export const postCommentGql = `
type PostCommentObj {
  id : String!
  postId : String!
  userId: String!
  title : String!
  description : String!
  created : String!
}
`;

export const ContextForPostCommentObj = createContext<PostCommentObj>(
  {} as PostCommentObj,
);

export const examplePostComment: PostCommentObj = {
  id: '0',
  postId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const examplePostComments: PostCommentObj[] = [
  {
    id: '0',
    postId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    postId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    postId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
];

export const postCommentModel: ModelInterface<PostCommentObj> = {
  name: 'postComment',
  gql: postCommentGql,
  example: examplePostComment,
  examples: examplePostComments,
  children: [],
  parentKey: 'postId',
}