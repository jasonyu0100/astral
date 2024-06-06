import { createContext } from 'react';

export interface HorizonArcObj {
  id: string;
  horizonId: string;
  userId: string;
  title: string;
  description: string;
  time: string;
}

export const horizonArcGql = `
type HorizonArcObj {
  id: String!
  horizonId: String!
  userId: String!
  title: String!
  description: String!
  time: String!
}
`;

export const HorizonArcContext = createContext<HorizonArcObj>(
  {} as HorizonArcObj,
);

export const exampleHorizonArc: HorizonArcObj = {
  id: '0',
  horizonId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const exampleHorizonArcs: HorizonArcObj[] = [
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '2',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
