import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../elements/file/main';
export interface SpaceObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  time: string;
  thumbnail: FileElem;
}

export const spaceGql = `
type SpaceObj {
	id: String!
	userId: String!
	title: String!
	time: String!
	description: String!
	thumbnail: FileElem!
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
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    time: new Date().toISOString(),
    thumbnail: exampleFileElem,
  },
  {
    id: '1',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    time: new Date().toISOString(),
    thumbnail: exampleFileElem,
  },
];
