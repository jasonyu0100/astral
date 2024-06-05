// TBD

import { createContext } from 'react';

export enum LogElemVariant {
  VIDEO = 'VIDEO',
  SCREEN = 'SCREEN',
  AUDIO = 'AUDIO',
}

export interface LogElem {
  id: string;
  loomId: string;
  height: number;
  width: number;
  sharedUrl: string;
  embedUrl: string;
  variant: string;
  providerUrl: string;
}

export const logElemGql = `
type LogElem {
  id: String!
  loomId: String
  height: Int
  width: Int
  sharedUrl: String
  embedUrl: String
  variant: String
  providerUrl: String
}
  
input LogElemInput {
  id: String!
  loomId: String
  height: Int
  width: Int
  sharedUrl: String
  embedUrl: String
  variant: String
  providerUrl: String
}
`;

export const LogElemContext = createContext<LogElem>({} as LogElem);

export const exampleLogElem: LogElem = {
  id: '0',
  loomId: '0',
  height: 0,
  width: 0,
  sharedUrl: '',
  embedUrl: '',
  providerUrl: '',
  variant: LogElemVariant.SCREEN,
};

export const exampleLogElems: LogElem[] = [
  {
    id: '0',
    loomId: '0',
    height: 0,
    width: 0,
    sharedUrl: '',
    embedUrl: '',
    providerUrl: '',
    variant: LogElemVariant.SCREEN,
  },
];
