import { ResourceObj, exampleResources } from "../main";

export interface ResourceExplore {
  query: string;
  results: ResourceObj[];
}

export const exampleResourceExplore: ResourceExplore = {
  query: "test",
  results: exampleResources
};
