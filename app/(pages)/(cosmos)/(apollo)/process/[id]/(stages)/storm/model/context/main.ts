import { StormChatObj } from "../point/chat/main";
import { exampleStormChats } from "../point/main";

export interface StormContextObj {
  chats: StormChatObj[];
}

export const exampleStormContext = {
  chats: exampleStormChats,
};
