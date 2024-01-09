import { exampleCraftFile } from "./section/folder/file/example";
import { CraftFile } from "./section/folder/file/type";
import { CraftSection, exampleCraftSection } from "./section/type";

export interface CraftDrive {
  sections: CraftSection[];
  cart: CraftFile[];
}