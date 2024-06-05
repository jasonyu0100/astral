import { createContext } from 'react';

export interface PostCommentObj {
  id: string;
  postId: string;
  title: string;
  description: string;
  time: string;
}

export const PostCommentContext = createContext<PostCommentObj>(
  {} as PostCommentObj,
);

export const examplePostComment: PostCommentObj = {
  id: '0',
  postId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const examplePostComments: PostCommentObj[] = [
  {
    id: '0',
    postId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    postId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
