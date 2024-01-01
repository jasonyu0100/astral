import { StormChatObj, exampleStormChat } from "../point/chat/main";

export interface StormContextObj {
  chat: StormChatObj;
}

export const exampleStormContext = {
  chat: exampleStormChat,
};
