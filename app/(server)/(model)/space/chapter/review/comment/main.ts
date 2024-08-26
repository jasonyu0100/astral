import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';
export interface ReviewCommentObj {
  id: string;
  userId: string;
  reviewId: string;
  created: string;
  message: string;
}

export const reviewCommentGql = `
type ReviewCommentObj {
  id: String!
  userId: String
  reviewId: String!
  created: String!
  message: String!
}
`;

export const ContextForReviewCommentObj = createContext<ReviewCommentObj>(
  {} as ReviewCommentObj,
);

export const exampleReviewComment: ReviewCommentObj = {
  id: '0',
  reviewId: '0',
  created: new Date().toISOString(),
  message: 'This is pretty good actually',
  userId: '0',
};

export const exampleAgentReviewComment: ReviewCommentObj = {
  id: '1',
  reviewId: '0',
  created: new Date().toISOString(),
  message: 'A melody of words',
  userId: '0',
};

export const exampleReviewComments: ReviewCommentObj[] = [
  {
    id: '0',
    reviewId: '0',
    created: new Date().toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    reviewId: '0',
    created: new Date().toISOString(),
    message: 'Hello World',
    userId: '0',
  },
  {
    id: '2',
    reviewId: '0',
    created: new Date().toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];

export const reviewCommentModel: ModelInterface<ReviewCommentObj> = {
  name: 'comment',
  example: exampleReviewComment,
  examples: exampleReviewComments,
  gql: reviewCommentGql,
  children: [],
  parentKey: 'reviewId',
};
