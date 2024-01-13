import { ConnectElementObj, exampleExploreElements } from "./element/main";

export interface ResourceConnect {
  query: string;
  results: ConnectElementObj[];
}

export const exampleResourceConnect: ResourceConnect = {
  query: "test",
  results: exampleExploreElements
};
