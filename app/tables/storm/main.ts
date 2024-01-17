export interface StormObj {
  id: string;
  chapterId: string;
}

export const stormSchema = `
type StormObj {
  id: String!
  chapterId: String!
}
`;

export const exampleStorm: StormObj = {
  id: "0",
  chapterId: "0",
};

export const exampleStorms: StormObj[] = [
  {
    id: "0",
    chapterId: "0",
  },
  {
    id: "1",
    chapterId: "0",
  },
];
