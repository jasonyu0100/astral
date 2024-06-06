import { createContext } from 'react';
export interface VerseCommentObj {
  id: string;
  userId: string;
  verseId: string;
  time: string;
  message: string;
}

export const verseCommentGql = `
type VerseCommentObj {
  id: String!
  userId: String
  verseId: String!
  time: String!
  message: String!
}
`;

export const VerseCommentContext = createContext<VerseCommentObj>(
  {} as VerseCommentObj,
);

export const exampleVerseComment: VerseCommentObj = {
  id: '0',
  verseId: '0',
  time: new Date('2023-12-19').toISOString(),
  message: 'This is pretty good actually',
  userId: '0',
};

export const exampleAgentVerseComment: VerseCommentObj = {
  id: '1',
  verseId: '0',
  time: new Date('2023-12-19').toISOString(),
  message: 'A melody of words',
  userId: '0',
};

export const exampleVerseComments: VerseCommentObj[] = [
  {
    id: '0',
    verseId: '0',
    time: new Date('2023-12-19').toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    verseId: '0',
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello World',
    userId: '0',
  },
  {
    id: '2',
    verseId: '0',
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];
