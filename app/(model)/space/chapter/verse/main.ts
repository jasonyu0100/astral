import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../../../elements/file/main';

export interface ChapterVerseObj {
  id: string;
  userId: string;
  chapterId: string;
  title: string;
  description: string;
  time: string;
}

export const chapterVerseGql = `
type ChapterVerseObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  time: String!
}
`;

export const ChapterVerseContext = createContext<ChapterVerseObj>(
  {} as ChapterVerseObj,
);

export const exampleChapterVerse: ChapterVerseObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Verse Example',
  description: 'Verse Description',
  time: new Date().toISOString(),
};

export const exampleChapterVerses: ChapterVerseObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
