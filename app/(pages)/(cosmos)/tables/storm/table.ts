import { exampleChat, exampleChats } from "./chat/main";
import { exampleMessage, exampleMessages } from "./chat/message/main";
import { exampleStorm, exampleStorms } from "./main";

export const stormTable = {
  example: exampleStorm,
  examples: exampleStorms,
  chat: {
    example: exampleChat,
    examples: exampleChats,
  },
  message: {
    example: exampleMessage,
    examples: exampleMessages,
  },
};
