import { DraftMediaObj, exampleDraftMedia } from "../../context/media/main";

export interface DraftStarObj {
  x: number;
  y: number;
  element: DraftMediaObj;
}

export const exampleDraftStar: DraftStarObj = {
  x: 120,
  y: 120,
  element: exampleDraftMedia,
};

export const exampleDraftConstellation: DraftStarObj[] = [
  {
    x: 120,
    y: 120,
    element: exampleDraftMedia,
  },
  {
    x: 240,
    y: 120,
    element: exampleDraftMedia,
  },
  {
    x: 360,
    y: 120,
    element: exampleDraftMedia,
  },
];
