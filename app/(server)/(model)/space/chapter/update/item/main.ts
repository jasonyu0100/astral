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
  updateId: string;
  title: string;
  description: string;
  created: string;
  included: boolean;
  variant: string;
  chapterId?: string;
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
  updateId: String!
  title: String!
  description: String!
  created: String!
  included: Boolean!
  variant: String!
  conversationId: String
  chapterId: String
  chatId: String
  ideaId: String
  sceneId: String
  verseId: String
}
`;

export const ContextForChapterUpdateItemObj =
  createContext<ChapterUpdateItemObj>({} as ChapterUpdateItemObj);

export const exampleChapterUpdateItem: ChapterUpdateItemObj = {
  id: '0',
  userId: '0',
  title: '',
  description: 'Hello World',
  created: new Date().toISOString(),
  included: true,
  updateId: '0',
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
    title: '',
    description: 'Hello World',
    created: new Date().toISOString(),
    included: true,
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
    title: '',
    description: 'Hello World',
    created: new Date().toISOString(),
    included: true,
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
    title: '',
    description: 'Hello World',
    created: new Date().toISOString(),
    included: true,
    updateId: '0',
    variant: ChapterUpdateItemVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
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
