import { createContext } from 'react';
import { ModelInterface } from '../../../main';

export interface ChapterUpdateObj {
  id: string;
  chapterId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
}

export const chapterUpdateGql = `
type ChapterUpdateObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForChapterUpdateObj = createContext<ChapterUpdateObj>(
  {} as ChapterUpdateObj,
);

export const exampleChapterUpdate: ChapterUpdateObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'May Retro',
  description: 'Productive month with new scenes and verses added into the mix',
  created: new Date().toISOString(),
};

export const exampleChapterUpdates: ChapterUpdateObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'May Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'June Retro',
    description: 'Not so productive month',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'July Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    created: new Date().toISOString(),
  },
];

export const chapterUpdateModel: ModelInterface<ChapterUpdateObj> = {
  name: 'chapterUpdate',
  gql: chapterUpdateGql,
  example: exampleChapterUpdate,
  examples: exampleChapterUpdates,
  parentKey: 'chapterId',
  children: ['add', 'member'],
};
