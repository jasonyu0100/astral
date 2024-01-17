export interface ChatObj {
  id: string;
  stormId: string;
  title: string;
  summary: string;
  time: string;
}

export const chatSchema = `
type ChatObj {
  id: String!
  stormId: String!
  title: String!
  summary: String!
  time: String!
}
`;

export const exampleChat: ChatObj = {
  id: "0",
  stormId: "0",
  title: "The Idea",
  summary: "What's the Idea",
  time: new Date("2023-12-19").toISOString(),
};

export const exampleChats: ChatObj[] = [
  {
    id: "0",
    stormId: "0",
    title: "The Idea",
    summary: "What's the Idea",
    time: new Date("2023-12-19").toISOString(),
  },
  {
    id: "1",
    stormId: "0",
    title: "The Meaning",
    summary: "What's the meaning?",
    time: new Date("2023-12-19").toISOString(),
  },
];
