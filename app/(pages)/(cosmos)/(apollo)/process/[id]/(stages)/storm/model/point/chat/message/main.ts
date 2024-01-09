export interface YouMessageObj {
  source: string;
  time: string;
  message: string;
}

export interface PartnerMessageObj {
  source: string;
  time: string;
  message: string;
}

export type StormMessageObj = YouMessageObj | PartnerMessageObj;

export const exampleYouMessage: YouMessageObj = {
  source: "You",
  time: new Date("2023-12-19").toISOString(),
  message: "Hello World",
};

export const examplePartnerMessage: PartnerMessageObj = {
  source: "gpt-4",
  time: new Date("2023-12-19").toISOString(),
  message: "Hello World",
};

export const exampleStormMessages: StormMessageObj[] = [
  exampleYouMessage,
  exampleYouMessage,
  exampleYouMessage,
  examplePartnerMessage,
];