export enum FileType {
  IMAGE="img",
  AUDIO="audio",
  VIDEO="video",
  TEXT="text"
}

export interface FileObj {
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
  name: String!
  src: String
  content: String
  url: String
  type: FileType!
}
`

export const exampleFile : FileObj = {
  name: "passion.png",
  src: `/voyager/drive/themes/symbols/passion.png`,
  type: FileType.IMAGE,
};

export const exampleProfileImageFile: FileObj = {
  name: "avatar.png",
  src: `/brand/avatar.png`,
  type: FileType.IMAGE,
};

export const exampleFiles: FileObj[] = [
  {
    name: "passion.png",
    src: `/voyager/drive/themes/symbols/passion.png`,
    type: FileType.IMAGE,
  },
  {
    name: "nature.png",
    src: `/voyager/drive/themes/symbols/nature.png`,
    type: FileType.IMAGE,
  },
  {
    name: "launch.png",
    src: `/voyager/drive/themes/symbols/launch.png`,
    type: FileType.IMAGE,
  },
  {
    name: "land.png",
    src: `/voyager/drive/themes/symbols/land.png`,
    type: FileType.IMAGE,
  },
  {
    name: "voyager.png",
    src: `/voyager/drive/themes/symbols/voyager.png`,
    type: FileType.IMAGE,
  },
  {
    name: "supernova.png",
    src: `/voyager/drive/themes/symbols/supernova.png`,
    type: FileType.IMAGE,
  },
  {
    name: "ocean.png",
    src: `/voyager/drive/themes/symbols/ocean.png`,
    type: FileType.IMAGE,
  },
  {
    name: "atmos.png",
    src: `/voyager/drive/themes/symbols/atmos.png`,
    type: FileType.IMAGE,
  },
  {
    name: "nebula.png",
    src: `/voyager/drive/themes/symbols/nebula.png`,
    type: FileType.IMAGE,
  },
  {
    name: "stars.png",
    src: `/voyager/drive/themes/symbols/stars.png`,
    type: FileType.IMAGE,
  },
  {
    name: "earth.png",
    src: `/voyager/drive/themes/symbols/earth.png`,
    type: FileType.IMAGE,
  },
  {
    name: "pillars.png",
    src: `/voyager/drive/themes/symbols/pillars.png`,
    type: FileType.IMAGE,
  },
  {
    name: "bigbang.png",
    src: `/voyager/drive/themes/symbols/bigbang.png`,
    type: FileType.IMAGE,
  },
  {
    name: "sky.png",
    src: `/voyager/drive/themes/symbols/sky.png`,
    type: FileType.IMAGE,
  },
  {
    name: "space.png",
    src: `/voyager/drive/themes/symbols/space.png`,
    type: FileType.IMAGE,
  },
  {
    name: "blackhole.png",
    src: `/voyager/drive/themes/symbols/blackhole.png`,
    type: FileType.IMAGE,
  },
]