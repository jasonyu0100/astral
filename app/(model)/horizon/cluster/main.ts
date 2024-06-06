import { createContext } from 'react';

export interface HorizonClusterObj {
  id: string;
  horizonId: string;
  parentCluster?: string;
  title: string;
  description: string;
  time: string;
}

export const horizonClusterGql = `
type HorizonClusterObj {
  id: String!
  horizonId: String!
  parentCluster: String
  title: String!
  description: String!
  time: String!
}
`;

export const HorizonClusterContext = createContext<HorizonClusterObj>(
  {} as HorizonClusterObj,
);

export const exampleHorizonCluster: HorizonClusterObj = {
  id: '0',
  horizonId: '0',
  parentCluster: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const exampleHorizonClusters: HorizonClusterObj[] = [
  {
    id: '0',
    horizonId: '0',
    parentCluster: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    parentCluster: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '3',
    horizonId: '0',
    parentCluster: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
