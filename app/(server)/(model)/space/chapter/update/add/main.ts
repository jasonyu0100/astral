import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export enum ChapterUpdateItemVariant {
  CHAPTER = 'CHAPTER', // WHAT CHAPTERS WERE MADE
  CHAT = 'CHAT', // WHAT CHATS WERE MADE
  SCENE = 'SCENE', // WHAT SCENES WERE MAPPED
  VERSE = 'VERSE', // WHAT WORK WAS DONE
  CONVERSATION = 'CONVERSATION', // WHAT CONVERSATIONS WERE MADE
  IDEA = 'IDEA', // WHAT IDEAS WERE FOUND
}

export interface ChapterUpdateItemObj {
  id: string;
  updateId: string;
  variant: string;
  included: boolean;
  chapterId?: string;
  chatId?: string;
  conversationId?: string;
  sceneId?: string;
  ideaId?: string;
  verseId?: string;
  value: number;
  message: string;
  created: string;
}

export const chapterUpdateItemGql = `
type ChapterUpdateItemObj {
  id: String!
  updateId: String!
  variant: String!
  included: Boolean!
  conversationId: String
  chapterId: String
  chatId: String
  ideaId: String
  sceneId: String
  verseId: String
  message: String!
  created: String!
  value: Int!
}
`;

export const ContextForChapterUpdateItemObj =
  createContext<ChapterUpdateItemObj>({} as ChapterUpdateItemObj);

export const exampleChapterUpdateItem: ChapterUpdateItemObj = {
  id: '0',
  included: true,
  updateId: '0',
  variant: ChapterUpdateItemVariant.CONVERSATION,
  conversationId: '0',
  ideaId: undefined,
  sceneId: undefined,
  verseId: undefined,
  value: 11,
  message: 'Hello World',
  created: new Date().toISOString(),
};

export const exampleChapterUpdateItems: ChapterUpdateItemObj[] = [
  {
    id: '0',
    included: true,
    updateId: '0',
    variant: ChapterUpdateItemVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 11,
    message: 'Quality Addition',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    included: true,
    variant: ChapterUpdateItemVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 0,
    message: 'Unused Contribution',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    included: true,
    variant: ChapterUpdateItemVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 6,
    message: 'Decent Conversation',
    created: new Date().toISOString(),
  },
];

export const chapterUpdateItemModel: ModelInterface<ChapterUpdateItemObj> = {
  name: 'add',
  gql: chapterUpdateItemGql,
  example: exampleChapterUpdateItem,
  examples: exampleChapterUpdateItems,
  parentKey: 'updateId',
  children: [],
};
