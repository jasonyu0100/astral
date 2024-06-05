import { createContext } from 'react';

export interface HorizonPointObj {
  id: string;
  horizonId: string;
  title: string;
  description: string;
  time: string;
}

export const horizonPointGql = `
type HorizonPointObj {
  id: String!
  horizonId: String!
  title: String!
  description: String!
  time: String!
}
`

export const HorizonPointContext = createContext<HorizonPointObj>(
  {} as HorizonPointObj,
);

export const exampleHorizonPoint: HorizonPointObj = {
  id: '0',
  horizonId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const exampleHorizonPoints: HorizonPointObj[] = [
  {
    id: '0',
    horizonId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
