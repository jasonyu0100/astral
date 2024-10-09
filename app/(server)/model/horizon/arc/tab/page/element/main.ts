import { FileElem, exampleFileElem } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { UrlElem } from '@/(server)/model/elements/url/main';
import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export enum PageElementColumn {
  IDEAS = 'todo',
  IN_PROGRESS = 'in-progress',
  REVIEW = 'review',
  DONE = 'done',
}

export interface PageElementObj {
  id: string;
  idx: number;
  userId: string;
  pageId: string;
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

export const pageElementGql = `
type PageElementObj {
  id: String!
  idx: Int!
  userId: String!
  pageId: String!
  title: String!
  description: String!
  column: String!
  hidden: Boolean!
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

export const ContextForPageElementObj = createContext<PageElementObj>(
  {} as PageElementObj,
);

export const examplePageElement: PageElementObj = {
  id: '0',
  idx: 0,
  userId: '0',
  pageId: '0',
  title: 'Star 1',
  description: 'Twinkle twinkle little star',
  column: PageElementColumn.IDEAS,
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

export const examplePageElements: PageElementObj[] = [
  {
    id: '0',
    idx: 0,
    userId: '0',
    pageId: '0',
    title: 'Star 0',
    description: 'Twinkle twinkle little star',
    column: PageElementColumn.IDEAS,
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
    pageId: '0',
    title: 'Star 1',
    description: 'Twinkle twinkle little star',
    column: PageElementColumn.IDEAS,
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
    pageId: '0',
    title: 'Star 2',
    description: 'Twinkle twinkle little star',
    column: PageElementColumn.IDEAS,
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

export const pageElementModel: ModelInterface<PageElementObj> = {
  name: 'element',
  gql: pageElementGql,
  example: examplePageElement,
  examples: examplePageElements,
  parentKey: 'pageId',
  children: [],
};
