import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../elements/file/main';
export interface SpaceObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  created: string;
  thumbnail: FileElem;
  category: string;
}

export const spaceGql = `
type SpaceObj {
	id: String!
	userId: String!
	title: String!
	created: String!
	description: String!
	thumbnail: FileElem!
  category: String!
}
`;

export const ContextForSpaceObj = createContext<SpaceObj>({} as SpaceObj);

export const exampleSpace: SpaceObj = {
  id: '0',
  userId: '0',
  title: 'Space Example',
  description: 'Space Description',
  created: new Date().toISOString(),
  thumbnail: exampleFileElem,
  category: 'Space Category',
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    created: new Date().toISOString(),
    thumbnail: exampleFileElem,
    category: 'Space Category',
  },
  {
    id: '1',
    userId: '0',
    title: 'Space Example',
    description: 'Space Description',
    created: new Date().toISOString(),
    thumbnail: exampleFileElem,
    category: 'Space Category',
  },
];
