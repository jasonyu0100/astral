export interface ChapterObj {
  id: string;
  spaceId: string;
  title: string;
  description: string;
}

export const chapterSchema = `
type ChapterObj {
  id: String!
  spaceId: String!
  title: String!
  description: String!
}
`;

export const exampleChapter: ChapterObj = {
  id: "0",
  spaceId: "0",
  title: "Melody",
  description: "This is a description",
};

export const exampleChapters: ChapterObj[] = [
  {
    id: "0",
    title: "Concept",
    description: "Concept Description",
    spaceId: "0",
  },
  {
    id: "1",
    title: "Beat",
    description: "Beat Description",
    spaceId: "0",
  },
  {
    id: "2",
    title: "Melody",
    description: "Melody Description",
    spaceId: "0",
  },
];
