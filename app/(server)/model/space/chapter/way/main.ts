import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export enum ChapterWayStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  REVIEW = 'review',
  DONE = 'done',
}
export interface ChapterWayObj {
  id: string;
  userId: string;
  chapterId: string;
  logStatus: string;
  title: string;
  description: string;
  summary: string;
  created: string;
}

export const chapterWayGql = `
type ChapterWayObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  summary: String!
  logStatus: String!
  created: String!
}
`;

export const ContextForChapterLogObj = createContext<ChapterWayObj>(
  {} as ChapterWayObj,
);

export const exampleChapterLog: ChapterWayObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Log Example',
  description: 'Log Description',
  summary: 'Log Summary',
  created: new Date().toISOString(),
  logStatus: ChapterWayStatus.TODO,
};

export const exampleChapterLogs: ChapterWayObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Log 1',
    description: 'Log Description',
    summary: 'Log Summary',
    created: new Date().toISOString(),
    logStatus: ChapterWayStatus.TODO,
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Log 2',
    description: 'Log Description',
    summary: 'Log Summary',
    created: new Date().toISOString(),
    logStatus: ChapterWayStatus.TODO,
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Log 3',
    description: 'Log Description',
    summary: 'Log Summary',
    created: new Date().toISOString(),
    logStatus: ChapterWayStatus.TODO,
  },
];

export const chapterLogModel: ModelInterface<ChapterWayObj> = {
  name: 'log',
  gql: chapterWayGql,
  example: exampleChapterLog,
  examples: exampleChapterLogs,
  parentKey: 'chapterId',
  children: ['link'],
};
