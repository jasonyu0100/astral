import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { UrlElem } from '@/(server)/model/elements/url/main';
import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface LogLinkObj {
  id: string;
  logId: string;
  userId: string;
  logStatus: string;
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
  logStatus: String!
  title: String!
  description: String!
  variant: String!
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
  created: String!
}
`;

export const ContextForLogLinkObj = createContext<LogLinkObj>({} as LogLinkObj);

export const exampleLogLink: LogLinkObj = {
  id: '0',
  logId: '0',
  userId: '0',
  logStatus: 'pending',
  title: 'Log Link Example',
  description: 'Log Link Description',
  variant: 'file',
  fileElem: exampleFileElem,
  created: new Date().toISOString(),
};

export const exampleLogLinks: LogLinkObj[] = [
  {
    id: '0',
    logId: '0',
    userId: '0',
    logStatus: 'pending',
    title: 'Log Link Example',
    description: 'Log Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
  },
  {
    id: '0',
    logId: '0',
    userId: '0',
    logStatus: 'pending',
    title: 'Log Link Example',
    description: 'Log Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
  },
  {
    id: '0',
    logId: '0',
    userId: '0',
    logStatus: 'pending',
    title: 'Log Link Example',
    description: 'Log Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
  },
];

export const logLinkModel: ModelInterface<LogLinkObj> = {
  name: 'link',
  gql: logLinkGql,
  example: exampleLogLink,
  examples: exampleLogLinks,
  parentKey: 'logId',
  children: [],
};
