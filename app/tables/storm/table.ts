import { TableDescriptor } from '../tables';
import { chatSchema, exampleChat, exampleChats } from './chat/main';
import {
  exampleMessage,
  exampleMessages,
  messageSchema,
} from './chat/message/main';

export const chatTable: TableDescriptor = {
  example: exampleChat,
  examples: exampleChats,
  schema: chatSchema,
};

export const messageTable: TableDescriptor = {
  example: exampleMessage,
  examples: exampleMessages,
  schema: messageSchema,
};
