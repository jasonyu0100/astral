import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../../../elements/file/main';
import { ModelInterface } from '@/(server)/(model)/main';

export interface ChapterVerseObj {
  id: string;
  userId: string;
  chapterId: string;
  title: string;
  description: string;
  created: string;
}

export const chapterVerseGql = `
type ChapterVerseObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForChapterVerseObj = createContext<ChapterVerseObj>(
  {} as ChapterVerseObj,
);

export const exampleChapterVerse: ChapterVerseObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Verse Example',
  description: 'Verse Description',
  created: new Date().toISOString(),
};

export const exampleChapterVerses: ChapterVerseObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
];

export const chapterVerseModel: ModelInterface<ChapterVerseObj> = {
  name: 'verse',
  parentKey: 'chapterId',
  example: exampleChapterVerse,
  examples: exampleChapterVerses,
  gql: chapterVerseGql,
  children: ['comment', 'member'],
};
