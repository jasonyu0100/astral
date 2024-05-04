import { createContext } from 'react';

export enum HorizonVariant {
  MIX = 'MIX',
  SONG = 'SONG',
  BAR = 'BAR',
  IDEA = 'IDEA',
  CUSTOM = 'CUSTOM',
}

export interface FieldObj {
  id: string;
  horizonId: string;
  spaceId?: string;
  title: string;
  description: string;
  time: string;
}

export const HorizonContext = createContext<FieldObj>({} as FieldObj);

export const exampleHorizon: FieldObj = {
  id: '0',
  horizonId: '0',
  title: 'Horizon Example',
  description: 'Horizon Description',
  time: new Date().toISOString(),
};

export const exampleHorizons: FieldObj[] = [
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
