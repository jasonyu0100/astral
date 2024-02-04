import { FileObj, exampleFile } from '../file/main';

export enum SpaceVariant {
  MIX = 'MIX',
  SONG = 'SONG',
  BAR = 'BAR',
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
}

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
