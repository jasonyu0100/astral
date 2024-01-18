import { ResourceObj, exampleResource } from '../../main';

export interface ConnectElementObj {
  id: string;
  x: number;
  y: number;
  resource: ResourceObj;
}

export const exampleExploreElement: ConnectElementObj = {
  id: '0',
  x: 120,
  y: 120,
  resource: exampleResource,
};

export const exampleExploreElements: ConnectElementObj[] = [
  {
    id: '0',
    x: 120,
    y: 120,
    resource: exampleResource,
  },
  {
    id: '1',
    x: 240,
    y: 120,
    resource: exampleResource,
  },
  {
    id: '2',
    x: 360,
    y: 120,
    resource: exampleResource,
  },
];
