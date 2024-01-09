import { exampleCraftFiles } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/example";
import { CraftFile, CraftFileType } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/type";

export const exampleFlowSnapshot: CraftFile = {
  id: "0",
  name: "Passion",
  description: "",
  src: `/voyager/craft/themes/symbols/passion.png`,
  type: CraftFileType.IMAGE
};

export const exampleFlowGallery: CraftFile[] = exampleCraftFiles
