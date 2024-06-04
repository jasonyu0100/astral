import { createContext } from "react";

export enum CommentSource {
  USER = 'You',
  AGENT = 'Agent',
}
export interface CommentObj {
  id: string;
  userId?: string;
  verseId: string;
  source: string;
  time: string;
  message: string;
}

export const CommentContext = createContext<CommentObj>({} as CommentObj);

export const exampleComment: CommentObj = {
  id: '0',
  verseId: '0',
  source: CommentSource.USER,
  time: new Date('2023-12-19').toISOString(),
  message: 'This is pretty good actually',
  userId: '0',
};

export const exampleAgentComment: CommentObj = {
  id: '1',
  verseId: '0',
  source: CommentSource.AGENT,
  time: new Date('2023-12-19').toISOString(),
  message: 'A melody of words',
};

export const exampleComments: CommentObj[] = [
  {
    id: '0',
    verseId: '0',
    source: CommentSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    verseId: '0',
    source: CommentSource.AGENT,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello World',
  },
  {
    id: '2',
    verseId: '0',
    source: CommentSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];
