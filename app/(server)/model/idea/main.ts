import { FileElem, exampleFileElem } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { UrlElem } from '@/(server)/model/elements/url/main';
import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export enum IdeaColumn {
  IDEAS = 'todo',
  IN_PROGRESS = 'in-progress',
  REVIEW = 'review',
  DONE = 'done',
}

export interface IdeaObj {
  id: string;
  idx: number;
  userId: string;
  sceneId?: string;
  pageId?: string;
  title: string;
  description: string;
  column: string;
  visible: boolean;
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

export const ideaGql = `
type IdeaObj {
  id: String!
  idx: Int!
  userId: String!
  sceneId: String
  pageId: String
  title: String!
  description: String!
  column: String!
  visibile: Boolean!
  x: Int!
  y: Int!
  width: Int!
  height: Int!
  scale: Float!
  rotation: Int!
  variant: String!
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
  created: String!
}
`;

export const ContextForIdeaObj = createContext<IdeaObj>({} as IdeaObj);

export const exampleIdea: IdeaObj = {
  id: '0',
  idx: 0,
  userId: '0',
  sceneId: '0',
  title: 'Star 1',
  description: 'Twinkle twinkle little star',
  column: IdeaColumn.IDEAS,
  visible: false,
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

export const exampleIdeas: IdeaObj[] = [
  {
    id: '0',
    idx: 0,
    userId: '0',
    sceneId: '0',
    title: 'Star 0',
    description: 'Twinkle twinkle little star',
    column: IdeaColumn.IDEAS,
    visible: false,
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
    idx: 1,
    userId: '0',
    sceneId: '0',
    title: 'Star 1',
    description: 'Twinkle twinkle little star',
    column: IdeaColumn.IDEAS,
    visible: false,
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
    idx: 2,
    userId: '0',
    sceneId: '0',
    title: 'Star 2',
    description: 'Twinkle twinkle little star',
    column: IdeaColumn.IDEAS,
    visible: false,
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

export const ideaModel: ModelInterface<IdeaObj> = {
  name: 'idea',
  gql: ideaGql,
  example: exampleIdea,
  examples: exampleIdeas,
  parentKey: 'sceneId',
  children: [],
};
