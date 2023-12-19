import {
  ApolloDraft,
  ConstellationDraft,
  defaultApolloDraft,
  defaultConstellationDraft,
} from "./draft/data";
import {
  ApolloFlow,
  ConstellationFlow,
  defaultApolloFlow,
  defaultConstellationFlow,
} from "./flow/data";
import {
  ApolloSea,
  ConstellationSea,
  defaultApolloSea,
  defaultConstellationSea,
} from "./sea/data";
import {
  ApolloStorm,
  ConstellationStorm,
  defaultApolloStorm,
  defaultConstellationStorm,
} from "./storm/data";

export interface ApolloProject {
  constellations: ApolloConstellation;
  storm: ApolloStorm;
  draft: ApolloDraft;
  flow: ApolloFlow;
  sea: ApolloSea;
}

export interface ApolloConstellation {
  id: number;
  name: string;
  storm: ConstellationStorm;
  draft: ConstellationDraft;
  flow: ConstellationFlow;
  sea: ConstellationSea;
}

export const defaultApolloConstellation = {
  id: 0,
  name: "Hello World",
  storm: defaultConstellationStorm,
  draft: defaultConstellationDraft,
  flow: defaultConstellationFlow,
  sea: defaultConstellationSea,
};

export const defaultApolloConstellations = [
  defaultApolloConstellation,
  defaultApolloConstellation,
  defaultApolloConstellation,
];

export const defaultApolloProject = {
  constellations: defaultApolloConstellations,
  storm: defaultApolloStorm,
  draft: defaultApolloDraft,
  flow: defaultApolloFlow,
  sea: defaultApolloSea,
};
