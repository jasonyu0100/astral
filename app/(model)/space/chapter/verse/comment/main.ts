import { createContext } from "react";

export enum VerseCommentSource {
  USER = 'You',
  AGENT = 'Agent',
}
export interface VerseCommentObj {
  id: string;
  userId?: string;
  verseId: string;
  source: string;
  time: string;
  message: string;
}

export const VerseCommentContext = createContext<VerseCommentObj>({} as VerseCommentObj);

export const exampleVerseComment: VerseCommentObj = {
  id: '0',
  verseId: '0',
  source: VerseCommentSource.USER,
  time: new Date('2023-12-19').toISOString(),
  message: 'This is pretty good actually',
  userId: '0',
};

export const exampleAgentVerseComment: VerseCommentObj = {
  id: '1',
  verseId: '0',
  source: VerseCommentSource.AGENT,
  time: new Date('2023-12-19').toISOString(),
  message: 'A melody of words',
};

export const exampleVerseComments: VerseCommentObj[] = [
  {
    id: '0',
    verseId: '0',
    source: VerseCommentSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    verseId: '0',
    source: VerseCommentSource.AGENT,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello World',
  },
  {
    id: '2',
    verseId: '0',
    source: VerseCommentSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];
