import { CraftSection } from "../../data";
import { ideasFolder } from "./ideas/main";
import { symbolsFolder } from "./symbols/main";

export const themesSection: CraftSection = {
  name: "Themes",
  description: "The themes of Cosmos",
  folders: [ideasFolder, symbolsFolder],
};



