import { StormMessageObj, exampleStormMessages } from "./message/main";

export interface StormChatObj {
  title: string;
  summary: string;
  messages: StormMessageObj[];
}

export const exampleStormChat: StormChatObj = {
  title: "Melody",
  summary: "You want it to sound good",
  messages: exampleStormMessages,
};
