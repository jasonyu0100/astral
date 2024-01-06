import { CraftFile } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/main";
import { exampleCraftFiles } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/main";

export interface DraftContextObj {
  library: CraftFile[];
}

export const exampleDraftLibrary: CraftFile[] = exampleCraftFiles;
