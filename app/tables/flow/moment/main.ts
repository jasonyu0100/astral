import { FileObj, exampleFile } from '../../file/main';
import { CommentObj, exampleComments } from './comment/main';

export enum MomentVisibility {
  JOURNAL = 'JOURNAL',
  SOCIAL = 'SOCIAL',
  EXPLORE = 'EXPLORE',
  NONE = 'NONE',
}

export const momentSchema = `
type MomentObj {
  id: String!
  chapterId: String!
  spaceId: String!
  userId: String!
  time: String!
  title: String!
  log: String!
  file: FileObj
  visibility: String!
}`;
export interface MomentObj {
  id: string;
  chapterId: string;
  spaceId: string;
  userId: string;
  time: string;
  title: string;
  log: string;
  file: FileObj;
  visibility: string;
}

export const exampleMoment: MomentObj = {
  id: '0',
  time: new Date('2023-12-19').toISOString(),
  title: 'Moment Title 0',
  log: 'Moment Description Example',
  file: exampleFile,
  spaceId: '0',
  userId: '0',
  chapterId: '0',
  visibility: MomentVisibility.JOURNAL,
};

export const exampleMoments: MomentObj[] = [
  {
    id: '0',
    time: new Date('2023-12-19').toISOString(),
    title: 'Moment Title 0',
    log: 'Moment Description Example',
    file: exampleFile,
    spaceId: '0',
    userId: '0',
    chapterId: '0',
    visibility: MomentVisibility.JOURNAL,
  },
  {
    id: '1',
    time: new Date('2023-12-19').toISOString(),
    title: 'Moment Title 1',
    log: 'Moment Description Example',
    file: exampleFile,
    spaceId: '0',
    userId: '0',
    chapterId: '0',
    visibility: MomentVisibility.JOURNAL,
  },
];
