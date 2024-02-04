import { FileObj, exampleFile } from '@/tables/file/main';
import { LoomObj } from '@/tables/resource/loom/main';
import { ResourceVariant } from '@/tables/resource/main';
import { NoteObj } from '@/tables/resource/note/main';

export enum StarVariant {
  FILE = 'FILE',
  LOOM = 'LOOM',
  STICKY = 'STICKY',
}
export interface StarObj {
  id: string;
  constellationId: string;
  name: string;
  x: number;
  y: number;
  file?: FileObj;
  loom?: LoomObj;
  sticky?: NoteObj;
  variant: string;
}

export const exampleStar: StarObj = {
  id: '0',
  constellationId: '0',
  name: 'Star 1',
  x: 120,
  y: 120,
  file: exampleFile,
  variant: ResourceVariant.FILE,
};

export const exampleStars: StarObj[] = [
  {
    id: '0',
    constellationId: '0',
    name: 'Star 0',
    x: 120,
    y: 120,
    file: exampleFile,
    variant: ResourceVariant.FILE,
  },
  {
    id: '1',
    constellationId: '0',
    name: 'Star 1',
    x: 240,
    y: 120,
    file: exampleFile,
    variant: ResourceVariant.FILE,
  },
  {
    id: '2',
    constellationId: '0',
    name: 'Star 2',
    x: 360,
    y: 120,
    file: exampleFile,
    variant: ResourceVariant.FILE,
  },
];
