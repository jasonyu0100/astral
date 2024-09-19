import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface ChapterReviewContributorObj {
  id: string;
  reviewId: string;
  userId: string;
  created: string;
}

export const ChapterReviewContributorGql = `
type ChapterReviewContributorObj {
  id: String!
  reviewId: String!
  userId: String!
  created: String!
}
`;

export const ContextForChapterReviewContributorObj =
  createContext<ChapterReviewContributorObj>({} as ChapterReviewContributorObj);

export const exampleChapterReviewContributor: ChapterReviewContributorObj = {
  id: '0',
  reviewId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleChapterReviewContributors: ChapterReviewContributorObj[] = [
  {
    id: '0',
    reviewId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    reviewId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    reviewId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const ChapterReviewContributorModel: ModelInterface<ChapterReviewContributorObj> =
  {
    name: 'contributor',
    gql: ChapterReviewContributorGql,
    example: exampleChapterReviewContributor,
    examples: exampleChapterReviewContributors,
    parentKey: 'reviewId',
    children: [],
  };
