import { createContext } from 'react';

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

export const LinkElemContext = createContext<LinkElem>({} as LinkElem);

export const exampleLinkElem: LinkElem = {
  id: '0',
  title: 'passion.png',
  url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
  variant: LinkElemVariant.YOUTUBE,
};
