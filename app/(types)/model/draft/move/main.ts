import { createContext } from 'react';
import { FileObj, exampleFile } from '../../resource/file/main';

export enum MoveVariant {
  ALBUM = 'ALBUM',
  FILM = 'FILM',
  ACT = 'ACT',
  PROJECT = 'PROJECT',
  CUSTOM = 'CUSTOM',
}

export interface MoveObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  time: string;
  thumbnail: FileObj;
  variant: string;
}

export const MoveContext = createContext<MoveObj>({} as MoveObj);

export const exampleMove: MoveObj = {
  id: '0',
  userId: '0',
  title: 'Move Example',
  description: 'Move Description',
  time: new Date().toISOString(),
  thumbnail: exampleFile,
  variant: MoveVariant.CUSTOM,
};

export const exampleMoves: MoveObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Move Example',
    description: 'Move Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: MoveVariant.CUSTOM,
  },
  {
    id: '1',
    userId: '0',
    title: 'Move Example',
    description: 'Move Description',
    time: new Date().toISOString(),
    thumbnail: exampleFile,
    variant: MoveVariant.CUSTOM,
  },
];
