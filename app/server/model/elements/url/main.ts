import { createContext } from 'react';
import { ModelInterface } from '../../main';

export enum UrlElementVariant {
  YOUTUBE = 'YOUTUBE',
  SPOTIFY = 'SPOTIFY',
  WEBSITE = 'WEBSITE',
}

export interface UrlElement {
  id: string;
  url: string;
  title: string;
  variant: string;
}

export const urlElementGql = `
type UrlElement {
  id: String!
  url: String
  title: String
  variant: String
}
`;

export const ContextForUrlElement = createContext<UrlElement>({} as UrlElement);

export const exampleUrlElement: UrlElement = {
  id: '0',
  title: 'passion.png',
  url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
  variant: UrlElementVariant.YOUTUBE,
};

export const exampleUrlElements: UrlElement[] = [
  {
    id: '0',
    title: 'passion.png',
    url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
    variant: UrlElementVariant.YOUTUBE,
  },
  {
    id: '0',
    title: 'passion.png',
    url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
    variant: UrlElementVariant.YOUTUBE,
  },
  {
    id: '0',
    title: 'passion.png',
    url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
    variant: UrlElementVariant.YOUTUBE,
  },
];

export const urlElementModel: ModelInterface<UrlElement> = {
  name: 'link',
  example: exampleUrlElement,
  examples: exampleUrlElements,
  gql: urlElementGql,
  parentKey: '',
  children: [],
};
