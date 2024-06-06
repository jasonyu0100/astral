import { createContext } from 'react';

export enum ChatMemberVariant {
  USER = 'You',
  AGENT = 'Agent',
}

export interface ChatMemberObj {
  id: string;
  chatId: string;
  variant: string;
  userId?: string;
}

export const chatMemberGql = `
type ChatMemberObj {
  id: String!
  chatId: String!
  variant: String!
  userId: String
}
`;

export const ChatMemberObjContext = createContext<ChatMemberObj>(
  {} as ChatMemberObj,
);

export const exampleChatMember: ChatMemberObj = {
  id: '0',
  chatId: '0',
  variant: ChatMemberVariant.USER,
  userId: '0',
};

export const exampleChatMembers: ChatMemberObj[] = [
  {
    id: '0',
    chatId: '0',
    variant: ChatMemberVariant.USER,
    userId: '0',
  },
  {
    id: '0',
    chatId: '0',
    variant: ChatMemberVariant.USER,
    userId: '0',
  },
  {
    id: '0',
    chatId: '0',
    variant: ChatMemberVariant.USER,
    userId: '0',
  },
];
