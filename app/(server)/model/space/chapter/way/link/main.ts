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

export const logLinkGql = `
type LogLinkObj {
  id: String!
  logId: String!
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

export const ContextForLogLinkObj = createContext<WayLinkObj>({} as WayLinkObj);

export const exampleLogLink: WayLinkObj = {
  id: '0',
  wayId: '0',
  userId: '0',
  title: 'Log Link Example',
  description: 'Log Link Description',
  variant: 'file',
  fileElem: exampleFileElem,
  created: new Date().toISOString(),
  fromIdea: false,
};

export const exampleLogLinks: WayLinkObj[] = [
  {
    id: '0',
    wayId: '0',
    userId: '0',
    title: 'Log Link Example',
    description: 'Log Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
    fromIdea: false,
  },
  {
    id: '0',
    wayId: '0',
    userId: '0',
    title: 'Log Link Example',
    description: 'Log Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
    fromIdea: false,
  },
  {
    id: '0',
    wayId: '0',
    userId: '0',
    title: 'Log Link Example',
    description: 'Log Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
    fromIdea: false,
  },
];

export const logLinkModel: ModelInterface<WayLinkObj> = {
  name: 'link',
  gql: logLinkGql,
  example: exampleLogLink,
  examples: exampleLogLinks,
  parentKey: 'logId',
  children: [],
};
