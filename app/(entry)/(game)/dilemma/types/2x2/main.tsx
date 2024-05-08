import { Player } from "../player/main";
import { Quadrants } from "../quadrants/main";
import { QuadrantPosition } from "../quadrants/quadrant/main";

export interface TwoByTwo {
  quadrants: Quadrants;
  players: Player[];
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