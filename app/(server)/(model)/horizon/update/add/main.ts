import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonUpdateAddObj {
  id: string;
  updateId: string;
  clusterUpdateId: string;
  value: number;
  message: string;
  created: string;
}

export const horizonUpdateAddGql = `
type HorizonUpdateAddObj {
  id: String!
  updateId: String!
  clusterUpdateId: String!
  value: Int!
  message: String!
  created: String!
}
`;

export const ContextForHorizonUpdateAddObj = createContext<HorizonUpdateAddObj>(
  {} as HorizonUpdateAddObj,
);

export const exampleHorizonUpdateAdd: HorizonUpdateAddObj = {
  id: '0',
  updateId: '0',
  clusterUpdateId: '0',
  value: 11,
  message: 'Hello World',
  created: new Date().toISOString(),
};

export const exampleHorizonUpdateAdds: HorizonUpdateAddObj[] = [
  {
    id: '0',
    updateId: '0',
    clusterUpdateId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    clusterUpdateId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    clusterUpdateId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
];

export const horizonUpdateAddModel: ModelInterface<HorizonUpdateAddObj> = {
  name: 'add',
  gql: horizonUpdateAddGql,
  example: exampleHorizonUpdateAdd,
  examples: exampleHorizonUpdateAdds,
  parentKey: 'updateId',
  children: [],
};
