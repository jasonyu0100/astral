import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface HorizonUpdateItemObj {
  id: string;
  updateId: string;
  value: number;
  message: string;
  created: string;
}

export const horizonUpdateItemGql = `
type HorizonUpdateItemObj {
  id: String!
  updateId: String!
  value: Int!
  message: String!
  created: String!
}
`;

export const ContextForHorizonUpdateItemObj =
  createContext<HorizonUpdateItemObj>({} as HorizonUpdateItemObj);

export const exampleHorizonUpdateItem: HorizonUpdateItemObj = {
  id: '0',
  updateId: '0',
  value: 11,
  message: 'Hello World',
  created: new Date().toISOString(),
};

export const exampleHorizonUpdateItems: HorizonUpdateItemObj[] = [
  {
    id: '0',
    updateId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    value: 11,
    message: 'Hello World',
    created: new Date().toISOString(),
  },
];

export const horizonUpdateItemModel: ModelInterface<HorizonUpdateItemObj> = {
  name: 'add',
  gql: horizonUpdateItemGql,
  example: exampleHorizonUpdateItem,
  examples: exampleHorizonUpdateItems,
  parentKey: 'updateId',
  children: [],
};
