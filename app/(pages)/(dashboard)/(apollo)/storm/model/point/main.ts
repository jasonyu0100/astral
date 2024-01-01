import { StormChatObj, exampleStormChat } from "./chat/main";

export interface StormPointObj {
  chat: StormChatObj;
}

export const exampleStormPoint = {
  chat: exampleStormChat,
};
