import { CraftFileType } from "./file/type";
import { CraftFolder } from "./type";

const srcRoot = "/voyager/craft/themes";

export const exampleCraftFiles = [
  {
    id: "0",
    name: "Passion",
    description: "",
    src: `${srcRoot}/symbols/passion.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "1",
    name: "Nature",
    description: "",
    src: `${srcRoot}/symbols/nature.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "2",
    name: "Launch",
    description: "",
    src: `${srcRoot}/symbols/launch.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "3",
    name: "Land",
    description: "",
    src: `${srcRoot}/symbols/land.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "4",
    name: "Voyager",
    description: "",
    src: `${srcRoot}/symbols/voyager.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "4",
    name: "Supernova",
    description: "",
    src: `${srcRoot}/symbols/supernova.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "5",
    name: "Ocean",
    description: "",
    src: `${srcRoot}/symbols/ocean.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "6",
    name: "Atmos",
    description: "",
    src: `${srcRoot}/symbols/atmos.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "7",
    name: "Nebula",
    description: "",
    src: `${srcRoot}/symbols/nebula.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "8",
    name: "Stars",
    description: "",
    src: `${srcRoot}/symbols/stars.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "9",
    name: "Earth",
    description: "",
    src: `${srcRoot}/symbols/earth.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "11",
    name: "Pillars",
    description: "",
    src: `${srcRoot}/symbols/pillars.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "12",
    name: "Big Bang",
    description: "",
    src: `${srcRoot}/symbols/bigbang.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "13",
    name: "Sky",
    description: "",
    src: `${srcRoot}/symbols/sky.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "14",
    name: "Space",
    description: "",
    src: `${srcRoot}/symbols/space.png`,
    type: CraftFileType.IMAGE,
  },
  {
    id: "15",
    name: "Black Hole",
    description: "",
    src: `${srcRoot}/symbols/blackhole.png`,
    type: CraftFileType.IMAGE,
  },
];

export const exampleCraftFolder: CraftFolder = {
  id: "0",
  sectionId: "0",
  name: "Symbols",
  files: exampleCraftFiles,
};
