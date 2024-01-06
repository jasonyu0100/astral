import { CraftExploreElement, exampleExploreElements } from "./element/main";

export interface CraftExplore {
  query: string;
  results: CraftExploreElement[];
}

export const exampleCraftExplore = {
  query: "test",
  results: exampleExploreElements,
};
