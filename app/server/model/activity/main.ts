import { ModelInterface } from '@/server/model/main';
import { createContext } from 'react';

export enum UserActivityVariant {
  CONVERSATION = 'CONVERSATION',
  CHAPTER = 'CHAPTER',
  SCENE = 'SCENE',
  IDEA = 'IDEA',
  WAY = 'WAY',
  POST = 'POST',
  ATTACHMENT = 'ATTACHMENT',
  COMMENT = 'COMMENT',
  MEMBER = 'MEMBER',
}

export interface UserActivityObj {
  id: string;
  userId: string;
  spaceId?: string;
  chapterId?: string;
  reviewId?: string;
  horizonId?: string;
  added: boolean;
  title: string;
  description: string;
  created: string;
  variant: string;
  conversationId?: string;
  sceneId?: string;
  ideaId?: string;
  postId?: string;
  wayId?: string;
  commentId?: string;
  attachmentId?: string;
  contributorId?: string;
}

export const UserActivityGql = `
type UserActivityObj {
  id: String!
  userId: String!
  chapterId: String
  spaceId: String
  horizonId: String
  acitivtyId: String
  added: Boolean!
  title: String!
  description: String!
  created: String!
  variant: String!
  conversationId: String
  sceneId: String
  ideaId: String
  postId: String
  wayId: String
  commentId: String
  attachmentId: String
  contributorId: String
}
`;

export const ContextForUserActivityObj = createContext<UserActivityObj>(
  {} as UserActivityObj,
);

export const exampleUserActivity: UserActivityObj = {
  id: '0',
  userId: '0',
  spaceId: '0',
  chapterId: '0',
  added: true,
  reviewId: '0',
  title: '',
  description: 'Hello World',
  created: new Date().toISOString(),
  variant: UserActivityVariant.CONVERSATION,
  conversationId: '0',
  ideaId: undefined,
  sceneId: undefined,
  postId: undefined,
  wayId: undefined,
  commentId: undefined,
  attachmentId: undefined,
  contributorId: undefined,
};

export const exampleUserActivitys: UserActivityObj[] = [
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
    variant: UserActivityVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    postId: undefined,
    wayId: undefined,
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
    variant: UserActivityVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    postId: undefined,
    wayId: undefined,
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
    variant: UserActivityVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    postId: undefined,
    wayId: undefined,
    commentId: undefined,
    attachmentId: undefined,
    contributorId: undefined,
  },
];

export const userActivityModel: ModelInterface<UserActivityObj> = {
  name: 'update',
  gql: UserActivityGql,
  example: exampleUserActivity,
  examples: exampleUserActivitys,
  parentKey: 'userId',
  children: [],
};
