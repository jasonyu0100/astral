import { createContext } from 'react';
import { FileObj, exampleFile } from '../../../concept/file/main';

export interface SpaceVerseObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  time: string;
}

export const SpaceVerseContext = createContext<SpaceVerseObj>({} as SpaceVerseObj);

export const exampleSpaceVerse: SpaceVerseObj = {
  id: '0',
  chapterId: '0',
  title: 'Verse Example',
  description: 'Verse Description',
  time: new Date().toISOString(),
};

export const exampleSpaceVerses: SpaceVerseObj[] = [
  {
    id: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '2',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
