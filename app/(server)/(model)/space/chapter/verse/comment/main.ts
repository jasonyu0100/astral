import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';
export interface VerseCommentObj {
  id: string;
  userId: string;
  verseId: string;
  created: string;
  message: string;
}

export const verseCommentGql = `
type VerseCommentObj {
  id: String!
  userId: String
  verseId: String!
  created: String!
  message: String!
}
`;

export const ContextForVerseCommentObj = createContext<VerseCommentObj>(
  {} as VerseCommentObj,
);

export const exampleVerseComment: VerseCommentObj = {
  id: '0',
  verseId: '0',
  created: new Date().toISOString(),
  message: 'This is pretty good actually',
  userId: '0',
};

export const exampleAgentVerseComment: VerseCommentObj = {
  id: '1',
  verseId: '0',
  created: new Date().toISOString(),
  message: 'A melody of words',
  userId: '0',
};

export const exampleVerseComments: VerseCommentObj[] = [
  {
    id: '0',
    verseId: '0',
    created: new Date().toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    verseId: '0',
    created: new Date().toISOString(),
    message: 'Hello World',
    userId: '0',
  },
  {
    id: '2',
    verseId: '0',
    created: new Date().toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];

export const verseCommentModel: ModelInterface<VerseCommentObj> = {
  name: 'comment',
  example: exampleVerseComment,
  examples: exampleVerseComments,
  gql: verseCommentGql,
  children: [],
  parentKey: 'verseId',
}