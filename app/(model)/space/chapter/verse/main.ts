import { createContext } from 'react';
import { FileObj, exampleFile } from '../../../media/resource/file/main';

export interface VerseObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  time: string;
}

export const VerseContext = createContext<VerseObj>({} as VerseObj);

export const exampleVerse: VerseObj = {
  id: '0',
  chapterId: '0',
  title: 'Verse Example',
  description: 'Verse Description',
  time: new Date().toISOString(),
};

export const exampleVerses: VerseObj[] = [
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
