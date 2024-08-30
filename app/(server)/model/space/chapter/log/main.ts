import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface ChapterLogObj {
  id: string;
  userId: string;
  chapterId: string;
  title: string;
  description: string;
  summary: string;
  created: string;
}

export const chapteLogGql = `
type ChapterLogObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  summary: String!
  created: String!
}`;

export const ContextForChapterLogObj = createContext<ChapterLogObj>(
  {} as ChapterLogObj,
);

export const exampleChapterLog: ChapterLogObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Log Example',
  description: 'Log Description',
  summary: 'Log Summary',
  created: new Date().toISOString(),
};

export const exampleChapterLogs: ChapterLogObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Log 1',
    description: 'Log Description',
    summary: 'Log Summary',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Log 2',
    description: 'Log Description',
    summary: 'Log Summary',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Log 3',
    description: 'Log Description',
    summary: 'Log Summary',
    created: new Date().toISOString(),
  },
];

export const chapterSceneModel: ModelInterface<ChapterLogObj> = {
  name: 'log',
  gql: chapteLogGql,
  example: exampleChapterLog,
  examples: exampleChapterLogs,
  parentKey: 'chapterId',
  children: ['link'],
};
