import { createContext } from 'react';

export enum ContributionVariant {
  CONVERSATION = 'CONVERSATION',
  SCENE = 'SCENE',
  VERSE = 'VERSE',
}
export interface ContributionObj {
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

export const ContributionContext = createContext<ContributionObj>(
  {} as ContributionObj,
);

export const exampleContribution: ContributionObj = {
  id: '0',
  retroId: '0',
  variant: ContributionVariant.CONVERSATION,
  conversationId: '0',
  sceneId: undefined,
  verseId: undefined,
  value: 11,
  message: 'Hello World',
  time: new Date('2023-12-19').toISOString(),
};

export const exampleContributions: ContributionObj[] = [
  {
    id: '0',
    retroId: '0',
    variant: ContributionVariant.CONVERSATION,
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
    variant: ContributionVariant.CONVERSATION,
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
    variant: ContributionVariant.CONVERSATION,
    conversationId: '0',
    sceneId: undefined,
    verseId: undefined,
    value: 6,
    message: 'Decent Conversation',
    time: new Date('2023-12-19').toISOString(),
  },
];
