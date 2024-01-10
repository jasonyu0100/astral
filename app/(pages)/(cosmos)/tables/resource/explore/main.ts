import { ExploreElementObj, exampleExploreElements } from "./element/main";

export interface ResourceExplore {
  query: string;
  results: ExploreElementObj[];
}

export const exampleResourceExplore: ResourceExplore = {
  query: "test",
  results: exampleExploreElements
};
