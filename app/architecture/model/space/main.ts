import moment from 'moment';
import { createContext } from 'react';
import { FileElement, exampleFileElement } from '../elements/file/main';
import { ModelInterface } from '../main';

export enum SpaceVisibility {
  PUBLIC = 'Public',
  PRIVATE = 'Private',
  NONE = '',
}

export const ContextForSpaceVisibility = createContext('' as SpaceVisibility);
export interface SpaceObj {
  id: string;
  userId: string;
  flowId?: string;
  title: string;
  description: string;
  objective: string;
  summary: string;
  created: string;
  thumbnail: FileElement;
  target: string;
  category: string;
  starred: boolean;
  visibility: string;
}

export const spaceGql = `
type SpaceObj {
	id: String!
	userId: String!
  flowId: String
	title: String!
	description: String!
  objective: String!
  summary: String!
	created: String!
	thumbnail: FileElem!
  category: String!
  target: String!
  starred: Boolean!
  visibility: String
}
`;

export const ContextForSpaceObj = createContext<SpaceObj>({} as SpaceObj);

export const ContextForCurrentSpaceObj = createContext<SpaceObj>(
  {} as SpaceObj,
);

export const exampleSpace: SpaceObj = {
  id: '0',
  userId: '0',
  flowId: undefined,
  title: 'Space Example',
  description: 'Space Objective',
  summary: 'Space Summary',
  created: new Date().toISOString(),
  thumbnail: exampleFileElement,
  category: 'Space Category',
  target: moment(new Date()).add(7, 'd').toISOString(),
  starred: false,
  objective: '',
  visibility: SpaceVisibility.PUBLIC,
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: '0',
    userId: '0',
    flowId: undefined,
    title: 'Space Example',
    description: 'Space Objective',
    summary: 'Space Summary',
    created: new Date().toISOString(),
    thumbnail: exampleFileElement,
    category: 'Space Category',
    target: moment(new Date()).add(7, 'd').toISOString(),
    starred: false,
    objective: '',
    visibility: SpaceVisibility.PUBLIC,
  },
  {
    id: '1',
    userId: '0',
    flowId: undefined,
    title: 'Space Example',
    description: 'Space Objective',
    summary: 'Space Summary',
    created: new Date().toISOString(),
    thumbnail: exampleFileElement,
    category: 'Space Category',
    target: moment(new Date()).add(7, 'd').toISOString(),
    starred: false,
    visibility: SpaceVisibility.PUBLIC,
    objective: '',
  },
  {
    id: '2',
    userId: '0',
    flowId: undefined,
    title: 'Space Example',
    description: 'Space Objective',
    summary: 'Space Summary',
    created: new Date().toISOString(),
    thumbnail: exampleFileElement,
    category: 'Space Category',
    target: moment(new Date()).add(7, 'd').toISOString(),
    starred: false,
    visibility: SpaceVisibility.PUBLIC,
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
