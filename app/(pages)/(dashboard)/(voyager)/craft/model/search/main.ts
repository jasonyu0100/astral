import { CraftFile } from "../drive/section/folder/file/main";
import { exampleCraftFiles } from "../drive/section/folder/main";

export interface CraftSearch {
  query: string;
  results: CraftFile[];
}

export const exampleCraftSearchResults = exampleCraftFiles

export const exampleCraftSearch = {
  query: "test",
  results: exampleCraftSearchResults,
};
