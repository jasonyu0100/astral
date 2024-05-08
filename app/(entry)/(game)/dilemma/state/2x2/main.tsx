import { TwoByTwo } from "../../types/2x2/main";
import { Quadrants } from "../../types/quadrants/main";
import { QuadrantPosition } from "../../types/quadrants/quadrant/main";
import { defaultQuadrants } from "../quadrants/default/main";
import { legacyQuadrants } from "../quadrants/legacy/main";
import { zerothQuadrants } from "../quadrants/zeroth/main";

export const zerothGameState: TwoByTwo = {
  quadrants: zerothQuadrants,
  players: [
    {
      name: 'J22',
      draw: [],
      score: 0,
      memory: [],
    },
    {
      name: 'J22',
      draw: [],
      score: 0,
      memory: [],
    },
  ],
  anti: 0,
  antiMax: 6,
  ceil: 1000,
  floor: 0,
  history: [],
  heroPos: QuadrantPosition.A,
  hero: 0,
  tax: 0,
  base: 0
};

export const legacyGameState: TwoByTwo = {
  quadrants: legacyQuadrants,
  players: [
    {
      name: 'J22',
      draw: [],
      score: 0,
      memory: [],
    },
    {
      name: 'J22',
      draw: [],
      score: 0,
      memory: [],
    },
  ],
  anti: 0,
  antiMax: 6,
  ceil: 1000,
  floor: 0,
  history: [],
  heroPos: QuadrantPosition.A,
  hero: 0,
  tax: 0,
  base: 0
};

export const defaultGameState: TwoByTwo = {
  quadrants: defaultQuadrants,
  players: [
    {
      name: 'J22',
      draw: [],
      score: 0,
      memory: [],
    },
    {
      name: 'J22',
      draw: [],
      score: 0,
      memory: [],
    },
  ],
  anti: 0,
  antiMax: 6,
  ceil: 1000,
  floor: 0,
  history: [],
  heroPos: QuadrantPosition.A,
  hero: 0,
  tax: 0,
  base: 0
};
