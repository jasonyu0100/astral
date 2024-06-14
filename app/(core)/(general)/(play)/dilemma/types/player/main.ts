import { Card } from '../card/main';

export interface Player {
  name: string;
  draw: Card[];
  score: number;
  memory?: any[];
}
