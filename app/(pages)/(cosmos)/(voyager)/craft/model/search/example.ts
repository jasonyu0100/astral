import { exampleCraftFiles } from "../drive/section/folder/example";
import { CraftFile } from "../drive/section/folder/file/type";
import { CraftSearch } from "./type";

export const exampleCraftSearchResults : CraftFile[] = exampleCraftFiles

export const exampleCraftSearch: CraftSearch = {
  query: "test",
  results: exampleCraftSearchResults,
};
