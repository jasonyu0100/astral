export interface YouMessageObj {
  source: string;
  date: string;
  message: string;
}

export interface PartnerMessageObj {
  source: string;
  date: string;
  message: string;
}

export type StormMessageObj = YouMessageObj | PartnerMessageObj;

export const exampleYouMessage: YouMessageObj = {
  source: "You",
  date: new Date("2023-12-19").toISOString(),
  message: "Hello World",
};

export const examplePartnerMessage: PartnerMessageObj = {
  source: "gpt-4",
  date: new Date("2023-12-19").toISOString(),
  message: "Hello World",
};

export const exampleStormMessages: StormMessageObj[] = [
  exampleYouMessage,
  exampleYouMessage,
  exampleYouMessage,
  examplePartnerMessage,
];