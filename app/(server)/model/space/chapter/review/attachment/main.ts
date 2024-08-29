import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { UrlElem } from '@/(server)/model/elements/url/main';
import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';
export interface ReviewAttachmentObj {
  id: string;
  userId: string;
  reviewId: string;
  created: string;
  variant: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
}

export const reviewAttachmentGql = `
type ReviewAttachmentObj {
  id: String!
  userId: String
  reviewId: String!
  created: String!
  variant: String!
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
}
`;

export const ContextForReviewAttachmentObj = createContext<ReviewAttachmentObj>(
  {} as ReviewAttachmentObj,
);

export const exampleReviewAttachment: ReviewAttachmentObj = {
  id: '0',
  reviewId: '0',
  created: new Date().toISOString(),
  userId: '0',
  variant: ElementVariant.FILE,
  fileElem: exampleFileElem,
};

export const exampleReviewAttachments: ReviewAttachmentObj[] = [
  {
    id: '0',
    reviewId: '0',
    created: new Date().toISOString(),
    userId: '0',
    variant: ElementVariant.FILE,
    fileElem: exampleFileElem,
  },
  {
    id: '1',
    reviewId: '0',
    created: new Date().toISOString(),
    userId: '0',
    variant: ElementVariant.FILE,
    fileElem: exampleFileElem,
  },
  {
    id: '2',
    reviewId: '0',
    created: new Date().toISOString(),
    userId: '0',
    variant: ElementVariant.FILE,
    fileElem: exampleFileElem,
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
