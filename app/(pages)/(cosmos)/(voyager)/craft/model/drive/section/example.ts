import { CraftFileType } from "./folder/file/type";
import { exampleCraftFolders } from "./type";

const srcRoot = "/voyager/craft/themes";

export const exampleCraftSection = {
  id: "0",
  name: "Example Section",
  description: "Example Section Description",
  folders: exampleCraftFolders,
  thumbnail: {
    id: "0",
    name: "Passion",
    description: "",
    src: `${srcRoot}/symbols/land.png`,
    type: CraftFileType.IMAGE
  },
};
