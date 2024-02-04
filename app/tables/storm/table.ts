import { TableDescriptor } from '../tables';
import { exampleChat, exampleChats } from './chat/main';
import {
  exampleMessage,
  exampleMessages,
} from './chat/message/main';

export const chatTable: TableDescriptor = {
  example: exampleChat,
  examples: exampleChats,
};

export const messageTable: TableDescriptor = {
  example: exampleMessage,
  examples: exampleMessages,
};
