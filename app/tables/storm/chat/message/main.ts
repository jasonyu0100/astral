export interface MessageObj {
  id: string;
  source: string;
  time: string;
  message: string;
}

export const messageSchema = `
type MessageObj {
  id: String!
  source: String!
  time: String!
  message: String!
}`;

export const exampleMessage: MessageObj = {
  id: "0",
  source: "You",
  time: new Date("2023-12-19").toISOString(),
  message: "Hello World",
};

export const examplePartnerMessage: MessageObj = {
  id: "1",
  source: "gpt-4",
  time: new Date("2023-12-19").toISOString(),
  message: "Hello World",
};

export const exampleMessages: MessageObj[] = [
  {
    id: "0",
    source: "You",
    time: new Date("2023-12-19").toISOString(),
    message: "Test Message",
  },
  {
    id: "1",
    source: "GPT-4",
    time: new Date("2023-12-19").toISOString(),
    message: "Hello World",
  },
  {
    id: "2",
    source: "You",
    time: new Date("2023-12-19").toISOString(),
    message: "Hello There",
  },
];
