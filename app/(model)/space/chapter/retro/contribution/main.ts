import { createContext } from "react";

export interface ContributionObj {
  id: string;
  retroId: string;
  conversationId?: string;
  sceneId?: string;
  verseId?: string;
  metric: number;
  message: string;
  time: string;
}

export const ContributionContext = createContext<ContributionObj>({} as ContributionObj);

export const exampleContribution: ContributionObj = {
  id: '0',
  retroId: '0',
  conversationId: '0',
  sceneId: undefined,
  verseId: undefined,
  metric: 11,
  message: 'Hello World',
    time: new Date('2023-12-19').toISOString(),
};

export const exampleContributions: ContributionObj[] = [
  {
    id: '0',
    retroId: '0',
    conversationId: '0',
    sceneId: undefined,
    verseId: undefined,
    metric: 11,
    message: 'Quality Addition',
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    retroId: '0',
    conversationId: '0',
    sceneId: undefined,
    verseId: undefined,
    metric: 0,
    message: 'Unused Contribution',
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '0',
    retroId: '0',
    conversationId: '0',
    sceneId: undefined,
    verseId: undefined,
    metric: 6,
    message: 'Decent Conversation',
    time: new Date('2023-12-19').toISOString(),
  },
];
