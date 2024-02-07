export enum LinkVariant {
  WEBSITE = 'WEBSITE',
  YOUTUBE = 'YOUTUBE',
  SPOTIFY = 'SPOTIFY',
}

export interface LinkObj {
  id: string;
  url: string;
  title: string;
  variant: string;
}

export const exampleFile: LinkObj = {
  id: '0',
  title: 'passion.png',
  url: 'https://www.youtube.com/watch?v=AcsCP1C_Zd8',
  variant: LinkVariant.YOUTUBE,
};