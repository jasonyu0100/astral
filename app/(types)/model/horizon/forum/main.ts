import { createContext } from 'react';
import { FileObj, exampleFile } from '../../resource/file/main';

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
  thumbnail: exampleFile,
  variant: HorizonVariant.CUSTOM,
};

export const exampleHorizons: FieldObj[] = [
  {
    id: '0',
    horizonId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: HorizonVariant.CUSTOM,
  },
  {
    id: '1',
    horizonId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: HorizonVariant.CUSTOM,
  },
];
