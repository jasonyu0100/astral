import { createContext } from 'react';
import { ModelInterface } from '../../main';

export enum LinkElemVariant {
  WEBSITE = 'WEBSITE',
  YOUTUBE = 'YOUTUBE',
  SPOTIFY = 'SPOTIFY',
}

export interface LinkElem {
  id: string;
  url: string;
  title: string;
  variant: string;
}

export const linkElemGql = `
type LinkElem {
  id: String!
  url: String
  title: String
  variant: String
}

type LinkElemInput {
  id: String!
  url: String
  title: String
  variant: String
}
`;

export const ContextForLinkElem = createContext<LinkElem>({} as LinkElem);

export const exampleLinkElem: LinkElem = {
  id: '0',
  title: 'passion.png',
  url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
  variant: LinkElemVariant.YOUTUBE,
};

export const exampleLinkElems: LinkElem[] = [
  {
    id: '0',
    title: 'passion.png',
    url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
    variant: LinkElemVariant.YOUTUBE,
  },
  {
    id: '0',
    title: 'passion.png',
    url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
    variant: LinkElemVariant.YOUTUBE,
  },
  {
    id: '0',
    title: 'passion.png',
    url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
    variant: LinkElemVariant.YOUTUBE,
  },
];

export const linkElemModel: ModelInterface<LinkElem> = {
  name: 'link',
  example: exampleLinkElem,
  examples: exampleLinkElems,
  gql: linkElemGql,
  parentKey: '',
  children: [],
}