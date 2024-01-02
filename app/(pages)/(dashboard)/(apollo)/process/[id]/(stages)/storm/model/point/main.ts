import { StormChatObj, exampleStormChat } from "./chat/main";

export interface StormPointObj {
  chats: StormChatObj[];
}

export const exampleStormChats: StormChatObj[] = [
  exampleStormChat
]

export const exampleStormPoint: StormPointObj = {
  chats: exampleStormChats,
};

export const exampleStormPoints: StormPointObj[] = [
  exampleStormPoint
]