import { CraftFile, exampleCraftFile } from "../../drive/section/folder/file/main";

export interface CraftExploreElement {
  id: string;
  x: number;
  y: number;
  media: CraftFile;
}

export const exampleExploreElement: CraftExploreElement = {
  id: "0",
  x: 120,
  y: 120,
  media: exampleCraftFile,
};

export const exampleExploreElements: CraftExploreElement[] = [
  {
    id: "0",
    x: 120,
    y: 120,
    media: exampleCraftFile,
  },
  {
    id: "1",
    x: 240,
    y: 120,
    media: exampleCraftFile,
  },
  {
    id: "2",
    x: 360,
    y: 120,
    media: exampleCraftFile,
  },
];

