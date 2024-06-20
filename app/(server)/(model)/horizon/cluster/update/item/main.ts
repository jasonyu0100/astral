import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ClusterUpdateItemObj {
  id: string;
  updateId: string;
  value: number;
  message: string;
  created: string;
}

export const clusterUpdateItemGql = `
type ClusterUpdateItemObj {
  id: String!
  updateId: String!
  value: Int!
  message: String!
  created: String!
}
`;

export const ContextForClusterUpdateItemObj =
  createContext<ClusterUpdateItemObj>({} as ClusterUpdateItemObj);

export const exampleClusterUpdateItem: ClusterUpdateItemObj = {
  id: '0',
  updateId: '0',
  value: 11,
  message: 'Hello World',
  created: new Date().toISOString(),
};

export const exampleClusterUpdateItems: ClusterUpdateItemObj[] = [
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

export const clusterUpdateItemModel: ModelInterface<ClusterUpdateItemObj> = {
  name: 'add',
  gql: clusterUpdateItemGql,
  example: exampleClusterUpdateItem,
  examples: exampleClusterUpdateItems,
  parentKey: 'updateId',
  children: [],
};
