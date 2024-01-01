import { DraftStarObj, exampleDraftConstellation } from "./star/main";

export interface DraftPointObj {
  constellation: DraftStarObj[];
}

export const exampleDraftPoint = {
  constellation: exampleDraftConstellation
}