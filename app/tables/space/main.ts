import { FileObj, exampleFile } from '../file/main';

export enum SpaceType {
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
  type: string;
}

export const spaceSchema = `
type SpaceObj {
  id: String!
  userId: String!
  title: String!
  description: String!
  thumbnail: FileObj!
  string: String!
}
`;

export const exampleSpace: SpaceObj = {
  id: '0',
  userId: '0',
  title: 'Space Example',
  description: 'Space Description',
  time: new Date().toISOString(),
  thumbnail: exampleFile,
  type: SpaceType.CUSTOM,
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    type: SpaceType.CUSTOM,
  },
  {
    id: '1',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    type: SpaceType.CUSTOM,
  },
];
