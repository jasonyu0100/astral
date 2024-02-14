import { createContext } from "react";

export enum ScoreVariant {
  MELODY = 'MELODY',
  BEAT = 'BEAT',
  RHYTHM = 'RHYTHM',
}

export interface ScoreObj {
  id: string;
  title: string;
  variant: string;
}

export const ScoreContext = createContext<ScoreObj>({} as ScoreObj);

export const exampleNote: ScoreObj = {
  id: '0',
  title: 'Example Sticky',
  variant: ScoreVariant.MELODY,
};

export const exampleNotes: ScoreObj[] = [
  {
    id: '0',
    title: 'Example Sticky',
    variant: ScoreVariant.MELODY,
  },
  {
    id: '0',
    title: 'Example Sticky',
    variant: ScoreVariant.MELODY,
  },
  {
    id: '0',
    title: 'Example Sticky',
    variant: ScoreVariant.MELODY,
  },
];
