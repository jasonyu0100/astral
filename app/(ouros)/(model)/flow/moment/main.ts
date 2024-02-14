import { FileObj, exampleFile } from '../../resource/file/main';
import { LogObj } from '@/(ouros)/(model)/resource/log/main';
import { NoteObj } from '@/(ouros)/(model)/resource/note/main';

export enum MomentVisibility {
  JOURNAL = 'JOURNAL',
  SOCIAL = 'SOCIAL',
  EXPLORE = 'EXPLORE',
  NONE = 'NONE',
}

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
  visibility: string;
  variant: string;
  file?: FileObj;
  log?: LogObj;
  sticky?: NoteObj;
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
  visibility: MomentVisibility.JOURNAL,
  variant: MomentVariant.FILE,
};

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
    visibility: MomentVisibility.JOURNAL,
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
    visibility: MomentVisibility.JOURNAL,
    variant: MomentVariant.FILE,
  },
];
