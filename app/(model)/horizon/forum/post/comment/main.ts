import { createContext } from 'react';

export interface PostCommentObj {
  id: string;
  postId: string;
  userId: string;
  title: string;
  description: string;
  time: string;
}

export const postCommentGql = `
type PostCommentObj {
  id : String!
  postId : String!
  userId: String!
  title : String!
  description : String!
  time : String!
}
`;

export const PostCommentContext = createContext<PostCommentObj>(
  {} as PostCommentObj,
);

export const examplePostComment: PostCommentObj = {
  id: '0',
  postId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const examplePostComments: PostCommentObj[] = [
  {
    id: '0',
    postId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    postId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '2',
    postId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
