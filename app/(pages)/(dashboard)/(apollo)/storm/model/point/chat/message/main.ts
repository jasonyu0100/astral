export interface YouMessageObj {
  source: string;
  date: Date;
  message: string;
}

export interface PartnerMessageObj {
  source: string;
  date: Date;
  message: string;
}

export type StormMessageObj = YouMessageObj | PartnerMessageObj;

export const exampleYouMessage: YouMessageObj = {
  source: "You",
  date: new Date("2023-12-19"),
  message: "Hello World",
};

export const examplePartnerMessage: PartnerMessageObj = {
  source: "gpt-4",
  date: new Date("2023-12-19"),
  message: "Hello World",
};

export const exampleStormMessages: StormMessageObj[] = [
  exampleYouMessage,
  exampleYouMessage,
  exampleYouMessage,
  examplePartnerMessage,
];