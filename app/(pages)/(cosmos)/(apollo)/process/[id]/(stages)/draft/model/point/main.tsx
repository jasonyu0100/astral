import { DraftStarObj, exampleDraftStars } from "./star/main";

export interface DraftPointObj {
  stars: DraftStarObj[];
}

export const exampleDraftPoint : DraftPointObj = {
  stars: exampleDraftStars
}