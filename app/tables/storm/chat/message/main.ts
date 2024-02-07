export enum MessageSource {
  USER = 'You',
  AGENT = 'Agent',
}
export interface MessageObj {
  id: string;
  userId?: string;
  chatId: string;
  source: string;
  time: string;
  message: string;
}

export type MessageTemplateObj = Omit<MessageObj, 'id' | 'userId' | 'chatId' | 'time'>;

export const exampleMessage: MessageObj = {
  id: '0',
  chatId: '0',
  source: MessageSource.USER,
  time: new Date('2023-12-19').toISOString(),
  message: 'Hello World',
  userId: '0',
};

export const exampleAgentMessage: MessageObj = {
  id: '1',
  chatId: '0',
  source: MessageSource.AGENT,
  time: new Date('2023-12-19').toISOString(),
  message: 'Hello World',
};

export const exampleMessages: MessageObj[] = [
  {
    id: '0',
    chatId: '0',
    source: MessageSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Test Message',
    userId: '0',
  },
  {
    id: '1',
    chatId: '0',
    source: MessageSource.AGENT,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello World',
  },
  {
    id: '2',
    chatId: '0',
    source: MessageSource.USER,
    time: new Date('2023-12-19').toISOString(),
    message: 'Hello There',
    userId: '0',
  },
];
