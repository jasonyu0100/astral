import { CraftFile, exampleCraftFile } from "./section/folder/file/main";
import { CraftSection, exampleCraftSection } from "./section/main";

export interface CraftDrive {
  sections: CraftSection[];
  cart: CraftFile[];
}

export const exampleCraftSections: CraftSection[] = [
  exampleCraftSection,
  exampleCraftSection,
  exampleCraftSection,
  exampleCraftSection,
  exampleCraftSection,
  exampleCraftSection,
  exampleCraftSection,
  exampleCraftSection,
  exampleCraftSection,
  exampleCraftSection,
  exampleCraftSection,
];

export const exampleCraftCart: CraftFile[] = [exampleCraftFile];

export const exampleCraftDrive = {
  sections: exampleCraftSections,
  cart: exampleCraftCart,
};
