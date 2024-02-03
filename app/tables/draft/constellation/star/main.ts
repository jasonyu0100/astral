import { FileObj, exampleFile } from '@/tables/file/main';
import { LoomObj } from '@/tables/resource/loom/main';
import { ResourceType } from '@/tables/resource/main';
import { StickyObj } from '@/tables/resource/sticky/main';

export interface StarObj {
  id: string;
  constellationId: string;
  name: string;
  x: number;
  y: number;
  file?: FileObj;
  loom?: LoomObj;
  sticky?: StickyObj;
  resourceType: string;
}

export interface FileStarObj {
  id: string;
  constellationId: string;
  name: string;
  x: number;
  y: number;
  file: FileObj;
  resourceType: string;
}

export interface LoomStarObj {
  id: string;
  constellationId: string;
  name: string;
  x: number;
  y: number;
  loom: LoomObj;
  resourceType: string;
}

export interface StickyStarObj {
  id: string;
  constellationId: string;
  name: string;
  x: number;
  y: number;
  sticky: StickyObj;
  resourceType: string;
}

export const starSchema = `
type StarObj {
  id: String!
  constellationId: String!
  name: String!
  x: Float!
  y: Float!
  file: FileObj!
}
`;

export const exampleStar: StarObj = {
  id: '0',
  constellationId: '0',
  name: 'Star 1',
  x: 120,
  y: 120,
  file: exampleFile,
  resourceType: ResourceType.FILE,
};

export const exampleStars: StarObj[] = [
  {
    id: '0',
    constellationId: '0',
    name: 'Star 0',
    x: 120,
    y: 120,
    file: exampleFile,
    resourceType: ResourceType.FILE,
  },
  {
    id: '1',
    constellationId: '0',
    name: 'Star 1',
    x: 240,
    y: 120,
    file: exampleFile,
    resourceType: ResourceType.FILE,
  },
  {
    id: '2',
    constellationId: '0',
    name: 'Star 2',
    x: 360,
    y: 120,
    file: exampleFile,
    resourceType: ResourceType.FILE,
  },
];
