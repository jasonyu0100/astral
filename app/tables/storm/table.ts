import {
  getChatObj,
  getStormObj,
  listChatObjs,
  listStormObjs,
} from "@/graphql/queries";
import { TableDescriptor, TableObjectDescriptor } from "../tables";
import { chatSchema, exampleChat, exampleChats } from "./chat/main";
import {
  exampleMessage,
  exampleMessages,
  messageSchema,
} from "./chat/message/main";
import { exampleStorm, exampleStorms, stormSchema } from "./main";
import {
  deleteChatObj,
  deleteStormObj,
  updateChatObj,
  updateStormObj,
} from "@/graphql/mutations";

export const chatTable: TableDescriptor = {
  example: exampleChat,
  examples: exampleChats,
  schema: chatSchema,
  reducer: {
    get: getChatObj,
    list: listChatObjs,
    update: updateChatObj,
    delete: deleteChatObj,
  },
};

export const stormTable: TableDescriptor = {
  example: exampleStorm,
  examples: exampleStorms,
  schema: stormSchema,
  reducer: {
    get: getStormObj,
    list: listStormObjs,
    update: updateStormObj,
    delete: deleteStormObj,
  },
};

export const messageObject: TableObjectDescriptor = {
  example: exampleMessage,
  examples: exampleMessages,
  schema: messageSchema,
};
