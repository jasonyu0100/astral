import { JourneyObj, exampleJourneys } from "./journey/main";

export interface SeaObj {
  id: string;
  journeys: JourneyObj[];
}

export const exampleSea = {
  id: "0",
  journeys: exampleJourneys,
};

export const exampleSeas = [
  {
    id: "0",
    journeys: exampleJourneys,
  },
  {
    id: "1",
    journeys: exampleJourneys,
  },
];
