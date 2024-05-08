import { FileObj, exampleFile } from '../resource/file/main';
import { createContext } from 'react';
import { LinkObj } from '../resource/link/main';
import { LogObj } from '../resource/log/main';
import { NoteObj } from '../resource/note/main';

export enum PostVariant {
  FILE = 'FILE',
  LOG = 'LOG',
  NOTE = 'NOTE',
  LINK = 'LINK',
}

export interface PostObj {
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

export const PostContext = createContext<PostObj>({} as PostObj);

export const examplePost: PostObj = {
  id: '0',
  time: new Date('2023-12-19').toISOString(),
  title: 'Moment Title 0',
  description: 'Moment Description Example',
  file: exampleFile,
  spaceId: '0',
  userId: '0',
  chapterId: '0',
  variant: PostVariant.FILE,
};

export const examplePosts: PostObj[] = [
  {
    id: '0',
    time: new Date('2023-12-19').toISOString(),
    title: 'Moment Title 0',
    description: 'Moment Description Example',
    file: exampleFile,
    spaceId: '0',
    userId: '0',
    chapterId: '0',
    variant: PostVariant.FILE,
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
    variant: PostVariant.FILE,
  },
];
