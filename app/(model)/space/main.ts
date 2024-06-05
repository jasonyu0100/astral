import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../elements/file/main';

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
  thumbnail: FileElem;
  variant: string;
}

export const spaceGql = `
type SpaceObj {
	id: String!
	userId: String!
	title: String!
	time: String!
	description: String!
	thumbnail: FileElem!
	variant: String!
}

input UpdateSpaceChapterObjInput {
	id: String!
	spaceId: String
	title: String
	description: String
	idx: Int
  thumbnail: FileElemInput
}

input CreateSpaceChapterObjInput {
	spaceId: String!
	title: String!
	description: String!
	idx: Int!
  thumbnail: FileElemInput!
}
`;

export const SpaceContext = createContext<SpaceObj>({} as SpaceObj);

export const exampleSpace: SpaceObj = {
  id: '0',
  userId: '0',
  title: 'Space Example',
  description: 'Space Description',
  time: new Date().toISOString(),
  thumbnail: exampleFileElem,
  variant: SpaceVariant.CUSTOM,
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    time: new Date().toISOString(),
    thumbnail: exampleFileElem,
    variant: SpaceVariant.CUSTOM,
  },
  {
    id: '1',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    time: new Date().toISOString(),
    thumbnail: exampleFileElem,
    variant: SpaceVariant.CUSTOM,
  },
];
