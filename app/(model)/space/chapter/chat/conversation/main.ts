import { createContext } from "react";

export interface ChatConversationObj {
  id: string;
  chatId: string;
  summary: string;
  time: string;
}

export const exampleChatConversation: ChatConversationObj = {
  id: '0',
  chatId: '0',
  summary: "A conversation about the idea",
  time: new Date('2023-12-19').toISOString(),
};

export const ChatConversationContext = createContext<ChatConversationObj>({} as ChatConversationObj);

export const exampleChatConversations: ChatConversationObj[] = [
  {
    id: '0',
    chatId: '0',
    summary: "Another conversation about the idea",
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '1',
    chatId: '0',
    summary: "What's the meaning?",
    time: new Date('2023-12-19').toISOString(),
  },
  {
    id: '2',
    chatId: '0',
    summary: "What's the meaning?",
    time: new Date('2023-12-19').toISOString(),
  },
];
