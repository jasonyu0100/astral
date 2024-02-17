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
  thumbnailHeight?: number;
  thumbnailWidth?: number;
  thumbnailUrl?: string;
  duration?: number;
  providerUrl: string;
  variant: string;
}

export const LogContext = createContext<LogObj>({} as LogObj);

export const exampleLog: LogObj = {
  id: '0',
  loomId: '0',
  height: 0,
  width: 0,
  sharedUrl: '',
  embedUrl: '',
  thumbnailHeight: 0,
  thumbnailWidth: 0,
  thumbnailUrl: '',
  duration: 0,
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
  thumbnailHeight: 0,
  thumbnailWidth: 0,
  thumbnailUrl: '',
  duration: 0,
  providerUrl: '',
    variant: LogVariant.SCREEN,
  },
];
