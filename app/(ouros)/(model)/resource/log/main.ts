import { createContext } from "react";

export enum LogVariant {
  VIDEO = 'VIDEO',
  SCREEN = 'SCREEN',
  AUDIO = 'AUDIO',
}

export interface LogObj {
  id: string;
  variant: string;
}

export const LogContext = createContext<LogObj>({} as LogObj);

export const exampleLog: LogObj = {
  id: '0',
  variant: LogVariant.SCREEN,
};

export const exampleLogs: LogObj[] = [
  {
    id: '0',
    variant: LogVariant.SCREEN,
  },
];
