import { createContext } from "react";

export interface ChatConversationObj {
  id: string;
  userId: string;
  chatId: string;
  summary: string;
  created: string;
}

export const exampleChatConversation: ChatConversationObj = {
  id: '0',
  userId: '0',
  chatId: '0',
  summary: "A conversation about the idea",
  created: new Date().toISOString(),
};

export const chatConversationGql = `
type ChatConversationObj {
  id: String!
  userId: String!
  chatId: String!
  summary: String!
  time: String!
}
`

export const ContextForChatConversationObj = createContext<ChatConversationObj>({} as ChatConversationObj);

export const exampleChatConversations: ChatConversationObj[] = [
  {
    id: '0',
    userId: '0',
    chatId: '0',
    summary: "Another conversation about the idea",
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    chatId: '0',
    summary: "What's the meaning?",
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    chatId: '0',
    summary: "What's the meaning?",
    created: new Date().toISOString(),
  },
];
