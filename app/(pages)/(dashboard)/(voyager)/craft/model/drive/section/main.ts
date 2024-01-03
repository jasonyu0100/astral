import { CraftFolder, exampleCraftFolder } from "./folder/main";

export interface CraftSection {
  id: string;
  name: string;
  description: string;
  folders: CraftFolder[];
}

export const exampleCraftFolders = [exampleCraftFolder];

export const exampleCraftSection = {
  id: "0",
  name: "Example Section",
  description: "Example Section Description",
  folders: exampleCraftFolders,
};
