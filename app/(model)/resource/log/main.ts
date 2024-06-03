// TBD

import { createContext } from 'react';

export enum LogVariant {
  VIDEO = 'VIDEO',
  SCREEN = 'SCREEN',
  AUDIO = 'AUDIO',
}

export interface LogObj {
  id: string;
  loomId: string;
  height: number;
  width: number;
  sharedUrl: string;
  embedUrl: string;
  variant: string;
  providerUrl: string;
}

export const LogObjContext = createContext<LogObj>({} as LogObj);

export const exampleLog: LogObj = {
  id: '0',
  loomId: '0',
  height: 0,
  width: 0,
  sharedUrl: '',
  embedUrl: '',
  providerUrl: '',
  variant: LogVariant.SCREEN,
};

export const exampleLogs: LogObj[] = [
  {
    id: '0',
    loomId: '0',
    height: 0,
    width: 0,
    sharedUrl: '',
    embedUrl: '',
    providerUrl: '',
    variant: LogVariant.SCREEN,
  },
];
