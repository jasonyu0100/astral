import { createContext } from "react";

export enum ScoreElemVariant {
  MELODY = 'MELODY',
  BEAT = 'BEAT',
  RHYTHM = 'RHYTHM',
}

export interface ScoreElem {
  id: string;
  title: string;
  variant: string;
}

export const scoreElemGql = `
type ScoreElem {
  id: String!
  title: String
  variant: String
}

input ScoreElemInput {
  id: String!
  title: String
  variant: String
}
`;

export const ScoreElemContext = createContext<ScoreElem>({} as ScoreElem);

export const exampleNoteElem: ScoreElem = {
  id: '0',
  title: 'Example Sticky',
  variant: ScoreElemVariant.MELODY,
};

export const exampleNoteElems: ScoreElem[] = [
  {
    id: '0',
    title: 'Example Sticky',
    variant: ScoreElemVariant.MELODY,
  },
  {
    id: '0',
    title: 'Example Sticky',
    variant: ScoreElemVariant.MELODY,
  },
  {
    id: '0',
    title: 'Example Sticky',
    variant: ScoreElemVariant.MELODY,
  },
];
