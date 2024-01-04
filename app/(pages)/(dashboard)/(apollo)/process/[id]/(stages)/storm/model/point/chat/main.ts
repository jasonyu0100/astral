import { StormMessageObj, exampleStormMessages } from "./message/main";

export interface StormChatObj {
  id: string;
  title: string;
  summary: string;
  messages: StormMessageObj[];
}

export const exampleStormChat: StormChatObj = {
  id: "0",
  title: "Melody",
  summary: "You want it to sound good",
  messages: exampleStormMessages,
};
