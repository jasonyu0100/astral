import {
  FileElem,
  exampleFileElem,
} from '@/(server)/(model)/elements/file/main';
import { LinkElem } from '@/(server)/(model)/elements/link/main';
import { CollectionResourceVariant } from '@/(server)/(model)/gallery/collection/resource/main';
import { NoteElem } from '@/(server)/(model)/elements/note/main';
import { createContext } from 'react';
import { ModelInterface } from '@/(server)/(model)/main';

export enum SceneIdeaVariant {
  FILE = 'FILE',
  LINK = 'LINK',
  NOTE = 'NOTE',
}
export interface SceneIdeaObj {
  id: string;
  userId: string;
  sceneId: string;
  title: string;
  description: string;
  stackId?: string;
  stackIdx?: number;
  x: number;
  y: number;
  width: number;
  height: number;
  scale: number;
  rotation: number;
  variant: string;
  fileElem?: FileElem;
  noteElem?: NoteElem;
  linkElem?: LinkElem;
  created: string;
}

export const sceneIdeaGql = `
type SceneIdeaObj {
  id: String!
  userId: String!
  sceneId: String!
  title: String!
  description: String!
  stackId: String
  stackIdx: Int!
  x: Int!
  y: Int!
  width: Int!
  height: Int!
  scale: Float!
  rotation: Int!
  variant: String!
  fileElem: FileElem
  noteElem: NoteElem
  linkElem: LinkElem
  created: String!
}
`;

export const ContextForSceneIdeaObj = createContext<SceneIdeaObj>(
  {} as SceneIdeaObj,
);

export const exampleSceneIdea: SceneIdeaObj = {
  id: '0',
  userId: '0',
  sceneId: '0',
  title: 'Star 1',
  description: 'Twinkle twinkle little star',
  stackId: '0',
  stackIdx: 0,
  x: 120,
  y: 120,
  width: 100,
  height: 100,
  scale: 1,
  rotation: 0,
  fileElem: exampleFileElem,
  variant: CollectionResourceVariant.FILE,
  created: new Date().toISOString(),
};

export const exampleSceneIdeas: SceneIdeaObj[] = [
  {
    id: '0',
    userId: '0',
    sceneId: '0',
    title: 'Star 0',
    description: 'Twinkle twinkle little star',
    stackId: '0',
    stackIdx: 0,
    x: 120,
    y: 120,
    width: 100,
    height: 100,
    scale: 1,
    rotation: 0,
    fileElem: exampleFileElem,
    variant: CollectionResourceVariant.FILE,
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    sceneId: '0',
    title: 'Star 1',
    description: 'Twinkle twinkle little star',
    stackId: '0',
    stackIdx: 0,
    x: 240,
    y: 120,
    width: 100,
    height: 100,
    scale: 1,
    rotation: 0,
    fileElem: exampleFileElem,
    variant: CollectionResourceVariant.FILE,
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    sceneId: '0',
    title: 'Star 2',
    description: 'Twinkle twinkle little star',
    stackId: '0',
    stackIdx: 0,
    x: 360,
    y: 120,
    width: 100,
    height: 100,
    scale: 1,
    rotation: 0,
    fileElem: exampleFileElem,
    variant: CollectionResourceVariant.FILE,
    created: new Date().toISOString(),
  },
];

export const sceneIdeaModel: ModelInterface<SceneIdeaObj> = {
  name: 'scene',
  gql: sceneIdeaGql,
  example: exampleSceneIdea,
  examples: exampleSceneIdeas,
  parentKey: 'sceneId',
  children: ['link'],
};
