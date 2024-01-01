import { CraftFolder, exampleCraftFolder } from "./folder/main";

export interface CraftSection {
  name: string;
  description: string;
  folders: CraftFolder[];
}

export const exampleCraftFolders = [
    exampleCraftFolder
]

export const exampleCraftSection = {
    name: "Example Section",
    description: "Example Section Description",
    folders: exampleCraftFolders
}