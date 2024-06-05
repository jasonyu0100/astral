import { createContext } from 'react';

export interface ClusterUpdateObj {
  id: string;
  clusterId: string;
  title: string;
  description: string;
  time: string;
}

export const ClusterUpdateContext = createContext<ClusterUpdateObj>(
  {} as ClusterUpdateObj,
);

export const exampleClusterUpdate: ClusterUpdateObj = {
  id: '0',
  clusterId: '0',
  title: 'Work from creativity',
  description: 'Arc Description',
  time: new Date().toISOString(),
};

export const exampleClusterUpdates: ClusterUpdateObj[] = [
  {
    id: '0',
    clusterId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    clusterId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
  {
    id: '2',
    clusterId: '0',
    title: 'Work from creativity',
    description: 'Verse Description',
    time: new Date().toISOString(),
  },
];
