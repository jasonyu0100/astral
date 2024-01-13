import { MessageObj, exampleMessages } from "./message/main";

export interface ChatObj {
  id: string;
  title: string;
  summary: string;
  time: string;
  messages: MessageObj[];
}

export const chatSchema = `
type ChatObj {
  id: String!
  title: String!
  summary: String!
  time: String!
  messages: [MessageObj!]!
}
`;

export const exampleChat: ChatObj = {
  id: "0",
  title: "The Idea",
  summary: "What's the Idea",
  time: new Date("2023-12-19").toISOString(),
  messages: exampleMessages,
};

export const exampleChats: ChatObj[] = [
  {
    id: "0",
    title: "The Idea",
    summary: "What's the Idea",
    time: new Date("2023-12-19").toISOString(),
    messages: exampleMessages,
  },
  {
    id: "1",
    title: "The Meaning",
    summary: "What's the meaning?",
    time: new Date("2023-12-19").toISOString(),
    messages: exampleMessages,
  },
];
