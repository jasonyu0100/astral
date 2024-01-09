import { exampleCraftFiles } from "../drive/section/folder/example";
import { CraftFile } from "../drive/section/folder/file/type";

export interface CraftSearch {
  query: string;
  results: CraftFile[];
}

export const exampleCraftSearchResults = exampleCraftFiles

export const exampleCraftSearch = {
  query: "test",
  results: exampleCraftSearchResults,
};
