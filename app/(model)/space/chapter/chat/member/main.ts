import { createContext } from 'react';

export interface ChatMemberObj {
  id: string;
  chatId: string;
  userId?: string;
  created: string;
}

export const chatMemberGql = `
type ChatMemberObj {
  id: String!
  chatId: String!
  userId: String!
  created: String!
}
`;

export const ContextForChatMemberObj = createContext<ChatMemberObj>(
  {} as ChatMemberObj,
);

export const exampleChatMember: ChatMemberObj = {
  id: '0',
  chatId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleChatMembers: ChatMemberObj[] = [
  {
    id: '0',
    chatId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    chatId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    chatId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];
