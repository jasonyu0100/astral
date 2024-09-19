import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export enum ChapterReviewUpdateVariant {
  CONVERSATION = 'CONVERSATION',
  CHAPTER = 'CHAPTER',
  SCENE = 'SCENE',
  IDEA = 'IDEA',
  LOG = 'LOG',
  SPOTLIGHT = 'SPOTLIGHT',
  ATTACHMENT = 'ATTACHMENT',
  COMMENT = 'COMMENT',
  MEMBER = 'MEMBER',
}

export interface ChapterReviewUpdateObj {
  id: string;
  userId: string;
  spaceId: string;
  chapterId: string;
  reviewId?: string;
  added: boolean;
  title: string;
  description: string;
  created: string;
  variant: string;
  conversationId?: string;
  sceneId?: string;
  ideaId?: string;
  spotlightId?: string;
  logId?: string;
  commentId?: string;
  attachmentId?: string;
  contributorId?: string;
}

export const ChapterReviewUpdateGql = `
type ChapterReviewUpdateObj {
  id: String!
  userId: String!
  chapterId: String!
  spaceId: String!
  reviewId: String
  added: Boolean!
  title: String!
  description: String!
  created: String!
  variant: String!
  conversationId: String
  sceneId: String
  ideaId: String
  spotlightId: String
  logId: String
  commentId: String
  attachmentId: String
  contributorId: String
}
`;

export const ContextForChapterReviewUpdateObj =
  createContext<ChapterReviewUpdateObj>({} as ChapterReviewUpdateObj);

export const exampleChapterReviewUpdate: ChapterReviewUpdateObj = {
  id: '0',
  userId: '0',
  spaceId: '0',
  chapterId: '0',
  added: true,
  reviewId: '0',
  title: '',
  description: 'Hello World',
  created: new Date().toISOString(),
  variant: ChapterReviewUpdateVariant.CONVERSATION,
  conversationId: '0',
  ideaId: undefined,
  sceneId: undefined,
  spotlightId: undefined,
  logId: undefined,
  commentId: undefined,
  attachmentId: undefined,
  contributorId: undefined,
};

export const exampleChapterReviewUpdates: ChapterReviewUpdateObj[] = [
  {
    id: '0',
    userId: '0',
    spaceId: '0',
    chapterId: '',
    added: false,
    title: '',
    description: 'Hello World',
    created: new Date().toISOString(),
    reviewId: '0',
    variant: ChapterReviewUpdateVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    spotlightId: undefined,
    logId: undefined,
    commentId: undefined,
    attachmentId: undefined,
    contributorId: undefined,
  },
  {
    id: '0',
    userId: '0',
    spaceId: '0',
    chapterId: '',
    title: '',
    added: false,
    description: 'Hello World',
    created: new Date().toISOString(),
    reviewId: '0',
    variant: ChapterReviewUpdateVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    spotlightId: undefined,
    logId: undefined,
    commentId: undefined,
    attachmentId: undefined,
    contributorId: undefined,
  },
  {
    id: '0',
    userId: '0',
    spaceId: '0',
    chapterId: '',
    title: '',
    added: false,
    description: 'Hello World',
    created: new Date().toISOString(),
    reviewId: '0',
    variant: ChapterReviewUpdateVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    spotlightId: undefined,
    logId: undefined,
    commentId: undefined,
    attachmentId: undefined,
    contributorId: undefined,
  },
];

export const chapterReviewUpdateModel: ModelInterface<ChapterReviewUpdateObj> =
  {
    name: 'update',
    gql: ChapterReviewUpdateGql,
    example: exampleChapterReviewUpdate,
    examples: exampleChapterReviewUpdates,
    parentKey: 'sessionId',
    children: ['member'],
  };
