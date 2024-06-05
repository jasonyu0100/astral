import { createContext } from 'react';

export interface ChapterChatObj {
  id: string;
  chapterId: string;
  title: string;
  summary: string;
  time: string;
}

export const chapterChatGql = `
type ChapterChatObj {
  id: String!
  chapterId: String!
  title: String!
  summary: String!
  time: String!
}
`

export const exampleChapterChat: ChapterChatObj = {
  id: '0',
  chapterId: '0',
  title: 'The Idea',
  summary: "What's the Idea",
  time: new Date('2023-12-19').toISOString(),
};

export const ChapterChatContext = createContext<ChapterChatObj>({} as ChapterChatObj);

export const exampleChapterChats: ChapterChatObj[] = [
  {
    id: '0',
    chapterId: '0',
    title: 'The Idea',
    summary: "What's the Idea",
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '1',
    chapterId: '0',
    title: 'The Meaning',
    summary: "What's the meaning?",
    time: new Date('2023-12-19').toISOString(),
  },
];
