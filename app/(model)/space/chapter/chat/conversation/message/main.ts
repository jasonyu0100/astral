import { createContext } from "react";

export enum ConversationMessageSource {
  USER = 'You',
  AGENT = 'Agent',
}
export interface ConversationMessageObj {
  id: string;
  userId?: string;
  conversationId: string;
  source: string;
  time: string;
  message: string;
}

export const conversationMessageGql = `
type ConversationMessageObj {
  id: String!
  userId: String
  conversationId: String!
  source: String!
  time: String!
  message: String!
}
`

export const ConversationMessageContext = createContext<ConversationMessageObj>({} as ConversationMessageObj);

export const exampleConversationMessage: ConversationMessageObj = {
  id: '0',
  conversationId: '0',
  source: ConversationMessageSource.USER,
  time: new Date('2023-12-19').toISOString(),
  message: 'Hello World',
  userId: '0',
};

export const exampleAgentConversationMessage: ConversationMessageObj = {
  id: '1',
  conversationId: '0',
  source: ConversationMessageSource.AGENT,
  time: new Date('2023-12-19').toISOString(),
  message: 'Hello World',
};

export const exampleConversationMessages: ConversationMessageObj[] = [
  {
    id: '0',
    conversationId: '0',
    source: ConversationMessageSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    conversationId: '0',
    source: ConversationMessageSource.AGENT,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello World',
  },
  {
    id: '2',
    conversationId: '0',
    source: ConversationMessageSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];
