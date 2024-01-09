import { exampleCraftFile } from "./section/folder/file/example";
import { CraftFile } from "./section/folder/file/type";
import { CraftSection, exampleCraftSection } from "./section/type";

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

