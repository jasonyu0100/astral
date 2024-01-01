import { CraftFile } from "./file/main";

export interface CraftFolder {
  name: string;
  files: CraftFile[];
}

const srcRoot = "/voyager/craft/themes";

export const exampleCraftFiles = [
  { name: "Passion", description: "", src: `${srcRoot}/symbols/passion.png` },
  { name: "Nature", description: "", src: `${srcRoot}/symbols/nature.png` },
  { name: "Launch", description: "", src: `${srcRoot}/symbols/launch.png` },
  { name: "Land", description: "", src: `${srcRoot}/symbols/land.png` },
  { name: "Voyager", description: "", src: `${srcRoot}/symbols/voyager.png` },
  {
    name: "Supernova",
    description: "",
    src: `${srcRoot}/symbols/supernova.png`,
  },
  { name: "Ocean", description: "", src: `${srcRoot}/symbols/ocean.png` },
  { name: "Atmos", description: "", src: `${srcRoot}/symbols/atmos.png` },
  { name: "Nebula", description: "", src: `${srcRoot}/symbols/nebula.png` },
  { name: "Stars", description: "", src: `${srcRoot}/symbols/stars.png` },
  { name: "Earth", description: "", src: `${srcRoot}/symbols/earth.png` },
  { name: "Pillars", description: "", src: `${srcRoot}/symbols/pillars.png` },
  {
    name: "Big Bang",
    description: "",
    src: `${srcRoot}/symbols/bigbang.png`,
  },
  { name: "Sky", description: "", src: `${srcRoot}/symbols/sky.png` },
  { name: "Space", description: "", src: `${srcRoot}/symbols/space.png` },
  {
    name: "Black Hole",
    description: "",
    src: `${srcRoot}/symbols/blackhole.png`,
  },
];

export const exampleCraftFolder: CraftFolder = {
  name: "Symbols",
  files: exampleCraftFiles
};
