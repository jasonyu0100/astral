import { CraftSection } from "../../data";
import { coverFolder } from "./cover/main";
import { iconFolder } from "./icon/main";
import { logoFolder } from "./logo/main";

export const brandSection: CraftSection = {
  name: "Brand",
  description: "The brand of Cosmos",
  folders: [coverFolder, logoFolder, iconFolder],
};

