import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface SpaceUpdateObj {
  id: string;
  spaceId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
}

export const spaceUpdateGql = `
type SpaceUpdateObj {
  id: String!
  userId: String!
  spaceId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForSpaceUpdateObj = createContext<SpaceUpdateObj>(
  {} as SpaceUpdateObj,
);

export const exampleSpaceUpdate: SpaceUpdateObj = {
  id: '0',
  userId: '0',
  spaceId: '0',
  title: 'May Retro',
  description: 'Productive month with new scenes and verses added into the mix',
  created: new Date().toISOString(),
};

export const exampleChapterRetros: SpaceUpdateObj[] = [
  {
    id: '0',
    userId: '0',
    spaceId: '0',
    title: 'May Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    spaceId: '0',
    title: 'June Retro',
    description: 'Not so productive month',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    spaceId: '0',
    title: 'July Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    created: new Date().toISOString(),
  },
];

export const spaceUpdateModel: ModelInterface<SpaceUpdateObj> = {
  name: 'spaceUpdate',
  gql: spaceUpdateGql,
  example: exampleSpaceUpdate,
  examples: exampleChapterRetros,
  parentKey: 'spaceId',
  children: ['add', 'member'],
};
