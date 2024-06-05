import { createContext } from 'react';

export interface ChatObj {
  id: string;
  chapterId: string;
  title: string;
  summary: string;
  time: string;
}

export const exampleChat: ChatObj = {
  id: '0',
  chapterId: '0',
  title: 'The Idea',
  summary: "What's the Idea",
  time: new Date('2023-12-19').toISOString(),
};

export const ChatContext = createContext<ChatObj>({} as ChatObj);

export const exampleChats: ChatObj[] = [
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
