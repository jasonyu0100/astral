export enum FileType {
  IMAGE="img",
  AUDIO="audio",
  VIDEO="video",
  TEXT="text"
}

export interface FileObj {
  name: string;
  description: string;
  src: string;
  type: FileType;
  content?: string;
}

export const exampleFile : FileObj = {
  name: "Passion",
  description: "",
  src: `/voyager/drive/themes/symbols/passion.png`,
  type: FileType.IMAGE,
};

export const exampleProfileImageFile: FileObj = {
  name: "Profile Image",
  description: "",
  src: `/brand/avatar.png`,
  type: FileType.IMAGE,
};

export const exampleFiles: FileObj[] = [
  {
    name: "Passion",
    description: "",
    src: `/voyager/drive/themes/symbols/passion.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Nature",
    description: "",
    src: `/voyager/drive/themes/symbols/nature.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Launch",
    description: "",
    src: `/voyager/drive/themes/symbols/launch.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Land",
    description: "",
    src: `/voyager/drive/themes/symbols/land.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Voyager",
    description: "",
    src: `/voyager/drive/themes/symbols/voyager.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Supernova",
    description: "",
    src: `/voyager/drive/themes/symbols/supernova.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Ocean",
    description: "",
    src: `/voyager/drive/themes/symbols/ocean.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Atmos",
    description: "",
    src: `/voyager/drive/themes/symbols/atmos.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Nebula",
    description: "",
    src: `/voyager/drive/themes/symbols/nebula.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Stars",
    description: "",
    src: `/voyager/drive/themes/symbols/stars.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Earth",
    description: "",
    src: `/voyager/drive/themes/symbols/earth.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Pillars",
    description: "",
    src: `/voyager/drive/themes/symbols/pillars.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Big Bang",
    description: "",
    src: `/voyager/drive/themes/symbols/bigbang.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Sky",
    description: "",
    src: `/voyager/drive/themes/symbols/sky.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Space",
    description: "",
    src: `/voyager/drive/themes/symbols/space.png`,
    type: FileType.IMAGE,
  },
  {
    name: "Black Hole",
    description: "",
    src: `/voyager/drive/themes/symbols/blackhole.png`,
    type: FileType.IMAGE,
  },
]