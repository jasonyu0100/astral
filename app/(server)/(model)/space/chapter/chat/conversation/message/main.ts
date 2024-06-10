import { createContext } from 'react';
export interface ConversationMessageObj {
  id: string;
  userId?: string;
  conversationId: string;
  created: string;
  message: string;
}

export const conversationMessageGql = `
type ConversationMessageObj {
  id: String!
  userId: String
  conversationId: String!
  created: String!
  message: String!
}
`;

export const ContextForConversationMessageObj =
  createContext<ConversationMessageObj>({} as ConversationMessageObj);

export const exampleConversationMessage: ConversationMessageObj = {
  id: '0',
  conversationId: '0',
  userId: '0',
  created: new Date().toISOString(),
  message: 'Hello World',
};

export const exampleAgentConversationMessage: ConversationMessageObj = {
  id: '1',
  conversationId: '0',
  userId: '0',
  created: new Date().toISOString(),
  message: 'Hello World',
};

export const exampleConversationMessages: ConversationMessageObj[] = [
  {
    id: '0',
    conversationId: '0',
    userId: '0',
    created: new Date().toISOString(),
    message: 'Test Message',
  },
  {
    id: '1',
    conversationId: '0',
    userId: undefined,
    created: new Date().toISOString(),
    message: 'Hello World',
  },
  {
    id: '2',
    conversationId: '0',
    userId: '0',
    created: new Date().toISOString(),
    message: 'Hello There',
  },
];
