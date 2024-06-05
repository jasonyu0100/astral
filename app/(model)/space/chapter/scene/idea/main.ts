import { FileElem, exampleFileElem } from '@/(model)/elements/file/main';
import { LinkElem } from '@/(model)/elements/link/main';
import { LogElem } from '@/(model)/elements/log/main';
import { CollectionResourceVariant } from '@/(model)/archive/resource/main';
import { NoteElem } from '@/(model)/elements/note/main';
import { ScoreElem } from '@/(model)/elements/score/main';
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
  file?: FileElem;
  log?: LogElem;
  note?: NoteElem;
  link?: LinkElem;
  score?: ScoreElem;
}

export const sceneIdeaGql = `
type SceneIdeaObj {
  id: String!
  sceneId: String!
  title: String!
  description: String!
  x: Int!
  y: Int!
  variant: String!
  file: FileElem
  log: LogElem
  note: NoteElem
  link: LinkElem
  score: ConceptScore
}  
`;

export const SceneIdeaContext = createContext<SceneIdeaObj>({} as SceneIdeaObj);

export const exampleSceneIdea: SceneIdeaObj = {
  id: '0',
  sceneId: '0',
  title: 'Star 1',
  description: 'Twinkle twinkle little star',
  x: 120,
  y: 120,
  file: exampleFileElem,
  variant: CollectionResourceVariant.FILE,
};

export const exampleSceneIdeas: SceneIdeaObj[] = [
  {
    id: '0',
    sceneId: '0',
    title: 'Star 0',
    description: 'Twinkle twinkle little star',
    x: 120,
    y: 120,
    file: exampleFileElem,
    variant: CollectionResourceVariant.FILE,
  },
  {
    id: '1',
    sceneId: '0',
    title: 'Star 1',
    description: 'Twinkle twinkle little star',
    x: 240,
    y: 120,
    file: exampleFileElem,
    variant: CollectionResourceVariant.FILE,
  },
  {
    id: '2',
    sceneId: '0',
    title: 'Star 2',
    description: 'Twinkle twinkle little star',
    x: 360,
    y: 120,
    file: exampleFileElem,
    variant: CollectionResourceVariant.FILE,
  },
];
