import { createContext } from "react";

export enum MessageSource {
  USER = 'You',
  AGENT = 'Agent',
}
export interface MessageObj {
  id: string;
  userId?: string;
  conversationId: string;
  source: string;
  time: string;
  message: string;
}

export const MessageContext = createContext<MessageObj>({} as MessageObj);

export type MessageTemplateObj = Omit<MessageObj, 'id' | 'userId' | 'chatId' | 'time'>;

export const exampleMessage: MessageObj = {
  id: '0',
  conversationId: '0',
  source: MessageSource.USER,
  time: new Date('2023-12-19').toISOString(),
  message: 'Hello World',
  userId: '0',
};

export const exampleAgentMessage: MessageObj = {
  id: '1',
  conversationId: '0',
  source: MessageSource.AGENT,
  time: new Date('2023-12-19').toISOString(),
  message: 'Hello World',
};

export const exampleMessages: MessageObj[] = [
  {
    id: '0',
    conversationId: '0',
    source: MessageSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    conversationId: '0',
    source: MessageSource.AGENT,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello World',
  },
  {
    id: '2',
    conversationId: '0',
    source: MessageSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];
