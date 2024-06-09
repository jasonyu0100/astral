import { createContext } from 'react';

export interface SpaceChapterObj {
  id: string;
  spaceId: string;
  title: string;
  description: string;
  idx: number;
  created: string;
}

export const spaceChapterGql = `
type SpaceChapterObj {
	id: String!
	spaceId: String!
	title: String!
	description: String!
	idx: Int!
  created: String!
}
  `;

export const exampleSpaceChapter: SpaceChapterObj = {
  id: '0',
  spaceId: '0',
  title: 'Melody',
  description: 'This is a description',
  idx: 0,
  created: new Date('2023-12-19').toISOString(),
};

export const ContextForSpaceChapterObj = createContext<SpaceChapterObj>(
  {} as SpaceChapterObj,
);

export const exampleSpaceChapters: SpaceChapterObj[] = [
  {
    id: '0',
    title: 'Concept',
    description: 'Concept Description',
    spaceId: '0',
    idx: 0,
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '1',
    title: 'Beat',
    description: 'Beat Description',
    spaceId: '0',
    idx: 1,
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '2',
    title: 'Melody',
    description: 'Melody Description',
    spaceId: '0',
    idx: 2,
    created: new Date('2023-12-19').toISOString(),
  },
];
