export enum ConstellationType {
  VISUAL = 'VISUAL',
  SOUND = 'SOUND',
  TEXT = 'TEXT',
  MIXED = 'MIXED',
}

export interface ConstellationObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
}

export const constellationSchema = `
type ConstellationObj {
  id: String!
  chapterId: String!
  title: String!
  description: String!
}`;

export const exampleConstellation = {
  id: '0',
  chapterId: '0',
  title: 'Idea Constellation',
  description: 'Constellation Description',
};

export const exampleConstellations = [
  {
    id: '0',
    chapterId: '0',
    title: 'Idea Constellation 1',
    description: 'Constellation Description',
  },
  {
    id: '1',
    chapterId: '0',
    title: 'Idea Constellation 2',
    description: 'Constellation Description',
  },
  {
    id: '2',
    chapterId: '0',
    title: 'Idea Constellation 3',
    description: 'Constellation Description',
  },
];
