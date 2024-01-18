export interface ConstellationObj {
  id: string;
  draftId: string;
  title: string;
  description: string;
}

export const constellationSchema = `
type ConstellationObj {
  id: String!
  draftId: String!
  title: String!
  description: String!
}`;

export const exampleConstellation = {
  id: '0',
  draftId: '0',
  title: 'Idea Constellation',
  description: 'Constellation Description',
};

export const exampleConstellations = [
  {
    id: '0',
    draftId: '0',
    title: 'Idea Constellation 1',
    description: 'Constellation Description',
  },
  {
    id: '1',
    draftId: '0',
    title: 'Idea Constellation 2',
    description: 'Constellation Description',
  },
  {
    id: '2',
    draftId: '0',
    title: 'Idea Constellation 3',
    description: 'Constellation Description',
  },
];
