import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ReviewMemberObj {
  id: string;
  reviewId: string;
  userId: string;
  created: string;
}

export const reviewMemberGql = `
type ReviewMemberObj {
  id: String!
  reviewId: String!
  userId: String!
  created: String!
}
`;

export const ContextForReviewMemberObj = createContext<ReviewMemberObj>(
  {} as ReviewMemberObj,
);

export const exampleReviewMember: ReviewMemberObj = {
  id: '0',
  reviewId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleReviewMembers: ReviewMemberObj[] = [
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

export const reviewMemberModel: ModelInterface<ReviewMemberObj> = {
  name: 'member',
  gql: reviewMemberGql,
  example: exampleReviewMember,
  examples: exampleReviewMembers,
  parentKey: 'reviewId',
  children: [],
};
