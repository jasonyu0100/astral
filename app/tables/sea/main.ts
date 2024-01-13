import { exampleJourneys } from "./journey/main";

export interface SeaObj {
  id: string;
  journeyIds: string[];
}

export const seaSchema = `
type SeaObj {
  id: String!
}`;

export const exampleSea: SeaObj = {
  id: "0",
  journeyIds: exampleJourneys.map((journey) => journey.id),
};

export const exampleSeas: SeaObj[] = [
  {
    id: "0",
    journeyIds: exampleJourneys.map((journey) => journey.id),
  },
  {
    id: "1",
    journeyIds: exampleJourneys.map((journey) => journey.id),
  },
];
