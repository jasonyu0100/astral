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
  wayStatus: string;
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
  wayStatus: String!
  created: String!
}
`;

export const ContextForChapterWayObj = createContext<ChapterWayObj>(
  {} as ChapterWayObj,
);

export const exampleChapterWay: ChapterWayObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Way Example',
  description: 'Way Description',
  summary: 'Way Summary',
  created: new Date().toISOString(),
  wayStatus: ChapterWayStatus.TODO,
};

export const exampleChapterWays: ChapterWayObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Way 1',
    description: 'Way Description',
    summary: 'Way Summary',
    created: new Date().toISOString(),
    wayStatus: ChapterWayStatus.TODO,
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Way 2',
    description: 'Way Description',
    summary: 'Way Summary',
    created: new Date().toISOString(),
    wayStatus: ChapterWayStatus.TODO,
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Way 3',
    description: 'Way Description',
    summary: 'Way Summary',
    created: new Date().toISOString(),
    wayStatus: ChapterWayStatus.TODO,
  },
];

export const chapterWayModel: ModelInterface<ChapterWayObj> = {
  name: 'way',
  gql: chapterWayGql,
  example: exampleChapterWay,
  examples: exampleChapterWays,
  parentKey: 'chapterId',
  children: ['link'],
};
