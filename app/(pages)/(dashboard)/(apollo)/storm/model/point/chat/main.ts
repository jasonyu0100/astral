import { StormMessageObj, exampleStormMessages } from "./message/main";

export interface StormChatObj {
  messages: StormMessageObj[];
}

export const exampleStormChat = {
  messages: exampleStormMessages
}