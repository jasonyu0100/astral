export interface MessageObj {
  source: string;
  time: string;
  message: string;
}

export const exampleMessage: MessageObj = {
  source: "You",
  time: new Date("2023-12-19").toISOString(),
  message: "Hello World",
};

export const examplePartnerMessage: MessageObj = {
  source: "gpt-4",
  time: new Date("2023-12-19").toISOString(),
  message: "Hello World",
};

export const exampleMessages: MessageObj[] = [
  exampleMessage,
  exampleMessage,
  exampleMessage,
  examplePartnerMessage,
];