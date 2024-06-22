import moment from 'moment';
import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../elements/file/main';
import { ModelInterface } from '../main';
export interface SpaceObj {
  id: string;
  userId: string;
  galleryId: string;
  title: string;
  description: string;
  created: string;
  thumbnail: FileElem;
  hours: number;
  target: string;
  category: string;
  completed: boolean;
  starred: boolean;
}

export const spaceGql = `
type SpaceObj {
	id: String!
	userId: String!
  galleryId: String!
	title: String!
	created: String!
	description: String!
	thumbnail: FileElem!
  category: String!
  hours: Int!
  target: String!
  completed: Boolean!
  starred: Boolean!
}
`;

export const ContextForSpaceObj = createContext<SpaceObj>({} as SpaceObj);

export const exampleSpace: SpaceObj = {
  id: '0',
  userId: '0',
  galleryId: '0',
  title: 'Space Example',
  description: 'Space Description',
  created: new Date().toISOString(),
  thumbnail: exampleFileElem,
  category: 'Space Category',
  hours: 10,
  target: moment(new Date()).add(7, 'd').toISOString(),
  completed: false,
  starred: false,
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: '0',
    userId: '0',
    galleryId: '0',
    title: 'Space Example',
    description: 'Space Description',
    created: new Date().toISOString(),
    thumbnail: exampleFileElem,
    category: 'Space Category',
    hours: 10,
    target: moment(new Date()).add(7, 'd').toISOString(),
    completed: false,
    starred: false,
  },
  {
    id: '1',
    userId: '0',
    galleryId: '0',
    title: 'Space Example',
    description: 'Space Description',
    created: new Date().toISOString(),
    thumbnail: exampleFileElem,
    category: 'Space Category',
    hours: 10,
    target: moment(new Date()).add(7, 'd').toISOString(),
    completed: false,
    starred: false,
  },
];

export const spaceModel: ModelInterface<SpaceObj> = {
  name: 'space',
  gql: spaceGql,
  example: exampleSpace,
  examples: exampleSpaces,
  parentKey: 'userId',
  children: ['chapter', 'member', 'update'],
};
