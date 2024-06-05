import { createContext } from 'react';

export enum SpaceContributionVariant {
  CONVERSATION = 'CONVERSATION',
  SCENE = 'SCENE',
  VERSE = 'VERSE',
}
export interface SpaceContributionObj {
  id: string;
  retroId: string;
  variant: string;
  conversationId?: string;
  sceneId?: string;
  verseId?: string;
  value: number;
  message: string;
  time: string;
}

export const SpaceContributionContext = createContext<SpaceContributionObj>(
  {} as SpaceContributionObj,
);

export const exampleSpaceContribution: SpaceContributionObj = {
  id: '0',
  retroId: '0',
  variant: SpaceContributionVariant.CONVERSATION,
  conversationId: '0',
  sceneId: undefined,
  verseId: undefined,
  value: 11,
  message: 'Hello World',
  time: new Date('2023-12-19').toISOString(),
};

export const exampleSpaceContributions: SpaceContributionObj[] = [
  {
    id: '0',
    retroId: '0',
    variant: SpaceContributionVariant.CONVERSATION,
    conversationId: '0',
    sceneId: undefined,
    verseId: undefined,
    value: 11,
    message: 'Quality Addition',
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    retroId: '0',
    variant: SpaceContributionVariant.CONVERSATION,
    conversationId: '0',
    sceneId: undefined,
    verseId: undefined,
    value: 0,
    message: 'Unused Contribution',
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    retroId: '0',
    variant: SpaceContributionVariant.CONVERSATION,
    conversationId: '0',
    sceneId: undefined,
    verseId: undefined,
    value: 6,
    message: 'Decent Conversation',
    time: new Date('2023-12-19').toISOString(),
  },
];
