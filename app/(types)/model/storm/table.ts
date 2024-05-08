import { ModelExample } from '../tables';
import { exampleChat, exampleChats } from './chat/main';
import { exampleMessage, exampleMessages } from './chat/message/main';

export const chatExamples: ModelExample = {
  description: "Chat examples.",
  example: exampleChat,
  examples: exampleChats,
};

export const messageExamples: ModelExample = {
  description: "Message examples.",
  example: exampleMessage,
  examples: exampleMessages,
};
