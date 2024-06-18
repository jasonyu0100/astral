import { createContext } from 'react';
import { ModelInterface } from '../../main';

export enum UrlElemVariant {
  YOUTUBE = 'YOUTUBE',
  SPOTIFY = 'SPOTIFY',
}

export interface UrlElem {
  id: string;
  url: string;
  title: string;
  variant: string;
}

export const urlElemGql = `
type UrlElem {
  id: String!
  url: String
  title: String
  variant: String
}

type UrlElemInput {
  id: String!
  url: String
  title: String
  variant: String
}
`;

export const ContextForUrlElem = createContext<UrlElem>({} as UrlElem);

export const exampleUrlElem: UrlElem = {
  id: '0',
  title: 'passion.png',
  url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
  variant: UrlElemVariant.YOUTUBE,
};

export const exampleUrlElems: UrlElem[] = [
  {
    id: '0',
    title: 'passion.png',
    url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
    variant: UrlElemVariant.YOUTUBE,
  },
  {
    id: '0',
    title: 'passion.png',
    url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
    variant: UrlElemVariant.YOUTUBE,
  },
  {
    id: '0',
    title: 'passion.png',
    url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
    variant: UrlElemVariant.YOUTUBE,
  },
];

export const urlElemModel: ModelInterface<UrlElem> = {
  name: 'link',
  example: exampleUrlElem,
  examples: exampleUrlElems,
  gql: urlElemGql,
  parentKey: '',
  children: [],
};
