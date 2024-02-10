export enum LogVariant {
  VIDEO = 'VIDEO',
  SCREEN = 'SCREEN',
  AUDIO = 'AUDIO',
}

export interface LogObj {
  id: string;
  variant: string;
}

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
