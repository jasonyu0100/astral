import { CraftSection } from "../../data";
import { labelsFolder } from "./labels/main";
import { linesFolder } from "./lines/main";
import { lingoFolder } from "./lingo/main";

export const wordsSection: CraftSection = {
  name: "Words",
  description: "The words of Cosmos",
  folders: [linesFolder, labelsFolder, lingoFolder],
};
