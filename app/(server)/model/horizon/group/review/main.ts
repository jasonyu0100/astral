import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface HorizonGroupReviewObj {
  id: string;
  groupId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
}

export const horizonGroupReviewGql = `
type HorizonGroupReviewObj {
  id : String!
  groupId : String!
  userId: String!
  title : String!
  description : String!
  created: String!
}
`;

export const ContextForHorizonGroupReviewObj =
  createContext<HorizonGroupReviewObj>({} as HorizonGroupReviewObj);

export const exampleHorizonGroupReview: HorizonGroupReviewObj = {
  id: '0',
  groupId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleHorizonGroupReviews: HorizonGroupReviewObj[] = [
  {
    id: '0',
    groupId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Review Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    groupId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Review Description',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    groupId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Review Description',
    created: new Date().toISOString(),
  },
];

export const horizonGroupReviewModel: ModelInterface<HorizonGroupReviewObj> = {
  name: 'session',
  example: exampleHorizonGroupReview,
  gql: horizonGroupReviewGql,
  examples: exampleHorizonGroupReviews,
  parentKey: 'groupId',
  children: ['update'],
};
