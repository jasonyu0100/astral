import { createContext } from 'react';

export enum SpaceUpdateAddVariant {
  CONVERSATION = 'CONVERSATION', // WHAT CONVERSATIONS WERE MADE
  IDEA = 'IDEA', // WHAT IDEAS WERE FOUND
  SCENE = 'SCENE', // WHAT SCENES WERE MAPPED
  VERSE = 'VERSE', // WHAT WORK WAS DONE
}

export interface SpaceUpdateAddObj {
  id: string;
  updateId: string;
  variant: string;
  conversationId?: string;
  sceneId?: string;
  ideaId?: string;
  verseId?: string;
  value: number;
  message: string;
  created: string;
}

export const spaceUpdateAddGql = `
type SpaceUpdateAddObj {
  id: String!
  updateId: String!
  variant: String!
  conversationId: String
  ideaId: String
  sceneId: String
  verseId: String
  value: Int!
  message: String!
  created: String!
}
`;

export const ContextForSpaceUpdateAddObj = createContext<SpaceUpdateAddObj>(
  {} as SpaceUpdateAddObj,
);

export const exampleSpaceUpdateAdd: SpaceUpdateAddObj = {
  id: '0',
  updateId: '0',
  variant: SpaceUpdateAddVariant.CONVERSATION,
  conversationId: '0',
  ideaId: undefined,
  sceneId: undefined,
  verseId: undefined,
  value: 11,
  message: 'Hello World',
  created: new Date('2023-12-19').toISOString(),
};

export const exampleSpaceUpdateAdds: SpaceUpdateAddObj[] = [
  {
    id: '0',
    updateId: '0',
    variant: SpaceUpdateAddVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 11,
    message: 'Quality Addition',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    variant: SpaceUpdateAddVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 0,
    message: 'Unused Contribution',
    created: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    variant: SpaceUpdateAddVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 6,
    message: 'Decent Conversation',
    created: new Date('2023-12-19').toISOString(),
  },
];
