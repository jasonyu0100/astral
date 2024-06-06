import { createContext } from 'react';

export enum RetroContributionVariant {
  CONVERSATION = 'CONVERSATION', // WHAT CONVERSATIONS WERE MADE
  IDEA = 'IDEA', // WHAT IDEAS WERE FOUND
  SCENE = 'SCENE', // WHAT SCENES WERE MAPPED
  VERSE = 'VERSE', // WHAT WORK WAS DONE
}

export interface RetroContributionObj {
  id: string;
  retroId: string;
  variant: string;
  conversationId?: string;
  sceneId?: string;
  ideaId?: string;
  verseId?: string;
  value: number;
  message: string;
  time: string;
}

export const retroContributionGql = `
type RetroContributionObj {
  id: String!
  retroId: String!
  variant: String!
  conversationId: String
  ideaId: String
  sceneId: String
  verseId: String
  value: Int!
  message: String!
  time: String!
}
`;

export const RetroContributionContext = createContext<RetroContributionObj>(
  {} as RetroContributionObj,
);

export const exampleRetroContribution: RetroContributionObj = {
  id: '0',
  retroId: '0',
  variant: RetroContributionVariant.CONVERSATION,
  conversationId: '0',
  ideaId: undefined,
  sceneId: undefined,
  verseId: undefined,
  value: 11,
  message: 'Hello World',
  time: new Date('2023-12-19').toISOString(),
};

export const exampleRetroContributions: RetroContributionObj[] = [
  {
    id: '0',
    retroId: '0',
    variant: RetroContributionVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 11,
    message: 'Quality Addition',
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    retroId: '0',
    variant: RetroContributionVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 0,
    message: 'Unused Contribution',
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    retroId: '0',
    variant: RetroContributionVariant.CONVERSATION,
    conversationId: '0',
    ideaId: undefined,
    sceneId: undefined,
    verseId: undefined,
    value: 6,
    message: 'Decent Conversation',
    time: new Date('2023-12-19').toISOString(),
  },
];
