import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface HorizonGroupReviewUpdateObj {
  id: string;
  reviewId: string;
  value: number;
  message: string;
  created: string;
}

export const horizonGroupReviewUpdateGql = `
type HorizonGroupReviewUpdateObj {
  id: String!
  userId: String!
  reviewId: String!
  value: Int!
  message: String!
  created: String!
}
`;

export const ContextForHorizonGroupReviewUpdateObj =
  createContext<HorizonGroupReviewUpdateObj>({} as HorizonGroupReviewUpdateObj);

export const exampleHorizonGroupReviewUpdate: HorizonGroupReviewUpdateObj = {
  id: '0',
  reviewId: '0',
  value: 11,
  message: 'Hello World',
  created: new Date().toISOString(),
};

export const exampleHorizonGroupReviewUpdates: HorizonGroupReviewUpdateObj[] = [
  {
    id: '0',
    reviewId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    reviewId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    reviewId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
];

export const horizonGroupReviewUpdateModel: ModelInterface<HorizonGroupReviewUpdateObj> =
  {
    name: 'update',
    gql: horizonGroupReviewUpdateGql,
    example: exampleHorizonGroupReviewUpdate,
    examples: exampleHorizonGroupReviewUpdates,
    parentKey: 'reviewId',
    children: [],
  };
