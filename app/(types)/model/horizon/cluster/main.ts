import { createContext } from 'react';

export enum ClusterVariant {
  AGENT = 'AGENT',
  USER = 'USER',
  BAR = 'BAR',
  IDEA = 'IDEA',
  CUSTOM = 'CUSTOM',
}

export interface ClusterObj {
  id: string;
  horizonId: string;
  spaceId?: string;
  title: string;
  description: string;
  time: string;
}

export const HorizonContext = createContext<ClusterObj>({} as ClusterObj);

export const exampleHorizon: ClusterObj = {
  id: '0',
  horizonId: '0',
  title: 'Horizon Example',
  description: 'Horizon Description',
  time: new Date().toISOString(),
};

export const exampleHorizons: ClusterObj[] = [
  {
    id: '0',
    horizonId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    time: new Date().toISOString(),
  },
  {
    id: '1',
    horizonId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    time: new Date().toISOString(),
  },
];
