import { ChapterObj, exampleChapters } from "./chapter/main";

export interface SpaceObj {
  id: string;
  title: string;
  description: string;
  chapters: ChapterObj[];
}

export const spaceSchema = `
type SpaceObj {
  id: String!
  title: String!
  description: String!
  chapters: [ChapterObj!]!
}
`

export const exampleSpace: SpaceObj = {
  id: "0",
  title: "Space Example",
  description: "Space Description",
  chapters: exampleChapters,
};

export const exampleSpaces: SpaceObj[] = [
  {
    id: "0",
    title: "Space Example",
    description: "Space Description",
    chapters: exampleChapters,
  },
  {
    id: "1",
    title: "Space Example",
    description: "Space Description",
    chapters: exampleChapters,
  },
];
