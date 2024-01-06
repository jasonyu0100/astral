import { CraftFile, CraftFileType } from "./folder/file/main";
import { CraftFolder, exampleCraftFolder } from "./folder/main";

export interface CraftSection {
  id: string;
  name: string;
  description: string;
  folders: CraftFolder[];
  thumbnail: CraftFile;
}

export const exampleCraftFolders = [
  exampleCraftFolder,
  exampleCraftFolder,
  exampleCraftFolder,
  exampleCraftFolder,
  exampleCraftFolder,
];
const srcRoot = "/voyager/craft/themes";

export const exampleCraftSection = {
  id: "0",
  name: "Example Section",
  description: "Example Section Description",
  folders: exampleCraftFolders,
  thumbnail: {
    id: "0",
    name: "Passion",
    description: "",
    src: `${srcRoot}/symbols/land.png`,
    type: CraftFileType.IMAGE
  },
};
