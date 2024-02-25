import { createContext } from "react";

export interface JourneyObj {
  id: string;
  chapterId: string;
}

export const exampleJourney = {
  id: '0',
  chapterId: '0',
};

export const JourneyContext = createContext<JourneyObj>({} as JourneyObj);

export const exampleJourneys = [
  {
    id: '0',
    chapterId: '0',
  },
  {
    id: '1',
    chapterId: '0',
  },
];
