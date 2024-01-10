export interface ChapterObj {
  id: string;
  name: string;
  description: string;
  stormId: string;
  draftId: string;
  flowId: string;
  seaId: string;
}

export const exampleChapter: ChapterObj = {
  id: "0",
  name: "Melody",
  description: "This is a description",
  stormId: "0",
  draftId: "0",
  flowId: "0",
  seaId: "0",
};

export const exampleChapters: ChapterObj[] = [
  {
    id: "0",
    name: "Concept",
    description: "Concept Description",
    stormId: "0",
    draftId: "0",
    flowId: "0",
    seaId: "0",
  },
  {
    id: "1",
    name: "Beat",
    description: "Beat Description",
    stormId: "0",
    draftId: "0",
    flowId: "0",
    seaId: "0",
  },
  {
    id: "2",
    name: "Melody",
    description: "Melody Description",
    stormId: "0",
    draftId: "0",
    flowId: "0",
    seaId: "0",
  },
];
