import { exampleCraftFiles } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/example";
import { CraftFile } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/type";

export interface DraftContextObj {
  library: CraftFile[];
}

export const exampleDraftLibrary: CraftFile[] = exampleCraftFiles;
