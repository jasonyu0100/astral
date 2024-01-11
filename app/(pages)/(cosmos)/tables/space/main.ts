import { ChapterObj, exampleChapters } from "./chapter/main";

export interface SpaceObj {
  id: string;
  title: string;
  description: string;
  chapters: ChapterObj[];
}

export const spaceObjSchema = `graphql 
type ChapterObj {
	id: ID!
	name: String!
	description: String!
	stormId: ID!
	draftId: ID!
	flowId: ID!
	seaId: ID!
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
