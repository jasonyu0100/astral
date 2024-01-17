export interface DraftObj {
  id: string;
  chapterId: string;
}

export const draftSchema = `
type DraftObj {
  id: String!
  chapterId : String!
}
`;

export const exampleDraft: DraftObj = {
  id: "0",
  chapterId: "0",
};

export const exampleDrafts: DraftObj[] = [
  {
    id: "0",
    chapterId: "0",
  },
  {
    id: "0",
    chapterId: "0",
  },
];
