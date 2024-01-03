import { DraftMediaObj, exampleDraftMedia } from "../../context/media/main";

export interface DraftStarObj {
  id: string;
  x: number;
  y: number;
  media: DraftMediaObj;
}

export const exampleDraftStar: DraftStarObj = {
  id: "0",
  x: 120,
  y: 120,
  media: exampleDraftMedia,
};

export const exampleDraftConstellation: DraftStarObj[] = [
  {
    id: "0",
    x: 120,
    y: 120,
    media: exampleDraftMedia,
  },
  {
    id: "1",
    x: 240,
    y: 120,
    media: exampleDraftMedia,
  },
  {
    id: "2",
    x: 360,
    y: 120,
    media: exampleDraftMedia,
  },
];
