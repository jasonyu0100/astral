import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export enum ChapterUpdateAddVariant {
  CHAPTER = 'CHAPTER', // WHAT CHAPTERS WERE MADE
  CHAT = 'CHAT', // WHAT CHATS WERE MADE
  SCENE = 'SCENE', // WHAT SCENES WERE MAPPED
  VERSE = 'VERSE', // WHAT WORK WAS DONE
  CONVERSATION = 'CONVERSATION', // WHAT CONVERSATIONS WERE MADE
  IDEA = 'IDEA', // WHAT IDEAS WERE FOUND
}

export interface ChapterUpdateAddObj {
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

export const chapterUpdateAddGql = `
type ChapterUpdateAddObj {
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

export const ContextForChapterUpdateAddObj = createContext<ChapterUpdateAddObj>(
  {} as ChapterUpdateAddObj,
);

export const exampleChapterUpdateAdd: ChapterUpdateAddObj = {
  id: '0',
  included: true,
  updateId: '0',
  variant: ChapterUpdateAddVariant.CONVERSATION,
  conversationId: '0',
  ideaId: undefined,
  sceneId: undefined,
  verseId: undefined,
  value: 11,
  message: 'Hello World',
  created: new Date().toISOString(),
};

export const exampleChapterUpdateAdds: ChapterUpdateAddObj[] = [
  {
    id: '0',
    included: true,
    updateId: '0',
    variant: ChapterUpdateAddVariant.CONVERSATION,
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
    variant: ChapterUpdateAddVariant.CONVERSATION,
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
    variant: ChapterUpdateAddVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 6,
    message: 'Decent Conversation',
    created: new Date().toISOString(),
  },
];

export const chapterUpdateAddModel: ModelInterface<ChapterUpdateAddObj> = {
  name: 'add',
  gql: chapterUpdateAddGql,
  example: exampleChapterUpdateAdd,
  examples: exampleChapterUpdateAdds,
  parentKey: 'updateId',
  children: [],
};
