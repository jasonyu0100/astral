import { createContext } from 'react';
import { ModelInterface } from '../../../main';

export interface ChapterReviewObj {
  id: string;
  spaceId: string;
  chapterId: string;
  userId: string;
  title: string;
  duration: number;
  description: string;
  created: string;
}

export const chapterReviewGql = `
type ChapterReviewObj {
  id: String!
  spaceId: String!
  userId: String!
  chapterId: String!
  title: String!
  duration: Int!
  description: String!
  created: String!
}
`;

export const ContextForChapterReviewObj = createContext<ChapterReviewObj>(
  {} as ChapterReviewObj,
);

export const exampleChapterReview: ChapterReviewObj = {
  id: '0',
  spaceId: '0',
  userId: '0',
  chapterId: '0',
  duration: 0,
  title: 'May Retro',
  description: 'Productive month with new scenes and verses added into the mix',
  created: new Date().toISOString(),
};

export const exampleChapterReviews: ChapterReviewObj[] = [
  {
    id: '0',
    spaceId: '0',
    userId: '0',
    chapterId: '0',
    duration: 0,
    title: 'May Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    spaceId: '0',
    userId: '0',
    chapterId: '0',
    duration: 0,
    title: 'June Retro',
    description: 'Not so productive month',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    spaceId: '0',
    userId: '0',
    chapterId: '0',
    duration: 0,
    title: 'July Retro',
    description:
      'Productive month with new scenes and verses added into the mix',
    created: new Date().toISOString(),
  },
];

export const chapterReviewModel: ModelInterface<ChapterReviewObj> = {
  name: 'review',
  gql: chapterReviewGql,
  example: exampleChapterReview,
  examples: exampleChapterReviews,
  parentKey: 'chapterId',
  children: ['update'],
};
