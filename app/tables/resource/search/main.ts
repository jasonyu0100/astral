import { ResourceObj, exampleResources } from '../main';

export interface FileSearch {
  query: string;
  results: ResourceObj[];
}

export const exampleResourceSearch = {
  query: 'test',
  results: exampleResources,
};
