import { FileObj, exampleFile } from '@/(lgx)/internal/model/resource/file/main';
import { LinkObj } from '@/(lgx)/internal/model/resource/link/main';
import { LogObj } from '@/(lgx)/internal/model/resource/log/main';
import { ResourceVariant } from '@/(lgx)/internal/model/resource/main';
import { NoteObj } from '@/(lgx)/internal/model/resource/note/main';
import { ScoreObj } from '@/(lgx)/internal/model/resource/score/main';
import { createContext } from 'react';

export enum StarVariant {
  FILE = 'FILE',
  LOG = 'LOG',
  LINK = 'LINK', 
  NOTE = 'NOTE',
  SCORE = 'SCORE',
}
export interface StarObj {
  id: string;
  constellationId: string;
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

export const StarContext = createContext<StarObj>({} as StarObj);

export type StarTemplateObj = Omit<StarObj, 'id' | 'constellationId'>;

export const exampleStar: StarObj = {
  id: '0',
  constellationId: '0',
  title: 'Star 1',
  description: "Twinkle twinkle little star",
  x: 120,
  y: 120,
  file: exampleFile,
  variant: ResourceVariant.FILE,
};

export const exampleStars: StarObj[] = [
  {
    id: '0',
    constellationId: '0',
    title: 'Star 0',
    description: "Twinkle twinkle little star",
    x: 120,
    y: 120,
    file: exampleFile,
    variant: ResourceVariant.FILE,
  },
  {
    id: '1',
    constellationId: '0',
    title: 'Star 1',
    description: "Twinkle twinkle little star",
    x: 240,
    y: 120,
    file: exampleFile,
    variant: ResourceVariant.FILE,
  },
  {
    id: '2',
    constellationId: '0',
    title: 'Star 2',
    description: "Twinkle twinkle little star",
    x: 360,
    y: 120,
    file: exampleFile,
    variant: ResourceVariant.FILE,
  },
];
