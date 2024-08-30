import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export enum ChapterSpotlightStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export interface ChapterSpotlightObj {
  id: string;
  userId: string;
  chapterId: string;
  title: string;
  description: string;
  summary: string;
  created: string;
  spotlightStatus: string;
}

export const chapterSpotlightGql = `
type ChapterSpotlightObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  created: String!
  spotlightStatus: String!
`;

export const ContextForChapterSpotlightObj = createContext<ChapterSpotlightObj>(
  {} as ChapterSpotlightObj,
);

export const exampleChapterSpotlight: ChapterSpotlightObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Spotlight Example',
  description: 'Spotlight Description',
  summary: 'Spotlight Summary',
  spotlightStatus: ChapterSpotlightStatus.PENDING,
  created: new Date().toISOString(),
};

export const exampleChapterSpotlights: ChapterSpotlightObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Spotlight Example',
    summary: 'Spotlight Summary',
    spotlightStatus: ChapterSpotlightStatus.PENDING,
    description: 'Spotlightwww Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Spotlight Example',
    summary: 'Spotlight Summary',
    spotlightStatus: ChapterSpotlightStatus.PENDING,
    description: 'Spotlight Description',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Spotlight Example',
    summary: 'Spotlight Summary',
    spotlightStatus: ChapterSpotlightStatus.PENDING,
    description: 'Spotlight Description',
    created: new Date().toISOString(),
  },
];

export const chapterSpotlightModel: ModelInterface<ChapterSpotlightObj> = {
  name: 'spotlight',
  parentKey: 'chapterId',
  example: exampleChapterSpotlight,
  examples: exampleChapterSpotlights,
  gql: chapterSpotlightGql,
  children: ['comment', 'member', 'attachment', 'link'],
};
