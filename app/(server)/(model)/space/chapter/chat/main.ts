import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ChapterChatObj {
  id: string;
  userId: string;
  chapterId: string;
  title: string;
  description: string;
  created: string;
}

export const chapterChatGql = `
type ChapterChatObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const exampleChapterChat: ChapterChatObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'The Idea',
  description: "What's the Idea",
  created: new Date().toISOString(),
};

export const ContextForChatObj = createContext<ChapterChatObj>(
  {} as ChapterChatObj,
);

export const exampleChapterChats: ChapterChatObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'The Idea',
    description: "What's the Idea",
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'The Meaning',
    description: "What's the meaning?",
    created: new Date().toISOString(),
  },
];

export const chapterChatModel: ModelInterface<ChapterChatObj> = {
  name: 'chapter',
  gql: chapterChatGql,
  example: exampleChapterChat,
  examples: exampleChapterChats,
  parentKey: 'chapterId',
  children: ['conversation', 'member'],
};
