import { Phase } from '../phase/main';
import { Player } from '../player/main';
import { Quadrants } from '../quadrants/main';
import { QuadrantPosition } from '../quadrants/quadrant/main';

export interface TwoByTwo {
  quadrants: Quadrants;
  round: number;
  phase: Phase;
  players: Player[];
  sideNumber: number; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 etc.
  startPlayer: number; // 0
  direction: boolean; // true, false, clockwise, anti-clockwise
  anti: number; // 0, 1, 2, 3
  antiMax: number; // 6
  heroPos: QuadrantPosition; // 1, 2, 3, 4
  hero: number; // 2
  tax: number; // 0, 1, 2, 3
  base: number; // 100
  ceil: number; // 1000, 2000, 3000, 5000 etc.
  floor: number; // 0
  history?: any[];
}

export interface TwoByTwoResolution {
  // step
}
