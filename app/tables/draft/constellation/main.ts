export enum ConstellationVariant {
  VISUAL = 'VISUAL',
  AUDIO = 'AUDIO',
  MEMO = 'MEMO',
  LINK = 'LINK',
}

export interface ConstellationObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  variant: string;
}

export const exampleConstellation: ConstellationObj = {
  id: '0',
  chapterId: '0',
  title: 'Idea Constellation',
  description: 'Constellation Description',
  variant: ConstellationVariant.VISUAL,
};

export const exampleConstellations: ConstellationObj[] = [
  {
    id: '0',
    chapterId: '0',
    title: 'Idea Constellation 1',
    description: 'Constellation Description',
    variant: ConstellationVariant.VISUAL,
  },
  {
    id: '1',
    chapterId: '0',
    title: 'Idea Constellation 2',
    description: 'Constellation Description',
    variant: ConstellationVariant.VISUAL,
  },
  {
    id: '2',
    chapterId: '0',
    title: 'Idea Constellation 3',
    description: 'Constellation Description',
    variant: ConstellationVariant.VISUAL,
  },
];
