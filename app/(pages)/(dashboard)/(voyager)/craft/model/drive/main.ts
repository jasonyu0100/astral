import { CraftFile, exampleCraftFile } from "./section/folder/file/main";
import { CraftSection, exampleCraftSection } from "./section/main";

export interface CraftDrive {
  sections: CraftSection[];
  cart: CraftFile[];
}

export const exampleCraftSections = [exampleCraftSection]

export const exampleCraftCart = [
    exampleCraftFile
]

export const exampleCraftDrive = {
    sections: exampleCraftSections,
    cart: exampleCraftCart
}