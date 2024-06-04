import { FileObj, exampleFile } from '@/(model)/media/resource/file/main';
import { LinkObj } from '@/(model)/media/resource/link/main';
import { LogObj } from '@/(model)/media/resource/log/main';
import { ResourceVariant } from '@/(model)/media/resource/main';
import { NoteObj } from '@/(model)/media/resource/note/main';
import { ScoreObj } from '@/(model)/media/resource/score/main';
import { createContext } from 'react';

export enum IdeaVariant {
  FILE = 'FILE',
  LOG = 'LOG',
  LINK = 'LINK', 
  NOTE = 'NOTE',
  SCORE = 'SCORE',
}
export interface IdeaObj {
  id: string;
  partId: string;
  title: string;
  description: string;
  x: number;
  y: number;
  variant: string;
  file?: FileObj;
  log?: LogObj;
  note?: NoteObj;
  link?: LinkObj;
  score?: ScoreObj;
}

export const IdeaContext = createContext<IdeaObj>({} as IdeaObj);

export type IdeaTemplateObj = Omit<IdeaObj, 'id' | 'partId'>;

export const exampleIdea: IdeaObj = {
  id: '0',
  partId: '0',
  title: 'Star 1',
  description: "Twinkle twinkle little star",
  x: 120,
  y: 120,
  file: exampleFile,
  variant: ResourceVariant.FILE,
};

export const exampleIdeas: IdeaObj[] = [
  {
    id: '0',
    partId: '0',
    title: 'Star 0',
    description: "Twinkle twinkle little star",
    x: 120,
    y: 120,
    file: exampleFile,
    variant: ResourceVariant.FILE,
  },
  {
    id: '1',
    partId: '0',
    title: 'Star 1',
    description: "Twinkle twinkle little star",
    x: 240,
    y: 120,
    file: exampleFile,
    variant: ResourceVariant.FILE,
  },
  {
    id: '2',
    partId: '0',
    title: 'Star 2',
    description: "Twinkle twinkle little star",
    x: 360,
    y: 120,
    file: exampleFile,
    variant: ResourceVariant.FILE,
  },
];
