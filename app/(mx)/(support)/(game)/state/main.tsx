import { Quadrants, TwoByTwo } from '../dilemma/page';

export const zerothQuadrants: Quadrants = {
  quadrantA: {
    payoutA: 5,
    payoutB: 5,
    hero: 1,
  },
  quadrantP1: {
    payoutA: 8,
    payoutB: 0,
    hero: 1,
  },
  quadrantP2: {
    payoutA: 0,
    payoutB: 8,
    hero: 1,
  },
  quadrantB: {
    payoutA: 2,
    payoutB: 2,
    hero: 1,
  },
};

export const legacyQuadrants: Quadrants = {
  quadrantA: {
    payoutA: 3,
    payoutB: 3,
    hero: 1,
  },
  quadrantP1: {
    payoutA: 5,
    payoutB: 1,
    hero: 1,
  },
  quadrantP2: {
    payoutA: 1,
    payoutB: 5,
    hero: 1,
  },
  quadrantB: {
    payoutA: 2,
    payoutB: 2,
    hero: 1,
  },
};

export const defaultQuadrants: Quadrants = {
  quadrantA: {
    payoutA: 3,
    payoutB: 3,
    hero: 1,
  },
  quadrantP1: {
    payoutA: 4,
    payoutB: 1,
    hero: 1,
  },
  quadrantP2: {
    payoutA: 1,
    payoutB: 4,
    hero: 1,
  },
  quadrantB: {
    payoutA: 2,
    payoutB: 2,
    hero: 1,
  },
};

export const zerothGameState: TwoByTwo = {
  quadrants: zerothQuadrants,
  players: [
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
  ],
  anti: 0,
  goal: 1000,
  floor: 0,
  history: [],
};

export const legacyGameState: TwoByTwo = {
  quadrants: legacyQuadrants,
  players: [
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
  ],
  anti: 0,
  goal: 1000,
  floor: 0,
  history: [],
};

export const defaultGameState: TwoByTwo = {
  quadrants: defaultQuadrants,
  players: [
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
    {
      name: 'J22',
      cards: [],
      score: 0,
      memory: [],
    },
  ],
  anti: 0,
  goal: 1000,
  floor: 0,
  history: [],
};
