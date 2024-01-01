import { CraftFile, exampleCraftFile } from "../drive/section/folder/file/main";

export interface CraftSearch {
  query: string;
  results: CraftFile[];
}

export const exampleCraftSearchResults = [exampleCraftFile];

export const exampleCraftSearch = {
    query: "test",
    results: exampleCraftSearchResults
}
