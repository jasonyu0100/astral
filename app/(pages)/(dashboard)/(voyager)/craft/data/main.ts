import { CraftDrive, CraftSearch } from "../data";
import { brandSection } from "./brand/main";
import { themesSection } from "./themes/main";
import { symbolsFolder } from "./themes/symbols/main";
import { wordsSection } from "./words/main";

export const craftDrive: CraftDrive = {
  sections: [brandSection, wordsSection, themesSection],
  cart: [],
};

export const craftSearch: CraftSearch = {
  query: "",
  results: [
    ...symbolsFolder.files
  ],
}