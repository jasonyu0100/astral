import { createContext } from "react";

export interface CommentObj {
  id: string;
  momentId: string;
  time: string;
  content: string;
  userId: string;
}

export const exampleComment: CommentObj = {
  id: '0',
  momentId: '0',
  time: new Date('2023-12-19').toISOString(),
  content: 'Hello World',
  userId: '0',
};

export const CommentContext = createContext<CommentObj>({} as CommentObj);

export const exampleComments: CommentObj[] = [
  {
    id: '0',
    momentId: '0',
    time: new Date('2023-12-19').toISOString(),
    content: 'Hello World',
    userId: '0',
  },
  {
    id: '1',
    momentId: '0',
    time: new Date('2023-12-19').toISOString(),
    content: 'Hello World',
    userId: '0',
  },
];
