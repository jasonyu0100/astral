import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface SpaceChapterObj {
  id: string;
  userId: string;
  spaceId: string;
  title: string;
  description: string;
  objective: string;
  summary: string;
  idx: number;
  created: string;
}

export const spaceChapterGql = `
type SpaceChapterObj {
	id: String!
  userId: String!
	spaceId: String!
	title: String!
  description: String!
	objective: String!
	idx: Int!
  created: String!
}
  `;

export const exampleSpaceChapter: SpaceChapterObj = {
  id: '0',
  userId: '0',
  spaceId: '0',
  title: 'Melody',
  description: 'This is a chapter description',
  objective: 'This is a chapter objective',
  summary: 'This is a chapter summary',
  idx: 0,
  created: new Date().toISOString(),
};

export const ContextForSpaceChapterObj = createContext<SpaceChapterObj>(
  {} as SpaceChapterObj,
);

export const exampleSpaceChapters: SpaceChapterObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Concept',
    description: 'This is a chapter description',
    objective: 'This is a chapter objective',
    summary: 'This is a chapter summary',
    spaceId: '0',
    idx: 0,
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    title: 'Beat',
    description: 'This is a chapter description',
    objective: 'This is a chapter objective',
    summary: 'This is a chapter summary',
    spaceId: '0',
    idx: 1,
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    title: 'Melody',
    description: 'This is a chapter description',
    objective: 'This is a chapter objective',
    summary: 'This is a chapter summary',
    spaceId: '0',
    idx: 2,
    created: new Date().toISOString(),
  },
];

export const spaceChapterModel: ModelInterface<SpaceChapterObj> = {
  name: 'chapter',
  gql: spaceChapterGql,
  example: exampleSpaceChapter,
  examples: exampleSpaceChapters,
  parentKey: 'spaceId',
  children: ['chat', 'scene', 'log', 'spotlight'],
};
