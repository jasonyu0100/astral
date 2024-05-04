import { FileObj, exampleFile } from '../../resource/file/main';
import { LogObj } from '@/(types)/model/resource/log/main';
import { NoteObj } from '@/(types)/model/resource/note/main';
import { createContext } from 'react';
import { LinkObj } from '../../resource/link/main';

export enum MomentVariant {
  FILE = 'FILE',
  LOG = 'LOG',
  NOTE = 'NOTE',
  LINK = 'LINK',
}

export interface MomentObj {
  id: string;
  chapterId: string;
  spaceId: string;
  userId: string;
  time: string;
  title: string;
  description: string;
  variant: string;
  file?: FileObj;
  log?: LogObj;
  link?: LinkObj;
  note?: NoteObj;
}

export const exampleMoment: MomentObj = {
  id: '0',
  time: new Date('2023-12-19').toISOString(),
  title: 'Moment Title 0',
  description: 'Moment Description Example',
  file: exampleFile,
  spaceId: '0',
  userId: '0',
  chapterId: '0',
  variant: MomentVariant.FILE,
};

export const MomentContext = createContext<MomentObj>({} as MomentObj);

export const exampleMoments: MomentObj[] = [
  {
    id: '0',
    time: new Date('2023-12-19').toISOString(),
    title: 'Moment Title 0',
    description: 'Moment Description Example',
    file: exampleFile,
    spaceId: '0',
    userId: '0',
    chapterId: '0',
    variant: MomentVariant.FILE,
  },
  {
    id: '1',
    time: new Date('2023-12-19').toISOString(),
    title: 'Moment Title 1',
    description: 'Moment Description Example',
    file: exampleFile,
    spaceId: '0',
    userId: '0',
    chapterId: '0',
    variant: MomentVariant.FILE,
  },
];
