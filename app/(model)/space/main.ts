import { createContext } from 'react';
import { FileObj, exampleFile } from '../concept/file/main';

export enum SpaceVariant {
  MIX = 'MIX',
  SONG = 'SONG',
  BAR = 'BAR',
  IDEA = 'IDEA',
  CUSTOM = 'CUSTOM',
}

export interface SpaceObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  time: string;
  thumbnail: FileObj;
  variant: string;
  moveId?: string;
}

export const SpaceContext = createContext<SpaceObj>({} as SpaceObj);

export const exampleSpace: SpaceObj = {
  id: '0',
  userId: '0',
  title: 'Space Example',
  description: 'Space Description',
  time: new Date().toISOString(),
  thumbnail: exampleFile,
  variant: SpaceVariant.CUSTOM,
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: SpaceVariant.CUSTOM,
  },
  {
    id: '1',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: SpaceVariant.CUSTOM,
  },
];
