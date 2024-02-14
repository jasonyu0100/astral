import { FileObj, exampleFile } from '@/(ouros)/(model)/resource/file/main';
import { LinkObj } from '@/(ouros)/(model)/resource/link/main';
import { LogObj } from '@/(ouros)/(model)/resource/log/main';
import { ResourceVariant } from '@/(ouros)/(model)/resource/main';
import { NoteObj } from '@/(ouros)/(model)/resource/note/main';

export enum StarVariant {
  FILE = 'FILE',
  LOG = 'LOG',
  LINK = 'LINK', 
  NOTE = 'NOTE',
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
}

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
