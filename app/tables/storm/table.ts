import { TableDescriptor, TableObjectDescriptor } from "../tables";
import { chatSchema, exampleChat, exampleChats } from "./chat/main";
import {
  exampleMessage,
  exampleMessages,
  messageSchema,
} from "./chat/message/main";
import { exampleStorm, exampleStorms, stormSchema } from "./main";

export const chatTable: TableDescriptor = {
  example: exampleChat,
  examples: exampleChats,
  schema: chatSchema,
};

export const stormTable: TableDescriptor = {
  example: exampleStorm,
  examples: exampleStorms,
  schema: stormSchema,
};

export const messageObject: TableObjectDescriptor = {
  example: exampleMessage,
  examples: exampleMessages,
  schema: messageSchema,
};
