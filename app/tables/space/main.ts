export interface SpaceObj {
  id: string;
  userId: string;
  title: string;
  description: string;
}

export const spaceSchema = `
type SpaceObj {
  id: String!
  userId: String!
  title: String!
  description: String!
}
`;

export const exampleSpace: SpaceObj = {
  id: "0",
  userId: "0",
  title: "Space Example",
  description: "Space Description",
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: "0",
    userId: "0",
    title: "Space Example",
    description: "Space Description",
  },
  {
    id: "1",
    userId: "0",
    title: "Space Example",
    description: "Space Description",
  },
];
