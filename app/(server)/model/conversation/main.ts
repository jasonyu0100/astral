import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface ConversationObj {
  id: string;
  userId: string;
  chapterId?: string;
  decisionId?: string;
  toUserId?: string;
  toAgentId?: string;
  summary: string;
  created: string;
}

export const exampleConversation: ConversationObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  decisionId: '0',
  toUserId: '0',
  summary: 'A conversation about the idea',
  created: new Date().toISOString(),
};

export const conversationGql = `
type ConversationObj {
  id: String!
  userId: String!
  chapterId: String
  decisionId: String
  toUserId: String
  toAgentId: String
  summary: String!
  created: String!
}
`;

export const ContextForConversationObj = createContext<ConversationObj>(
  {} as ConversationObj,
);

export const exampleConversations: ConversationObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    summary: 'Another conversation about the idea',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    summary: "What's the meaning?",
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    summary: "What's the meaning?",
    created: new Date().toISOString(),
  },
];

export const conversationModel: ModelInterface<ConversationObj> = {
  name: 'conversation',
  gql: conversationGql,
  example: exampleConversation,
  examples: exampleConversations,
  parentKey: 'chapterId',
  children: ['message'],
};
