import { createContext } from 'react';

export interface HorizonUpdateObj {
  id: string;
  horizonId: string;
  userId: string;
  title: string;
  description: string;
  created: string;
}

export const horizonUpdateGql = `
type HorizonUpdateObj {
  id: String!
  horizonId: String!
  userId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForHorizonUpdateObj = createContext<HorizonUpdateObj>(
  {} as HorizonUpdateObj,
);

export const exampleHorizonUpdate: HorizonUpdateObj = {
  id: '0',
  horizonId: '0',
  userId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleHorizonUpdates: HorizonUpdateObj[] = [
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Arc Description',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Arc Description',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    horizonId: '0',
    userId: '0',
    title: 'Work from creativity',
    description: 'Arc Description',
    created: new Date().toISOString(),
  },
];
