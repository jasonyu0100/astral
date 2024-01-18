export interface SeaObj {
  id: string;
  chapterId: string;
}

export const seaSchema = `
type SeaObj {
  id: String!
  chapterId: String!
}`;

export const exampleSea: SeaObj = {
  id: '0',
  chapterId: '0',
};

export const exampleSeas: SeaObj[] = [
  {
    id: '0',
    chapterId: '0',
  },
  {
    id: '1',
    chapterId: '0',
  },
];
