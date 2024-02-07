export enum LogVariant {
  SCREEN = 'SCREEN',
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

export const exampleLoom: LogObj = {
  id: '0',
  loomId: '0',
  height: 120,
  width: 120,
  sharedUrl: 'https://www.loom.com/share/0',
  embedUrl: 'https://www.loom.com/embed/0',
  thumbnailHeight: 120,
  thumbnailWidth: 120,
  thumbnailUrl: 'https://www.loom.com/thumbnail/0',
  duration: 0,
  providerUrl: 'https://www.loom.com',
  variant: LogVariant.SCREEN,
};

export const exampleLooms: LogObj[] = [
  {
    id: '0',
    loomId: '0',
    height: 120,
    width: 120,
    sharedUrl: 'https://www.loom.com/share/0',
    embedUrl: 'https://www.loom.com/embed/0',
    thumbnailHeight: 120,
    thumbnailWidth: 120,
    thumbnailUrl: 'https://www.loom.com/thumbnail/0',
    duration: 0,
    providerUrl: 'https://www.loom.com',
    variant: LogVariant.SCREEN,
  },
];
