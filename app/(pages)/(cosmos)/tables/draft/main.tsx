import { StarObj, exampleStars } from "./star/main";

export interface DraftObj {
  id: string;
  stars: StarObj[];
}

export const exampleDraft: DraftObj = {
  id: "0",
  stars: exampleStars,
};

export const exampleDrafts: DraftObj[] = [
  {
    id: "0",
    stars: exampleStars,
  },
  {
    id: "1",
    stars: exampleStars,
  },
];
