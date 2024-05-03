import { createContext } from 'react';
import { FileObj, exampleFile } from '../../../resource/file/main';

export enum HorizonVariant {
  MIX = 'MIX',
  SONG = 'SONG',
  BAR = 'BAR',
  IDEA = 'IDEA',
  CUSTOM = 'CUSTOM',
}

export interface HorizonObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  time: string;
  thumbnail: FileObj;
  variant: string;
}

export const HorizonContext = createContext<HorizonObj>({} as HorizonObj);

export const exampleHorizon: HorizonObj = {
  id: '0',
  userId: '0',
  title: 'Horizon Example',
  description: 'Horizon Description',
  time: new Date().toISOString(),
  thumbnail: exampleFile,
  variant: HorizonVariant.CUSTOM,
};

export const exampleHorizons: HorizonObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: HorizonVariant.CUSTOM,
  },
  {
    id: '1',
    userId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: HorizonVariant.CUSTOM,
  },
];
