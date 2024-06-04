import { createContext } from 'react';
import { FileObj, exampleFile } from '../../../media/resource/file/main';

export enum VerseVariant {
  ALBUM = 'ALBUM',
  FILM = 'FILM',
  ACT = 'ACT',
  PROJECT = 'PROJECT',
  CUSTOM = 'CUSTOM',
}

export interface VerseObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  time: string;
  thumbnail: FileObj;
  variant: string;
}

export const VerseContext = createContext<VerseObj>({} as VerseObj);

export const exampleVerse: VerseObj = {
  id: '0',
  userId: '0',
  title: 'Verse Example',
  description: 'Verse Description',
  time: new Date().toISOString(),
  thumbnail: exampleFile,
  variant: VerseVariant.CUSTOM,
};

export const exampleVerses: VerseObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: VerseVariant.CUSTOM,
  },
  {
    id: '1',
    userId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: VerseVariant.CUSTOM,
  },
];
