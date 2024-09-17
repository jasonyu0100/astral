import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface ChapterConversationObj {
  id: string;
  userId: string;
  chapterId: string;
  summary: string;
  created: string;
}

export const exampleChapterConversation: ChapterConversationObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  summary: 'A conversation about the idea',
  created: new Date().toISOString(),
};

export const chapterConversationGql = `
type ChapterConversationObj {
  id: String!
  userId: String!
  chapterId: String!
  summary: String!
  created: String!
}
`;

export const ContextForChapterConversationObj =
  createContext<ChapterConversationObj>({} as ChapterConversationObj);

export const exampleChapterConversations: ChapterConversationObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    summary: 'Another conversation about the idea',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    summary: "What's the meaning?",
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    summary: "What's the meaning?",
    created: new Date().toISOString(),
  },
];

export const chapterConversationModel: ModelInterface<ChapterConversationObj> =
  {
    name: 'conversation',
    gql: chapterConversationGql,
    example: exampleChapterConversation,
    examples: exampleChapterConversations,
    parentKey: 'chapterId',
    children: ['message'],
  };
