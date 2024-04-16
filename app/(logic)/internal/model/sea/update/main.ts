import { LogObj } from '@/(logic)/internal/model/resource/log/main';
import { NoteObj } from '@/(logic)/internal/model/resource/note/main';
import { createContext } from 'react';
import { FileObj, exampleFile } from '../../resource/file/main';
import { LinkObj } from '../../resource/link/main';

export enum UpdateVariant {
  FILE = 'FILE',
  LOG = 'LOG',
  NOTE = 'NOTE',
  LINK = 'LINK',
}

export interface UpdateObj {
  id: string;
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

export const exampleUpdate: UpdateObj = {
  id: '0',
  time: new Date('2023-12-19').toISOString(),
  title: 'Moment Title 0',
  description: 'Moment Description Example',
  file: exampleFile,
  spaceId: '0',
  userId: '0',
  variant: UpdateVariant.FILE,
};

export const UpdateContext = createContext<UpdateObj>({} as UpdateObj);

export const exampleUpdates: UpdateObj[] = [
  {
    id: '0',
    time: new Date('2023-12-19').toISOString(),
    title: 'Moment Title 0',
    description: 'Moment Description Example',
    file: exampleFile,
    spaceId: '0',
    userId: '0',
    variant: UpdateVariant.FILE,
  },
  {
    id: '1',
    time: new Date('2023-12-19').toISOString(),
    title: 'Moment Title 1',
    description: 'Moment Description Example',
    file: exampleFile,
    spaceId: '0',
    userId: '0',
    variant: UpdateVariant.FILE,
  },
];
