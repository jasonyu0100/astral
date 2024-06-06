import { createContext } from 'react';
export interface ConversationMessageObj {
  id: string;
  memberId: string;
  conversationId: string;
  time: string;
  message: string;
}

export const conversationMessageGql = `
type ConversationMessageObj {
  id: String!
  memberId: String!
  conversationId: String!
  time: String!
  message: String!
}
`;

export const ConversationMessageContext = createContext<ConversationMessageObj>(
  {} as ConversationMessageObj,
);

export const exampleConversationMessage: ConversationMessageObj = {
  id: '0',
  conversationId: '0',
  memberId: '0',
  time: new Date('2023-12-19').toISOString(),
  message: 'Hello World',
};

export const exampleAgentConversationMessage: ConversationMessageObj = {
  id: '1',
  conversationId: '0',
  memberId: '0',
  time: new Date('2023-12-19').toISOString(),
  message: 'Hello World',
};

export const exampleConversationMessages: ConversationMessageObj[] = [
  {
    id: '0',
    conversationId: '0',
    memberId: '0',
    time: new Date('2023-12-19').toISOString(),
    message: 'Test Message',
  },
  {
    id: '1',
    conversationId: '0',
    memberId: '0',
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello World',
  },
  {
    id: '2',
    conversationId: '0',
    memberId: '0',
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello There',
  },
];
