export interface ChapterObj {
  id: string;
  title: string;
  description: string;
  stormId: string;
  draftId: string;
  flowId: string;
  seaId: string;
}

export const exampleChapter: ChapterObj = {
  id: "0",
  title: "Melody",
  description: "This is a description",
  stormId: "0",
  draftId: "0",
  flowId: "0",
  seaId: "0",
};

export const exampleChapters: ChapterObj[] = [
  {
    id: "0",
    title: "Concept",
    description: "Concept Description",
    stormId: "0",
    draftId: "0",
    flowId: "0",
    seaId: "0",
  },
  {
    id: "1",
    title: "Beat",
    description: "Beat Description",
    stormId: "0",
    draftId: "0",
    flowId: "0",
    seaId: "0",
  },
  {
    id: "2",
    title: "Melody",
    description: "Melody Description",
    stormId: "0",
    draftId: "0",
    flowId: "0",
    seaId: "0",
  },
];
