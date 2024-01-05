export enum CraftFileType {
  IMAGE="img",
  AUDIO="audio",
  VIDEO="video",
}

export interface CraftFile {
  id: string;
  name: string;
  description: string;
  src: string;
  type: CraftFileType;
}

const srcRoot = "/voyager/craft/themes";

export const exampleCraftFile = {
  id: "0",
  name: "Passion",
  description: "",
  src: `${srcRoot}/symbols/passion.png`,
  type: CraftFileType.IMAGE,
};
