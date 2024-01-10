import { StarObj, exampleStars } from "./star/main";

export interface DraftModel {
  id: string;
  stars: StarObj[];
}

export const exampleDraft: DraftModel = {
  id: "0",
  stars: exampleStars,
};

export const exampleDrafts: DraftModel[] = [
  {
    id: "0",
    stars: exampleStars,
  },
  {
    id: "1",
    stars: exampleStars,
  },
];
