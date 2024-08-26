import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export enum ChapterSessionUpdateVariant {
  CHAPTER = 'CHAPTER', // WHAT CHAPTERS WERE MADE
  CHAT = 'CHAT', // WHAT CHATS WERE MADE
  SCENE = 'SCENE', // WHAT SCENES WERE MAPPED
  REVIEW = 'REVIEW', // WHAT WORK WAS DONE
  CONVERSATION = 'CONVERSATION', // WHAT CONVERSATIONS WERE MADE
  IDEA = 'IDEA', // WHAT IDEAS WERE FOUND
}

export interface ChapterSessionUpdateObj {
  id: string;
  userId: string;
  spaceId: string;
  chapterId: string;
  sessionId?: string;
  added: boolean;
  title: string;
  description: string;
  created: string;
  variant: string;
  chatId?: string;
  conversationId?: string;
  sceneId?: string;
  ideaId?: string;
  reviewId?: string;
}

export const ChapterSessionUpdateGql = `
type ChapterSessionUpdateObj {
  id: String!
  userId: String!
  chapterId: String!
  spaceId: String!
  sessionId: String
  added: Boolean!
  title: String!
  description: String!
  created: String!
  variant: String!
  chatId: String
  conversationId: String
  sceneId: String
  ideaId: String
  reviewId: String
}
`;

export const ContextForChapterSessionUpdateObj =
  createContext<ChapterSessionUpdateObj>({} as ChapterSessionUpdateObj);

export const exampleChapterSessionUpdate: ChapterSessionUpdateObj = {
  id: '0',
  userId: '0',
  spaceId: '0',
  chapterId: '0',
  added: true,
  sessionId: '0',
  title: '',
  description: 'Hello World',
  created: new Date().toISOString(),
  variant: ChapterSessionUpdateVariant.CONVERSATION,
  conversationId: '0',
  ideaId: undefined,
  sceneId: undefined,
  reviewId: undefined,
};

export const exampleChapterSessionUpdates: ChapterSessionUpdateObj[] = [
  {
    id: '0',
    userId: '0',
    spaceId: '0',
    chapterId: '',
    added: false,
    title: '',
    description: 'Hello World',
    created: new Date().toISOString(),
    sessionId: '0',
    variant: ChapterSessionUpdateVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    reviewId: undefined,
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
    sessionId: '0',
    variant: ChapterSessionUpdateVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    reviewId: undefined,
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
    sessionId: '0',
    variant: ChapterSessionUpdateVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    reviewId: undefined,
  },
];

export const chapterSessionUpdateModel: ModelInterface<ChapterSessionUpdateObj> =
  {
    name: 'update',
    gql: ChapterSessionUpdateGql,
    example: exampleChapterSessionUpdate,
    examples: exampleChapterSessionUpdates,
    parentKey: 'sessionId',
    children: ['member'],
  };
