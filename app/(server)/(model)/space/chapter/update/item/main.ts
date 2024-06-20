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
  userId: string;
  chapterId: string;
  updateId?: string;
  added: boolean;
  title: string;
  description: string;
  created: string;
  variant: string;
  chatId?: string;
  conversationId?: string;
  sceneId?: string;
  ideaId?: string;
  verseId?: string;
}

export const chapterUpdateItemGql = `
type ChapterUpdateItemObj {
  id: String!
  userId: String!
  chapterId: String!
  updateId: String
  added: Boolean!
  title: String!
  description: String!
  created: String!
  variant: String!
  chatId: String
  conversationId: String
  sceneId: String
  ideaId: String
  verseId: String
}
`;

export const ContextForChapterUpdateItemObj =
  createContext<ChapterUpdateItemObj>({} as ChapterUpdateItemObj);

export const exampleChapterUpdateItem: ChapterUpdateItemObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  added: true,
  updateId: '0',
  title: '',
  description: 'Hello World',
  created: new Date().toISOString(),
  variant: ChapterUpdateItemVariant.CONVERSATION,
  conversationId: '0',
  ideaId: undefined,
  sceneId: undefined,
  verseId: undefined,
};

export const exampleChapterUpdateItems: ChapterUpdateItemObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '',
    added: false,
    title: '',
    description: 'Hello World',
    created: new Date().toISOString(),
    updateId: '0',
    variant: ChapterUpdateItemVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
  },
  {
    id: '0',
    userId: '0',
    chapterId: '',
    title: '',
    added: false,
    description: 'Hello World',
    created: new Date().toISOString(),
    updateId: '0',
    variant: ChapterUpdateItemVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
  },
  {
    id: '0',
    userId: '0',
    chapterId: '',
    title: '',
    added: false,
    description: 'Hello World',
    created: new Date().toISOString(),
    updateId: '0',
    variant: ChapterUpdateItemVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
  },
];

export const chapterUpdateItemModel: ModelInterface<ChapterUpdateItemObj> = {
  name: 'item',
  gql: chapterUpdateItemGql,
  example: exampleChapterUpdateItem,
  examples: exampleChapterUpdateItems,
  parentKey: 'updateId',
  children: ['member'],
};
