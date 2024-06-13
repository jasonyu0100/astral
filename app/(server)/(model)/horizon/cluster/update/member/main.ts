import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ClusterUpdateMemberObj {
  id: string;
  updateId: string;
  userId: string;
  created: string;
}

export const clusterUpdateMemberGql = `
type ClusterUpdateMemberObj {
  id: String!
  updateId: String!
  userId: String!
  created: String!
}
`;

export const ContextForClusterUpdateMemberObj = createContext<ClusterUpdateMemberObj>(
  {} as ClusterUpdateMemberObj,
);

export const exampleClusterUpdateMember: ClusterUpdateMemberObj = {
  id: '0',
  updateId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleClusterUpdateMembers: ClusterUpdateMemberObj[] = [
  {
    id: '0',
    updateId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    updateId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const clusterUpdateMemberModel: ModelInterface<ClusterUpdateMemberObj> = {
  name: 'member',
  gql: clusterUpdateMemberGql,
  example: exampleClusterUpdateMember,
  examples: exampleClusterUpdateMembers,
  parentKey: 'updateId',
  children: [],
}