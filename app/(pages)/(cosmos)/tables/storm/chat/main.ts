import { MessageObj, exampleMessages } from "./message/main";

export interface ChatObj {
  id: string;
  title: string;
  summary: string;
  messages: MessageObj[];
}

export const exampleChat: ChatObj = {
  id: "0",
  title: "The Idea",
  summary: "What's the Idea",
  messages: exampleMessages,
};

export const exampleChats: ChatObj[] = [
  {
    id: "0",
    title: "The Idea",
    summary: "What's the Idea",
    messages: exampleMessages,
  },
  {
    id: "1",
    title: "The Meaning",
    summary: "What's the meaning?",
    messages: exampleMessages,
  },
];
