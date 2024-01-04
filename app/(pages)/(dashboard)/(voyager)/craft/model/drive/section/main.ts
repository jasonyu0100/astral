import { CraftFile } from "./folder/file/main";
import { CraftFolder, exampleCraftFolder } from "./folder/main";

export interface CraftSection {
  id: string;
  name: string;
  description: string;
  folders: CraftFolder[];
  thumbnail: CraftFile;
}

export const exampleCraftFolders = [exampleCraftFolder];
const srcRoot = "/voyager/craft/themes";

export const exampleCraftSection = {
  id: "0",
  name: "Example Section",
  description: "Example Section Description",
  folders: exampleCraftFolders,
  thumbnail: {
    name: "Passion",
    description: "",
    src: `${srcRoot}/symbols/land.png`,
  },
};
