import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export enum DecisionQuadrantVariant {
  FirstQuadrant = 'FIRST',
  SecondQuadrant = 'SECOND',
  ThirdQuadrant = 'THIRD',
  FourthQuadrant = 'FOURTH',
}

export interface DecisionQuadrantObj {
  id: string;
  decisionId: string;
  title: string;
  description: string;
  quadrantVariant: DecisionQuadrantVariant;
  created: string;
}

export const decisionQuadrantGql = `
type DecisionQuadrantObj {
  id: String!
  decisionId: String!
  title: String!
  description: String!
  quadrantVariant: DecisionQuadrantVariant!
  created: String!
}
`;

export const ContextForDecisionQuadrantObj = createContext<DecisionQuadrantObj>(
  {} as DecisionQuadrantObj,
);

export const exampleDecisionQuadrant: DecisionQuadrantObj = {
  id: '0',
  decisionId: '0',
  title: 'First Quadrant',
  description: 'Focuses on high-priority and high-impact tasks.',
  quadrantVariant: DecisionQuadrantVariant.FirstQuadrant,
  created: new Date().toISOString(),
};

export const exampleDecisionQuadrants: DecisionQuadrantObj[] = [
  {
    id: '0',
    decisionId: '0',
    title: 'First Quadrant',
    description: 'Focuses on high-priority and high-impact tasks.',
    quadrantVariant: DecisionQuadrantVariant.FirstQuadrant,
    created: new Date().toISOString(),
  },
  {
    id: '1',
    decisionId: '0',
    title: 'Second Quadrant',
    description: 'Low-priority but high-impact tasks.',
    quadrantVariant: DecisionQuadrantVariant.SecondQuadrant,
    created: new Date().toISOString(),
  },
];

export const decisionQuadrantModel: ModelInterface<DecisionQuadrantObj> = {
  name: 'quadrant',
  gql: decisionQuadrantGql,
  example: exampleDecisionQuadrant,
  examples: exampleDecisionQuadrants,
  parentKey: 'decisionId',
  children: [],
};
