import {
  FileElem,
  exampleFileElem,
} from '@/(server)/(model)/elements/file/main';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { TextElem } from '@/(server)/(model)/elements/text/main';
import { UrlElem } from '@/(server)/(model)/elements/url/main';
import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

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
  textElem?: TextElem;
  urlElem?: UrlElem;
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
  textElem: TextElem
  urlElem: urlElem
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
  variant: ElementVariant.FILE,
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
    variant: ElementVariant.FILE,
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
    variant: ElementVariant.FILE,
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
    variant: ElementVariant.FILE,
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
