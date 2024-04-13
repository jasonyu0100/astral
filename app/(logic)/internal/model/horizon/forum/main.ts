import { createContext } from 'react';
import { FileObj, exampleFile } from '../../resource/file/main';

export enum HorizonVariant {
  MIX = 'MIX',
  SONG = 'SONG',
  BAR = 'BAR',
  IDEA = 'IDEA',
  CUSTOM = 'CUSTOM',
}

export interface ForumObj {
  id: string;
  horizonId: string;
  spaceId?: string;
  title: string;
  description: string;
  time: string;
}

export const HorizonContext = createContext<ForumObj>({} as ForumObj);

export const exampleHorizon: ForumObj = {
  id: '0',
  horizonId: '0',
  title: 'Horizon Example',
  description: 'Horizon Description',
  time: new Date().toISOString(),
  thumbnail: exampleFile,
  variant: HorizonVariant.CUSTOM,
};

export const exampleHorizons: ForumObj[] = [
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
