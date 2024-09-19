import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface HorizonGroupReviewContributorObj {
  id: string;
  reviewId: string;
  userId: string;
  created: string;
}

export const horizonGroupReviewContributorGql = `
type HorizonGroupReviewContributorObj {
  id: String!
  reviewId: String!
  userId: String!
  created: String!
}
`;

export const ContextForHorizonGroupReviewContributorObj =
  createContext<HorizonGroupReviewContributorObj>(
    {} as HorizonGroupReviewContributorObj,
  );

export const exampleHorizonGroupReviewContributor: HorizonGroupReviewContributorObj =
  {
    id: '0',
    reviewId: '0',
    userId: '0',
    created: new Date().toISOString(),
  };

export const exampleHorizonGroupReviewContributors: HorizonGroupReviewContributorObj[] =
  [
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

export const horizonGroupReviewContributorModel: ModelInterface<HorizonGroupReviewContributorObj> =
  {
    name: 'contributor',
    gql: horizonGroupReviewContributorGql,
    example: exampleHorizonGroupReviewContributor,
    examples: exampleHorizonGroupReviewContributors,
    parentKey: 'reviewId',
    children: ['contributor'],
  };
