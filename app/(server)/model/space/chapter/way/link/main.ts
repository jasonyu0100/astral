import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { UrlElem } from '@/(server)/model/elements/url/main';
import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface WayLinkObj {
  id: string;
  wayId: string;
  userId: string;
  fromIdea: boolean;
  ideaId?: string;
  chapterId?: string;
  spaceId?: string;
  sceneId?: string;
  title: string;
  description: string;
  variant: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
  created: string;
}

export const wayLinkGql = `
type WayLinkObj {
  id: String!
  wayId: String!
  userId: String!
  fromIdea: Boolean!
  ideaId: String
  chapterId: String
  spaceId: String
  sceneId: String
  title: String!
  description: String!
  variant: String!
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
  created: String!
}
`;

export const ContextForWayLinkObj = createContext<WayLinkObj>({} as WayLinkObj);

export const exampleWayLink: WayLinkObj = {
  id: '0',
  wayId: '0',
  userId: '0',
  title: 'Way Link Example',
  description: 'Way Link Description',
  variant: 'file',
  fileElem: exampleFileElem,
  created: new Date().toISOString(),
  fromIdea: false,
};

export const exampleWayLinks: WayLinkObj[] = [
  {
    id: '0',
    wayId: '0',
    userId: '0',
    title: 'Way Link Example',
    description: 'Way Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
    fromIdea: false,
  },
  {
    id: '0',
    wayId: '0',
    userId: '0',
    title: 'Way Link Example',
    description: 'Way Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
    fromIdea: false,
  },
  {
    id: '0',
    wayId: '0',
    userId: '0',
    title: 'Way Link Example',
    description: 'Way Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
    fromIdea: false,
  },
];

export const wayLinkModel: ModelInterface<WayLinkObj> = {
  name: 'link',
  gql: wayLinkGql,
  example: exampleWayLink,
  examples: exampleWayLinks,
  parentKey: 'wayId',
  children: [],
};
