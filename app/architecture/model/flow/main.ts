import moment from 'moment';
import { createContext } from 'react';
import { ModelInterface } from '../main';

export interface FlowObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  created: string;
  target: string;
  completed: boolean;
}

export const flowGql = `
type FlowObj {
  id: String!
  userId: String!
  title: String!
  description: String!
  created: String!
  target: String!
  completed: Boolean!
}
`;

export const ContextForFlowObj = createContext<FlowObj>({} as FlowObj);

export const ContextForCurrentFlowObj = createContext<FlowObj>({} as FlowObj);

export const exampleFlow: FlowObj = {
  id: '0',
  userId: '0',
  title: 'Flow Example',
  description: 'Flow Objective',
  created: new Date().toISOString(),
  target: moment(new Date()).add(7, 'd').toISOString(),
  completed: false,
};

export const exampleFlows: FlowObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Flow Example',
    description: 'Flow Objective',
    created: new Date().toISOString(),
    target: moment(new Date()).add(7, 'd').toISOString(),
    completed: false,
  },
  {
    id: '0',
    userId: '0',
    title: 'Flow Example',
    description: 'Flow Objective',
    created: new Date().toISOString(),
    target: moment(new Date()).add(7, 'd').toISOString(),
    completed: false,
  },
  {
    id: '0',
    userId: '0',
    title: 'Flow Example',
    description: 'Flow Objective',
    created: new Date().toISOString(),
    target: moment(new Date()).add(7, 'd').toISOString(),
    completed: false,
  },
];

export const flowModel: ModelInterface<FlowObj> = {
  name: 'flow',
  gql: flowGql,
  example: exampleFlow,
  examples: exampleFlows,
  parentKey: 'userId',
  children: ['space'],
};
