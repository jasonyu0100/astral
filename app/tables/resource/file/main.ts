export enum FileType {
  IMAGE = "img",
  AUDIO = "audio",
  VIDEO = "video",
  TEXT = "text",
}

export interface FileObj {
  id: string;
  name: string;
  src?: string;
  content?: string;
  url?: string;
  type: FileType;
}

export const fileSchema = `
enum FileType {
  IMAGE
  AUDIO
  VIDEO
  TEXT
}

type FileObj {
  id: String!
  name: String!
  src: String
  content: String
  url: String
  type: FileType!
}
`;

export const exampleFile: FileObj = {
  id: "0",
  name: "passion.png",
  src: `/voyager/drive/themes/symbols/passion.png`,
  type: FileType.IMAGE,
};

export const exampleProfileImageFile: FileObj = {
  id: "0",
  name: "avatar.png",
  src: `/brand/avatar.png`,
  type: FileType.IMAGE,
};

export const exampleFiles: FileObj[] = [
  {
    id: "0",
    name: "passion.png",
    src: `/voyager/drive/themes/symbols/passion.png`,
    type: FileType.IMAGE,
  },
  {
    id: "1",
    name: "nature.png",
    src: `/voyager/drive/themes/symbols/nature.png`,
    type: FileType.IMAGE,
  },
  {
    id: "2",
    name: "launch.png",
    src: `/voyager/drive/themes/symbols/launch.png`,
    type: FileType.IMAGE,
  },
  {
    id: "3",
    name: "land.png",
    src: `/voyager/drive/themes/symbols/land.png`,
    type: FileType.IMAGE,
  },
  {
    id: "4",
    name: "voyager.png",
    src: `/voyager/drive/themes/symbols/voyager.png`,
    type: FileType.IMAGE,
  },
  {
    id: "5",
    name: "supernova.png",
    src: `/voyager/drive/themes/symbols/supernova.png`,
    type: FileType.IMAGE,
  },
  {
    id: "6",
    name: "ocean.png",
    src: `/voyager/drive/themes/symbols/ocean.png`,
    type: FileType.IMAGE,
  },
  {
    id: "7",
    name: "atmos.png",
    src: `/voyager/drive/themes/symbols/atmos.png`,
    type: FileType.IMAGE,
  },
  {
    id: "8",
    name: "nebula.png",
    src: `/voyager/drive/themes/symbols/nebula.png`,
    type: FileType.IMAGE,
  },
  {
    id: "9",
    name: "stars.png",
    src: `/voyager/drive/themes/symbols/stars.png`,
    type: FileType.IMAGE,
  },
  {
    id: "10",
    name: "earth.png",
    src: `/voyager/drive/themes/symbols/earth.png`,
    type: FileType.IMAGE,
  },
  {
    id: "11",
    name: "pillars.png",
    src: `/voyager/drive/themes/symbols/pillars.png`,
    type: FileType.IMAGE,
  },
  {
    id: "12",
    name: "bigbang.png",
    src: `/voyager/drive/themes/symbols/bigbang.png`,
    type: FileType.IMAGE,
  },
  {
    id: "13",
    name: "sky.png",
    src: `/voyager/drive/themes/symbols/sky.png`,
    type: FileType.IMAGE,
  },
  {
    id: "14",
    name: "space.png",
    src: `/voyager/drive/themes/symbols/space.png`,
    type: FileType.IMAGE,
  },
  {
    id: "15",
    name: "blackhole.png",
    src: `/voyager/drive/themes/symbols/blackhole.png`,
    type: FileType.IMAGE,
  },
];
