import { FileElem } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { UrlElem } from '@/(server)/model/elements/url/main';
import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export enum ChapterReviewStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export interface ChapterReviewObj {
  id: string;
  userId: string;
  chapterId: string;
  title: string;
  description: string;
  created: string;
  variant: string;
  status: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
}

export const chapterReviewGql = `
type ChapterReviewObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  created: String!
  variant: String!
  status: String!
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
}
`;

export const ContextForChapterReviewObj = createContext<ChapterReviewObj>(
  {} as ChapterReviewObj,
);

export const exampleChapterReview: ChapterReviewObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Review Example',
  description: 'Review Description',
  status: ChapterReviewStatus.PENDING,
  created: new Date().toISOString(),
  variant: ElementVariant.FILE,
};

export const exampleChapterReviews: ChapterReviewObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Review Example',
    status: ChapterReviewStatus.PENDING,
    description: 'Reviewwww Description',
    created: new Date().toISOString(),
    variant: ElementVariant.FILE,
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Review Example',
    status: ChapterReviewStatus.PENDING,
    description: 'Review Description',
    created: new Date().toISOString(),
    variant: ElementVariant.FILE,
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Review Example',
    status: ChapterReviewStatus.PENDING,
    description: 'Review Description',
    created: new Date().toISOString(),
    variant: ElementVariant.FILE,
  },
];

export const chapterReviewModel: ModelInterface<ChapterReviewObj> = {
  name: 'review',
  parentKey: 'chapterId',
  example: exampleChapterReview,
  examples: exampleChapterReviews,
  gql: chapterReviewGql,
  children: ['comment', 'member'],
};
