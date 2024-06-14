import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface HorizonClusterObj {
  id: string;
  horizonId: string;
  parentCluster?: string;
  title: string;
  description: string;
  created: string;
}

export const horizonClusterGql = `
type HorizonClusterObj {
  id: String!
  horizonId: String!
  parentCluster: String
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForHorizonClusterObj = createContext<HorizonClusterObj>(
  {} as HorizonClusterObj,
);

export const exampleHorizonCluster: HorizonClusterObj = {
  id: '0',
  horizonId: '0',
  parentCluster: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  created: new Date().toISOString(),
};

export const exampleHorizonClusters: HorizonClusterObj[] = [
  {
    id: '0',
    horizonId: '0',
    parentCluster: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    parentCluster: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
  {
    id: '3',
    horizonId: '0',
    parentCluster: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    created: new Date().toISOString(),
  },
];

export const horizonClusterModel: ModelInterface<HorizonClusterObj> = {
  name: 'cluster',
  gql: horizonClusterGql,
  parentKey: 'horizonId',
  example: exampleHorizonCluster,
  examples: exampleHorizonClusters,
  children: ['update', 'member'],
};
