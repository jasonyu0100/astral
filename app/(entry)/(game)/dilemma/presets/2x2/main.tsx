import { TwoByTwo } from '../../types/2x2/main';
import { Phase } from '../../types/phase/main';
import { Quadrants } from '../../types/quadrants/main';
import { QuadrantPosition } from '../../types/quadrants/quadrant/main';
import { defaultQuadrants } from '../quadrants/default/main';
import { legacyQuadrants } from '../quadrants/legacy/main';
import { zerothQuadrants } from '../quadrants/zeroth/main';

const defaultPlayers = [
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
];

const defaultPresets = {
  round: 0,
  phase: Phase.INIT,
  startPlayer: 0,
  sideNumber: 1,
  direction: true,
  tax: 0,
  hero: 0,
  heroPos: QuadrantPosition.A,
  anti: 0,
  antiMax: 6,
  base: 0,
  ceil: 1000,
  floor: 0,
  history: [],
};

export const zerothGameState: TwoByTwo = {
  quadrants: zerothQuadrants,
  players: defaultPlayers,
  ...defaultPresets,
};

export const legacyGameState: TwoByTwo = {
  quadrants: legacyQuadrants,
  players: defaultPlayers,
  ...defaultPresets,
};

export const defaultGameState: TwoByTwo = {
  quadrants: defaultQuadrants,
  players: defaultPlayers,
  ...defaultPresets,
};
