export interface FileObj {
  id: string;
  src: string;
  type: string;
  name?: string;
  size?: number;
}

export const fileSchema = `
type FileObj {
  id: String!
  src: String!
  type: String!
  name: String
  size: Int
}
`;

export const exampleFile: FileObj = {
  id: '0',
  name: 'passion.png',
  src: `/voyager/drive/themes/symbols/passion.png`,
  type: 'image/png',
};

export const exampleProfileImageFile: FileObj = {
  id: '0',
  name: 'avatar.png',
  src: `/brand/avatar.png`,
  type: 'image/png',
};

export const exampleFiles: FileObj[] = [
  {
    id: '0',
    name: 'passion.png',
    src: `/voyager/drive/themes/symbols/passion.png`,
    type: 'image/png',
  },
  {
    id: '1',
    name: 'nature.png',
    src: `/voyager/drive/themes/symbols/nature.png`,
    type: 'image/png',
  },
  {
    id: '2',
    name: 'launch.png',
    src: `/voyager/drive/themes/symbols/launch.png`,
    type: 'image/png',
  },
  {
    id: '3',
    name: 'land.png',
    src: `/voyager/drive/themes/symbols/land.png`,
    type: 'image/png',
  },
  {
    id: '4',
    name: 'voyager.png',
    src: `/voyager/drive/themes/symbols/voyager.png`,
    type: 'image/png',
  },
  {
    id: '5',
    name: 'supernova.png',
    src: `/voyager/drive/themes/symbols/supernova.png`,
    type: 'image/png',
  },
  {
    id: '6',
    name: 'ocean.png',
    src: `/voyager/drive/themes/symbols/ocean.png`,
    type: 'image/png',
  },
  {
    id: '7',
    name: 'atmos.png',
    src: `/voyager/drive/themes/symbols/atmos.png`,
    type: 'image/png',
  },
  {
    id: '8',
    name: 'nebula.png',
    src: `/voyager/drive/themes/symbols/nebula.png`,
    type: 'image/png',
  },
  {
    id: '9',
    name: 'stars.png',
    src: `/voyager/drive/themes/symbols/stars.png`,
    type: 'image/png',
  },
  {
    id: '10',
    name: 'earth.png',
    src: `/voyager/drive/themes/symbols/earth.png`,
    type: 'image/png',
  },
  {
    id: '11',
    name: 'pillars.png',
    src: `/voyager/drive/themes/symbols/pillars.png`,
    type: 'image/png',
  },
  {
    id: '12',
    name: 'bigbang.png',
    src: `/voyager/drive/themes/symbols/bigbang.png`,
    type: 'image/png',
  },
  {
    id: '13',
    name: 'sky.png',
    src: `/voyager/drive/themes/symbols/sky.png`,
    type: 'image/png',
  },
  {
    id: '14',
    name: 'space.png',
    src: `/voyager/drive/themes/symbols/space.png`,
    type: 'image/png',
  },
  {
    id: '15',
    name: 'blackhole.png',
    src: `/voyager/drive/themes/symbols/blackhole.png`,
    type: 'image/png',
  },
];
