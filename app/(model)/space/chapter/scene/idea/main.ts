import { FileObj, exampleFile } from '@/(model)/concept/file/main';
import { LinkObj } from '@/(model)/concept/link/main';
import { LogObj } from '@/(model)/concept/log/main';
import { CollectionResourceVariant } from '@/(model)/media/resource/main';
import { NoteObj } from '@/(model)/concept/note/main';
import { ScoreObj } from '@/(model)/concept/score/main';
import { createContext } from 'react';

export enum SceneIdeaVariant {
  FILE = 'FILE',
  LOG = 'LOG',
  LINK = 'LINK', 
  NOTE = 'NOTE',
  SCORE = 'SCORE',
}
export interface SceneIdeaObj {
  id: string;
  sceneId: string;
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

export const SceneIdeaContext = createContext<SceneIdeaObj>({} as SceneIdeaObj);

export const exampleSceneIdea: SceneIdeaObj = {
  id: '0',
  sceneId: '0',
  title: 'Star 1',
  description: "Twinkle twinkle little star",
  x: 120,
  y: 120,
  file: exampleFile,
  variant: CollectionResourceVariant.FILE,
};

export const exampleSceneIdeas: SceneIdeaObj[] = [
  {
    id: '0',
    sceneId: '0',
    title: 'Star 0',
    description: "Twinkle twinkle little star",
    x: 120,
    y: 120,
    file: exampleFile,
    variant: CollectionResourceVariant.FILE,
  },
  {
    id: '1',
    sceneId: '0',
    title: 'Star 1',
    description: "Twinkle twinkle little star",
    x: 240,
    y: 120,
    file: exampleFile,
    variant: CollectionResourceVariant.FILE,
  },
  {
    id: '2',
    sceneId: '0',
    title: 'Star 2',
    description: "Twinkle twinkle little star",
    x: 360,
    y: 120,
    file: exampleFile,
    variant: CollectionResourceVariant.FILE,
  },
];
