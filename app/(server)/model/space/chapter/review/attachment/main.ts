import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';
export interface ReviewAttachmentObj {
  id: string;
  userId: string;
  reviewId: string;
  created: string;
  message: string;
}

export const reviewAttachmentGql = `
type ReviewCommentObj {
  id: String!
  userId: String
  reviewId: String!
  created: String!
  message: String!
}
`;

export const ContextForReviewAttachmentObj = createContext<ReviewAttachmentObj>(
  {} as ReviewAttachmentObj,
);

export const exampleReviewAttachment: ReviewAttachmentObj = {
  id: '0',
  reviewId: '0',
  created: new Date().toISOString(),
  message: 'This is pretty good actually',
  userId: '0',
};

export const exampleReviewAttachments: ReviewAttachmentObj[] = [
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

export const reviewAttachmentModel: ModelInterface<ReviewAttachmentObj> = {
  name: 'attachment',
  example: exampleReviewAttachment,
  examples: exampleReviewAttachments,
  gql: reviewAttachmentGql,
  children: [],
  parentKey: 'reviewId',
};
