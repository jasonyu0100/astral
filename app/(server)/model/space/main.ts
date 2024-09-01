import moment from 'moment';
import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../elements/file/main';
import { ModelInterface } from '../main';
export interface SpaceObj {
  id: string;
  userId: string;
  galleryId: string;
  collectionId: string;
  title: string;
  description: string;
  objective: string;
  summary: string;
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
  collectionId: String!
	title: String!
	description: String!
  objective: String!
  summary: String!
	created: String!
	thumbnail: FileElem!
  category: String!
  hours: Int!
  target: String!
  completed: Boolean!
  starred: Boolean!
}
`;

export const ContextForSpaceObj = createContext<SpaceObj>({} as SpaceObj);

export const ContextForCurrentSpaceObj = createContext<SpaceObj>(
  {} as SpaceObj,
);

export const exampleSpace: SpaceObj = {
  id: '0',
  userId: '0',
  galleryId: '0',
  collectionId: '0',
  title: 'Space Example',
  description: 'Space Objective',
  summary: 'Space Summary',
  created: new Date().toISOString(),
  thumbnail: exampleFileElem,
  category: 'Space Category',
  hours: 10,
  target: moment(new Date()).add(7, 'd').toISOString(),
  completed: false,
  starred: false,
  objective: '',
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: '0',
    userId: '0',
    galleryId: '0',
    collectionId: '0',
    title: 'Space Example',
    description: 'Space Objective',
    summary: 'Space Summary',
    created: new Date().toISOString(),
    thumbnail: exampleFileElem,
    category: 'Space Category',
    hours: 10,
    target: moment(new Date()).add(7, 'd').toISOString(),
    completed: false,
    starred: false,
    objective: '',
  },
  {
    id: '1',
    userId: '0',
    galleryId: '0',
    collectionId: '0',
    title: 'Space Example',
    description: 'Space Objective',
    summary: 'Space Summary',
    created: new Date().toISOString(),
    thumbnail: exampleFileElem,
    category: 'Space Category',
    hours: 10,
    target: moment(new Date()).add(7, 'd').toISOString(),
    completed: false,
    starred: false,
    objective: '',
  },
  {
    id: '2',
    userId: '0',
    galleryId: '0',
    collectionId: '0',
    title: 'Space Example',
    description: 'Space Objective',
    summary: 'Space Summary',
    created: new Date().toISOString(),
    thumbnail: exampleFileElem,
    category: 'Space Category',
    hours: 10,
    target: moment(new Date()).add(7, 'd').toISOString(),
    completed: false,
    starred: false,
    objective: '',
  },
];

export const spaceModel: ModelInterface<SpaceObj> = {
  name: 'space',
  gql: spaceGql,
  example: exampleSpace,
  examples: exampleSpaces,
  parentKey: 'userId',
  children: ['chapter', 'member'],
};
