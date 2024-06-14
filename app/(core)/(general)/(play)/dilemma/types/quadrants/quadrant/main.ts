import { Card } from '../../card/main';

export interface QuadrantState {
  payoutA: number;
  payoutB: number;
  cards?: Card[];
}

export enum QuadrantPosition {
  A = 1,
  P1 = 2,
  P2 = 3,
  B = 4,
}
