import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../elements/file/main';

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
  thumbnail: FileElem;
  variant: string;
}

export const horizonGql = `
type HorizonObj {
  id: String!
  userId: String!
  title: String!
  time: String!
  description: String!
  thumbnail: FileElem!
  variant: String!
}
  
input CreateHorizonObjInput {
	userId: String!
	title: String!
	time: String!
	description: String!
	variant: String!
  thumbnail: FileElemInput
}

input UpdateHorizonObjInput {
	id: String!
	userId: String
	title: String
	time: String
	description: String
	variant: String
  thumbnail: FileElemInput
}
`;

export const HorizonContext = createContext<HorizonObj>({} as HorizonObj);

export const exampleHorizon: HorizonObj = {
  id: '0',
  userId: '0',
  title: 'Horizon Example',
  description: 'Horizon Description',
  time: new Date().toISOString(),
  thumbnail: exampleFileElem,
  variant: HorizonVariant.CUSTOM,
};

export const exampleHorizons: HorizonObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    time: new Date().toISOString(),
    thumbnail: exampleFileElem,
    variant: HorizonVariant.CUSTOM,
  },
  {
    id: '1',
    userId: '0',
    title: 'Horizon Example',
    description: 'Horizon Description',
    time: new Date().toISOString(),
    thumbnail: exampleFileElem,
    variant: HorizonVariant.CUSTOM,
  },
];
