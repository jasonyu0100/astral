import { createContext } from 'react';

export interface SpaceUpdateObj {
  id: string;
  spaceId: string;
  title: string;
  description: string;
  created: string;
}

export const spaceUpdateGql = `
type SpaceUpdateObj {
  id: String!
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
  spaceId: '0',
  title: 'May Retro',
  description: 'Productive month with new scenes and verses added into the mix',
  created: new Date('2023-12-19').toISOString(),
};

export const exampleChapterRetros: SpaceUpdateObj[] = [
  {
    id: '0',
    spaceId: '0',
    title: 'May Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '1',
    spaceId: '0',
    title: 'June Retro',
    description: 'Not so productive month',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '2',
    spaceId: '0',
    title: 'July Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    created: new Date('2023-12-19').toISOString(),
  },
];
