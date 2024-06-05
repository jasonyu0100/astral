import { createContext } from 'react';

export interface SpaceChatObj {
  id: string;
  chapterId: string;
  title: string;
  summary: string;
  time: string;
}

export const exampleSpaceChat: SpaceChatObj = {
  id: '0',
  chapterId: '0',
  title: 'The Idea',
  summary: "What's the Idea",
  time: new Date('2023-12-19').toISOString(),
};

export const SpaceChatContext = createContext<SpaceChatObj>({} as SpaceChatObj);

export const exampleSpaceChats: SpaceChatObj[] = [
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
